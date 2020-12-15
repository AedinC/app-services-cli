if ! command -v pandoc &> /dev/null
then
  echo "Please install pandoc [https://pandoc.org]"
  exit 1
fi

files=($(find "./docs/commands" -type f -name '*.md'))
echo "Generating adoc"
for item in ${files[*]}
do
  filename="`basename ${item%.*}`"   
  adocFile="${item%.*}.adoc"   
  printf "Working on   %s\n" $filename
  pandoc -s $item -f markdown -t asciidoc -o ${adocFile}

  if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    sed -i 's/.md/.adoc/g' ${adocFile}
  elif [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' 's/.md/.adoc/g' ${adocFile}
  fi

  echo "Generated adoc. Removing markdown"
  rm -f ${item}
done