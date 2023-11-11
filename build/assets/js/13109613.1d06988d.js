"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[273],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,h=u["".concat(o,".").concat(d)]||u[d]||m[d]||n;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5526:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(7462),i=(a(7294),a(3905));const n={title:"Services",description:"What are the services available in AstroCore?",sidebar_position:2},l="Services",s={unversionedId:"high-level-architecture/services",id:"high-level-architecture/services",title:"Services",description:"What are the services available in AstroCore?",source:"@site/docs/high-level-architecture/services.md",sourceDirName:"high-level-architecture",slug:"/high-level-architecture/services",permalink:"/docs/high-level-architecture/services",draft:!1,editUrl:"https://github.com/scsd-cdh/docs/tree/main/docs/high-level-architecture/services.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Services",description:"What are the services available in AstroCore?",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/high-level-architecture/intro"},next:{title:"Messaging",permalink:"/docs/high-level-architecture/messaging"}},o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Service Management",id:"service-management",level:2},{value:"Core Services",id:"core-services",level:2},{value:"Health Management",id:"health-management",level:3},{value:"File Manager",id:"file-manager",level:3},{value:"Data Storage",id:"data-storage",level:3},{value:"Telemetry",id:"telemetry",level:3},{value:"Watchdog",id:"watchdog",level:3},{value:"Communications",id:"communications",level:3},{value:"Scheduler",id:"scheduler",level:3},{value:"Mission Services",id:"mission-services",level:2},{value:"Imaging",id:"imaging",level:3},{value:"Inference",id:"inference",level:3},{value:"Laboratory",id:"laboratory",level:3},{value:"ADCS",id:"adcs",level:3},{value:"Thermal",id:"thermal",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"services"},"Services"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Services are the highest level of abstraction in AstroCore applications. They are tasks which are executed at a certain frequency and are expected to accomplish one specific functionality. These tasks will periodically check for events, as well as periodically execute some functionality. These services should have CLI utilities to interact with them."),(0,i.kt)("h2",{id:"service-management"},"Service Management"),(0,i.kt)("p",null,"Similar to the systemd utility for Linux operating systems, there should be a CLI utility that we can use to get a list of all running services, what their state is (running, suspended, disabled) as well as to be able to see some logs."),(0,i.kt)("h2",{id:"core-services"},"Core Services"),(0,i.kt)("p",null,"Services will be made available from the AstroCore crate. They will be part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"AstroCore.Services")," package. If the mission application requires something other than the generic implementation, it will need to create its own Custom Service."),(0,i.kt)("h3",{id:"health-management"},"Health Management"),(0,i.kt)("p",null,"This service handles AstroCore service health checks and logging them. More specifically, it will execute periodically and inspect all other running services. If an error is detected, it will examine the severity of the error, and handle it accordingly. As an example, are are some examples of how these errors could be handled:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FATAL"),": The Health Management service will ",(0,i.kt)("strong",{parentName:"li"},"disable")," the service, and log the error. This severity should be used for errors that can threaten the rest of the mission. Since AstroCore will disable the service, this severity should be used with very good justifications."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ERROR"),": The Health Management service will ",(0,i.kt)("strong",{parentName:"li"},"restart")," the service, and log the error. This severity should be used for errors that the service can not recover from on its own."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"WARN"),": The Health Management service will clear the error, and log it. This severity should be used for errors that do not prevent the service from continuing its operations, but should still be logged. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DEBUG"),": The Health Management service will clear the message, and log it. This severity should be used for debug messages. These messages shall only be logged while the ",(0,i.kt)("inlineCode",{parentName:"li"},"ASTROCORE_DEBUG")," flag is set to False. ")),(0,i.kt)("h3",{id:"file-manager"},"File Manager"),(0,i.kt)("p",null,"This service handles access to the file system. Whenever a file is created or opened, it will return a ",(0,i.kt)("inlineCode",{parentName:"p"},"AstroCore.Services.Filesystem.File")," object. It should most likely implement the following commands: "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Commands:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"fss_open_file")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: Attempts to open a file at the given path."),(0,i.kt)("li",{parentName:"ul"},"Parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," (String): File path."))),(0,i.kt)("li",{parentName:"ul"},"Return Codes: May return appropriate status codes indicating success or failure."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"fss_create_file"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"fss_delete_file"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"fss_file_exists"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"fss_get_cwd"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"fss_set_cwd")))),(0,i.kt)("h3",{id:"data-storage"},"Data Storage"),(0,i.kt)("p",null,"This service handles storing data that should be made accessible to all services (globals). It should most likely implement the following commands:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Commands:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"dss_store_data")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: Stores data at the specified key position."),(0,i.kt)("li",{parentName:"ul"},"Parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," (String): Key position."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data")," (?): Data to be stored."))),(0,i.kt)("li",{parentName:"ul"},"Return Codes: May return appropriate status codes indicating success or failure."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"dss_fetch_data")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: Retrieves data stored at a given key."),(0,i.kt)("li",{parentName:"ul"},"Parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," (String): Key position for data retrieval."))),(0,i.kt)("li",{parentName:"ul"},"Return Codes: May return appropriate status codes indicating success or failure."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"dss_delete_data")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: Deletes data stored at a given key."),(0,i.kt)("li",{parentName:"ul"},"Parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," (String): Key position for data deletion."))),(0,i.kt)("li",{parentName:"ul"},"Return Codes: May return appropriate status codes indicating success or failure."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"dss_data_exists")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: Verifies data existence at a specific key."),(0,i.kt)("li",{parentName:"ul"},"Parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," (String): Key position for data existence verification."))),(0,i.kt)("li",{parentName:"ul"},"Return Codes: May return appropriate status codes indicating success or failure.")))),(0,i.kt)("h3",{id:"telemetry"},"Telemetry"),(0,i.kt)("h3",{id:"watchdog"},"Watchdog"),(0,i.kt)("h3",{id:"communications"},"Communications"),(0,i.kt)("h3",{id:"scheduler"},"Scheduler"),(0,i.kt)("h2",{id:"mission-services"},"Mission Services"),(0,i.kt)("h3",{id:"imaging"},"Imaging"),(0,i.kt)("h3",{id:"inference"},"Inference"),(0,i.kt)("h3",{id:"laboratory"},"Laboratory"),(0,i.kt)("h3",{id:"adcs"},"ADCS"),(0,i.kt)("h3",{id:"thermal"},"Thermal"))}m.isMDXComponent=!0}}]);