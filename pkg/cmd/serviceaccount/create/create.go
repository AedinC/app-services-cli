package create

import (
	"context"
	"fmt"
	"os"

	kasclient "github.com/bf2fc6cc711aee1a0c2a/cli/pkg/api/kas/client"

	"github.com/AlecAivazis/survey/v2"
	flagutil "github.com/bf2fc6cc711aee1a0c2a/cli/pkg/cmdutil/flags"
	"github.com/bf2fc6cc711aee1a0c2a/cli/pkg/iostreams"
	"github.com/bf2fc6cc711aee1a0c2a/cli/pkg/serviceaccount/credentials"

	"github.com/bf2fc6cc711aee1a0c2a/cli/internal/config"
	"github.com/bf2fc6cc711aee1a0c2a/cli/internal/localizer"
	"github.com/bf2fc6cc711aee1a0c2a/cli/pkg/cmd/factory"
	"github.com/bf2fc6cc711aee1a0c2a/cli/pkg/connection"
	"github.com/bf2fc6cc711aee1a0c2a/cli/pkg/logging"
	"github.com/spf13/cobra"
)

type Options struct {
	IO         *iostreams.IOStreams
	Config     config.IConfig
	Connection func() (connection.Connection, error)
	Logger     func() (logging.Logger, error)

	fileFormat  string
	overwrite   bool
	name        string
	description string
	filename    string

	interactive bool
}

// NewCreateCommand creates a new command to create service accounts
func NewCreateCommand(f *factory.Factory) *cobra.Command {
	opts := &Options{
		IO:         f.IOStreams,
		Config:     f.Config,
		Connection: f.Connection,
		Logger:     f.Logger,
	}

	cmd := &cobra.Command{
		Use:     localizer.MustLocalizeFromID("serviceAccount.create.cmd.use"),
		Short:   localizer.MustLocalizeFromID("serviceAccount.create.cmd.shortDescription"),
		Long:    localizer.MustLocalizeFromID("serviceAccount.create.cmd.longDescription"),
		Example: localizer.MustLocalizeFromID("serviceAccount.create.cmd.example"),
		RunE: func(cmd *cobra.Command, _ []string) error {
			if !opts.IO.CanPrompt() && opts.name == "" {
				return fmt.Errorf(localizer.MustLocalize(&localizer.Config{
					MessageID: "flag.error.requiredWhenNonInteractive",
					TemplateData: map[string]interface{}{
						"Flag": "name",
					},
				}))
			} else if opts.name == "" && opts.description == "" {
				opts.interactive = true
			}

			if !opts.interactive && opts.fileFormat == "" {
				return fmt.Errorf(localizer.MustLocalize(&localizer.Config{
					MessageID: "flag.error.requiredFlag",
					TemplateData: map[string]interface{}{
						"Flag": "file-format",
					},
				}))
			}

			// check that a valid --file-format flag value is used
			validOutput := flagutil.IsValidInput(opts.fileFormat, flagutil.CredentialsOutputFormats...)
			if !validOutput && opts.fileFormat != "" {
				return fmt.Errorf(localizer.MustLocalize(&localizer.Config{
					MessageID: "flag.error.invalidValue",
					TemplateData: map[string]interface{}{
						"Flag":  "file-format",
						"Value": opts.fileFormat,
					},
				}))
			}

			return runCreate(opts)
		},
	}

	cmd.Flags().StringVar(&opts.name, "name", "", localizer.MustLocalizeFromID("serviceAccount.create.flag.name.description"))
	cmd.Flags().StringVar(&opts.description, "description", "", localizer.MustLocalizeFromID("serviceAccount.create.flag.description.description"))
	cmd.Flags().BoolVar(&opts.overwrite, "overwrite", false, localizer.MustLocalizeFromID("serviceAccount.common.flag.overwrite.description"))
	cmd.Flags().StringVar(&opts.filename, "file-location", "", localizer.MustLocalizeFromID("serviceAccount.common.flag.fileLocation.description"))
	cmd.Flags().StringVar(&opts.fileFormat, "file-format", "", localizer.MustLocalizeFromID("serviceAccount.common.flag.fileFormat.description"))

	return cmd
}

func runCreate(opts *Options) error {
	logger, err := opts.Logger()
	if err != nil {
		return err
	}

	connection, err := opts.Connection()
	if err != nil {
		return err
	}

	if opts.interactive {
		// run the create command interactively
		err = runInteractivePrompt(opts)
		if err != nil {
			return err
		}
	} else if opts.filename == "" {
		// obtain the absolute path to where credentials will be saved
		opts.filename = credentials.GetDefaultPath(opts.fileFormat)
	}

	// If the credentials file already exists, and the --overwrite flag is not set then return an error
	// indicating that the user should explicitly request overwriting of the file
	_, err = os.Stat(opts.filename)
	if err == nil && !opts.overwrite {
		return fmt.Errorf(localizer.MustLocalize(&localizer.Config{
			MessageID: "serviceAccount.common.error.credentialsFileAlreadyExists",
			TemplateData: map[string]interface{}{
				"FilePath": opts.filename,
			},
		}))
	}

	// create the service account
	serviceAccountPayload := &kasclient.ServiceAccountRequest{Name: opts.name, Description: &opts.description}

	api := connection.API()
	a := api.Kafka().CreateServiceAccount(context.Background())
	a = a.ServiceAccountRequest(*serviceAccountPayload)
	serviceacct, httpRes, apiErr := a.Execute()

	if apiErr.Error() != "" {
		switch httpRes.StatusCode {
		case 403:
			return fmt.Errorf("%v: %w", localizer.MustLocalize(&localizer.Config{
				MessageID: "serviceAccount.common.error.forbidden",
				TemplateData: map[string]interface{}{
					"Operation": "create",
				},
			}), apiErr)
		case 500:
			return fmt.Errorf("%v: %w", localizer.MustLocalizeFromID("serviceAccount.common.error.internalServerError"), apiErr)
		default:
			return apiErr
		}
	}

	logger.Info(localizer.MustLocalize(&localizer.Config{
		MessageID: "serviceAccount.create.log.info.createdSuccessfully",
		TemplateData: map[string]interface{}{
			"ID":   serviceacct.GetId(),
			"Name": serviceacct.GetName(),
		},
	}))

	creds := &credentials.Credentials{
		ClientID:     serviceacct.GetClientID(),
		ClientSecret: serviceacct.GetClientSecret(),
	}

	// save the credentials to a file
	err = credentials.Write(opts.fileFormat, opts.filename, creds)
	if err != nil {
		return fmt.Errorf("%v: %w", localizer.MustLocalizeFromID("serviceAccount.common.error.couldNotSaveCredentialsFile"), apiErr)
	}

	logger.Info(localizer.MustLocalize(&localizer.Config{
		MessageID: "serviceAccount.common.log.info.credentialsSaved",
		TemplateData: map[string]interface{}{
			"FilePath": opts.filename,
		},
	}))

	return nil
}

func runInteractivePrompt(opts *Options) (err error) {
	_, err = opts.Connection()
	if err != nil {
		return err
	}

	logger, err := opts.Logger()
	if err != nil {
		return err
	}

	logger.Debug(localizer.MustLocalizeFromID("common.log.debug.startingInteractivePrompt"))

	promptName := &survey.Input{
		Message: localizer.MustLocalizeFromID("serviceAccount.create.input.name.message"),
		Help:    localizer.MustLocalizeFromID("serviceAccount.create.input.name.help"),
	}

	err = survey.AskOne(promptName, &opts.name, survey.WithValidator(survey.Required))
	if err != nil {
		return err
	}

	// if the --file-format flag was not used, ask in the prompt
	if opts.fileFormat == "" {
		logger.Debug(localizer.MustLocalizeFromID("serviceAccount.common.log.debug.interactive.fileFormatNotSet"))

		fileFormatPrompt := &survey.Select{
			Message: localizer.MustLocalizeFromID("serviceAccount.create.input.fileFormat.message"),
			Help:    localizer.MustLocalizeFromID("serviceAccount.create.input.fileFormat.help"),
			Options: flagutil.CredentialsOutputFormats,
			Default: "env",
		}

		err = survey.AskOne(fileFormatPrompt, &opts.fileFormat)
		if err != nil {
			return err
		}
	}

	opts.filename, opts.overwrite, err = credentials.ChooseFileLocation(opts.fileFormat, opts.filename, opts.overwrite)
	if err != nil {
		return err
	}

	promptDescription := &survey.Multiline{Message: localizer.MustLocalizeFromID("serviceAccount.create.input.description.message")}

	err = survey.AskOne(promptDescription, &opts.description)
	if err != nil {
		return err
	}

	return nil
}
