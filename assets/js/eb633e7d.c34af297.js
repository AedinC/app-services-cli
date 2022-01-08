"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9361],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=n,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return r?a.createElement(m,o(o({ref:t},l),{},{components:r})):a.createElement(m,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4688:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],s={},c=void 0,p={unversionedId:"commands/rhoas_service-registry_artifact_update",id:"commands/rhoas_service-registry_artifact_update",title:"rhoas_service-registry_artifact_update",description:"rhoas service-registry artifact update",source:"@site/docs/commands/rhoas_service-registry_artifact_update.md",sourceDirName:"commands",slug:"/commands/rhoas_service-registry_artifact_update",permalink:"/commands/rhoas_service-registry_artifact_update",editUrl:"https://github.com/redhat-developer/app-services-cli/docs/commands/rhoas_service-registry_artifact_update.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rhoas_service-registry_artifact_state-set",permalink:"/commands/rhoas_service-registry_artifact_state-set"},next:{title:"rhoas_service-registry_artifact_versions",permalink:"/commands/rhoas_service-registry_artifact_versions"}},l=[{value:"rhoas service-registry artifact update",id:"rhoas-service-registry-artifact-update",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],u={toc:l};function f(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"rhoas-service-registry-artifact-update"},"rhoas service-registry artifact update"),(0,i.kt)("p",null,"Update artifact"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Update artifact from file or directly standard input"),(0,i.kt)("p",null,"Artifacts are typically in JSON format for most supported types, but may be in another format for a few (for example, PROTOBUF).\nThe type of the content should be compatible with the current artifact type."),(0,i.kt)("p",null,"When successful, this creates a new version of the artifact, making it the most recent (and therefore official) version of the artifact."),(0,i.kt)("p",null,"An artifact is updated using the content provided in the request body.\nThis content is updated under a unique artifactId provided by user."),(0,i.kt)("p",null,"Updated artifact content should conform to validity and compatibility rules set for the registry instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rhoas service-registry artifact update [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"## update artifact from group and artifact-id\nrhoas service-registry artifact update --artifact-id=my-artifact --group my-group my-artifact.json\n\n## update artifact from group and artifact-id\nrhoas service-registry artifact update --artifact-id=my-artifact --group my-group my-artifact.json\n\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --artifact-id string   ID of the artifact\n      --description string   Custom description of the artifact\n  -f, --file string          File location of the artifact\n  -g, --group string         Artifact group (default "default")\n      --instance-id string   ID of the Service Registry instance to be used. By default, uses the currently selected instance\n      --name string          Custom name of the artifact\n      --version string       Custom version of the artifact (for example 1.0.0)\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/commands/rhoas_service-registry_artifact"},"rhoas service-registry artifact"),"\t - Manage Service Registry artifacts")))}f.isMDXComponent=!0}}]);