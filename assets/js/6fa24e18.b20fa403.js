"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1357],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||i;return t?n.createElement(m,o(o({ref:r},p),{},{components:t})):n.createElement(m,o({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},296:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],s={},c=void 0,l={unversionedId:"commands/rhoas_service-registry_artifact_export",id:"commands/rhoas_service-registry_artifact_export",title:"rhoas_service-registry_artifact_export",description:"rhoas service-registry artifact export",source:"@site/docs/commands/rhoas_service-registry_artifact_export.md",sourceDirName:"commands",slug:"/commands/rhoas_service-registry_artifact_export",permalink:"/commands/rhoas_service-registry_artifact_export",editUrl:"https://github.com/redhat-developer/app-services-cli/docs/commands/rhoas_service-registry_artifact_export.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rhoas_service-registry_artifact_download",permalink:"/commands/rhoas_service-registry_artifact_download"},next:{title:"rhoas_service-registry_artifact_get",permalink:"/commands/rhoas_service-registry_artifact_get"}},p=[{value:"rhoas service-registry artifact export",id:"rhoas-service-registry-artifact-export",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],f={toc:p};function u(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"rhoas-service-registry-artifact-export"},"rhoas service-registry artifact export"),(0,i.kt)("p",null,"Export data from Service Registry instance"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Export all artifacts and metadata from Service Registry instance to specified file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rhoas service-registry artifact export [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"## Export all artifacts and metadata to export file for another Service Registry instance\nrhoas service-registry artifact export --file=export.zip\n\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --instance-id string   ID of the Service Registry instance to be used. By default, uses the currently selected instance\n      --output-file string   File location of the artifact\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/commands/rhoas_service-registry_artifact"},"rhoas service-registry artifact"),"\t - Manage Service Registry artifacts")))}u.isMDXComponent=!0}}]);