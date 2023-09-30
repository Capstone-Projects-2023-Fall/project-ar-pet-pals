"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),h=a,m=l["".concat(c,".").concat(h)]||l[h]||d[h]||s;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:3},o="Sequence Diagrams",i={unversionedId:"system-architecture/sequence-diagrams",id:"system-architecture/sequence-diagrams",title:"Sequence Diagrams",description:"Use case 2",source:"@site/docs/system-architecture/sequence-diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/sequence-diagrams",permalink:"/project-ar-pet-pals/docs/system-architecture/sequence-diagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-ar-pet-pals/edit/main/documentation/docs/system-architecture/sequence-diagrams.md",tags:[],version:"current",lastUpdatedBy:"son2005",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Components",permalink:"/project-ar-pet-pals/docs/system-architecture/components"},next:{title:"Algorithm Overview",permalink:"/project-ar-pet-pals/docs/system-architecture/algorithm-overview"}},c={},u=[{value:"Use case 2",id:"use-case-2",level:2},{value:"Use case 3",id:"use-case-3",level:2}],p={toc:u};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,a.kt)("h2",{id:"use-case-2"},"Use case 2"),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    title Sequence Diagram 2\n\n    actor user\n\n    %% user->>+appstore: requests app\n    %% appstore--\x3e>-user: downloads and installs app\n\n    user->>APP: opens app\n    APP--\x3e>user: \"Welcome\"\n\n    user->>APP: creates an account\n    APP->>database: stores user's info.\n    database--\x3e>APP: returns new info.\n    APP--\x3e>user: shows updated information\n    Note left of user: Has not yet eaten\n\n    APP->>user: Sends notification to feed pet\n    user--\x3eAPP: Opens app\n    APP->>user: Display malnourished pet\n    Note left of user: Cooks chicken \n    user--\x3e>APP: shows chicken to camera\n    APP->>objectRecognition: shows user's video about food\n    objectRecognition--\x3e>APP: sends back the food's information\n    APP->>user: Displays food information\n    APP->>user: Asks if food was recognized properly\n    user--\x3e>APP: confirms food was recognized properly\n    APP->>database: improves pet's health to 100%\n    database--\x3e>APP: returns new pet info.\n    APP->>user: Encourages user for eating healthy\n"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"## Use Case 2- APP Helping User Make Healthier Food Choices\n1. A user is a works from home and is trying to improve their eating habits.\n2. User downloads ARPP to aid their nutrition goals and creates an account. \n3. User has been working for hours and has not eaten.\n4. User receives a notification from the app reminding them to feed their pet. \n5. User opens the app and sees their virtual pet sitting on their desk, looking very malnourished and weak. \n6. User cooks a chicken breast.\n7. User points the camera at its food and the app recognizes the food correctly, asking the user to verify. \n8. User taps a button to confirm that the food is correctly recognized. \n9. The virtual pet is now nourished and at100% health due to the high nutritional value of the chicken breast.\n10. The user is encouraged by their pets' happiness and continues to eat healthier meals. \n")),(0,a.kt)("h2",{id:"use-case-3"},"Use case 3"),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    title Sequence Diagram 3\n\n    actor user\n    activate APP\n    activate database\n    APP->>database: Checks pet's status\n    database--\x3e>APP: Sends pet status\n    \n    Note right of user: User does not login for a while\n\n    APP->>user: Sends notification about pet's status\n    user--\x3e>APP: logs in\n    APP->>user: \"welcome back\"\n    APP->>user: Displays pet that looks hyper\n    user--\x3e>APP: Clicks button to indicate starting activity\n    \n    user->>APP: User walks\n    Note right of APP: App records steps with smartphone's sensor\n    user->>APP: Clicks button to end activity\n    APP->>database: Improves pet's status\n    database--\x3e>APP: Sends new status\n    APP--\x3e>user: Displays calmer pet\n    deactivate database"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"## Use Case 3- APP Helping User Keep Active\n1. A user is a software engineer working from home full time and has eaten but has not moved in a while due to several long morning zoom meetings.\n2. The user receives a notification from the app letting them know that their pet is in need of a walk. \n3. The user opens the app and sees their virtual pet in their room, looking very hyper and needing exercise. The pet\u2019s happiness bar is low. \n4. The user taps a button to indicate they are starting their activity.\n5. The user stands up and takes a walk down their hallway and back to their room. \n6. The app tracks the users steps using their smartphones built in hardware sensors. \n7. The user taps a button on the app to record their activity. \n8. The virtual pet is seen on screen in the users room visibly calmer/happier, and its health bar is at 100%.\n")))}l.isMDXComponent=!0}}]);