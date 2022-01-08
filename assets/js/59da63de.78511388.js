"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7077],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),c=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(a.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,v=m["".concat(a,".").concat(d)]||m[d]||u[d]||i;return t?n.createElement(v,s(s({ref:r},p),{},{components:t})):n.createElement(v,s({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=m;var l={};for(var a in r)hasOwnProperty.call(r,a)&&(l[a]=r[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6766:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),s=["components"],l={},a=void 0,c={unversionedId:"commands/rhoas_service-registry_role_list",id:"commands/rhoas_service-registry_role_list",title:"rhoas_service-registry_role_list",description:"rhoas service-registry role list",source:"@site/docs/commands/rhoas_service-registry_role_list.md",sourceDirName:"commands",slug:"/commands/rhoas_service-registry_role_list",permalink:"/commands/rhoas_service-registry_role_list",editUrl:"https://github.com/redhat-developer/app-services-cli/docs/commands/rhoas_service-registry_role_list.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rhoas_service-registry_role_add",permalink:"/commands/rhoas_service-registry_role_add"},next:{title:"rhoas_service-registry_role_revoke",permalink:"/commands/rhoas_service-registry_role_revoke"}},p=[{value:"rhoas service-registry role list",id:"rhoas-service-registry-role-list",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],u={toc:p};function m(e){var r=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"rhoas-service-registry-role-list"},"rhoas service-registry role list"),(0,i.kt)("p",null,"List roles"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Listing all roles on selected instance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rhoas service-registry role list [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"## List user and service account roles\nrhoas service-registry role list\n\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --instance-id string   ID of the Service Registry instance to be used. By default, uses the currently selected instance\n  -o, --output string        Output format (json, yaml, yml)\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/commands/rhoas_service-registry_role"},"rhoas service-registry role"),"\t - Service Registry role management")))}m.isMDXComponent=!0}}]);