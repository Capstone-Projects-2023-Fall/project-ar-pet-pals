"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9366],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:2},s="Components",o={unversionedId:"system-architecture/components",id:"system-architecture/components",title:"Components",description:"Client Application",source:"@site/docs/system-architecture/components.md",sourceDirName:"system-architecture",slug:"/system-architecture/components",permalink:"/project-ar-pet-pals/docs/system-architecture/components",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-ar-pet-pals/edit/main/documentation/docs/system-architecture/components.md",tags:[],version:"current",lastUpdatedBy:"son2005",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"General Requirements",permalink:"/project-ar-pet-pals/docs/system-architecture/general-requirements"},next:{title:"Sequence Diagrams",permalink:"/project-ar-pet-pals/docs/system-architecture/sequence-diagrams"}},c={},l=[{value:"Client Application",id:"client-application",level:2},{value:"Object Recognition AI",id:"object-recognition-ai",level:2},{value:"Virtual Pet Behavior System",id:"virtual-pet-behavior-system",level:2},{value:"Backend Server",id:"backend-server",level:2},{value:"Database",id:"database",level:2},{value:"User&#39;s Smartphone Sensors",id:"users-smartphone-sensors",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"components"},"Components"),(0,n.kt)("h2",{id:"client-application"},"Client Application"),(0,n.kt)("p",null,"The client application is the ARPetPals mobile app installed on the user's Android. It serves as the primary interface that users interact with their virtual pets and the augmented reality environment."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Interfaces"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main User Interface: The user interacts with the virtual pet, the AR environment, and various app features through the mobile app's user interface."),(0,n.kt)("li",{parentName:"ul"},"Camera: The app uses the smartphone's camera to capture the real-world environment, facilitating object recognition and virtual pet integration."),(0,n.kt)("li",{parentName:"ul"},"API Integration: The app may interface with external services or APIs for certain features like user authentication.")),(0,n.kt)("h2",{id:"object-recognition-ai"},"Object Recognition AI"),(0,n.kt)("p",null,"Object recognition AI is a crucial component that enables the virtual pet to interact with real-world objects. It identifies and analyzes objects captured by the smartphone's camera to trigger appropriate responses from the virtual pet."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Interfaces"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Camera Feed Interface: The object recognition AI receives input from the smartphone's camera feed, continuously processing visual data to recognize objects."),(0,n.kt)("li",{parentName:"ul"},"Virtual Pet Interaction: When objects are recognized, the AI communicates with the virtual pet's behavior system to trigger animations, comments, or interactions.")),(0,n.kt)("h2",{id:"virtual-pet-behavior-system"},"Virtual Pet Behavior System"),(0,n.kt)("p",null,"The virtual pet behavior system governs the actions, animations, and responses of the user's virtual pet. It ensures that the pet exhibits lifelike behaviors and interactions based on user actions and environmental cues."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Interfaces"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"User Interaction Interface: The behavior system responds to user interactions such as feeding, playing, and cleaning.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Object Recognition Interface: It receives signals from the object recognition AI to trigger specific animations or comments when the pet interacts with recognized objects.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Health and Happiness Metrics Interface: The system calculates and updates the pet's health and happiness metrics based on user interactions and environmental cues."))),(0,n.kt)("h2",{id:"backend-server"},"Backend Server"),(0,n.kt)("p",null,"The backend server handles data related to the leaderboard feature. It stores and manages user profiles, pet metrics, and leaderboard rankings."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Interfaces"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User Profile Data Interface: The server communicates with the client app to store and retrieve user profiles, including pet information and activity metrics."),(0,n.kt)("li",{parentName:"ul"},"Leaderboard Data Interface: It provides leaderboard data to the client app, enabling users to view\nthe rankings of pets based on health and happiness.")),(0,n.kt)("h2",{id:"database"},"Database"),(0,n.kt)("p",null,"If a backend server is used, it may rely on a database to store and manage user and leaderboard data."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Interfaces"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Server-Database Interface: The backend server communicates with the database to perform operations such as storing user profiles, updating pet metrics, and retrieving leaderboard data.")),(0,n.kt)("h2",{id:"users-smartphone-sensors"},"User's Smartphone Sensors"),(0,n.kt)("p",null,"The user's smartphone is equipped with sensors such as GPS and accelerometers. These sensors are used to track the user's physical movement and activity level."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Interfaces"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Activity Tracking Interface: The client app accesses sensor data to monitor the user's physical movement and translate it into activity metrics that impact the virtual pet's well-being.")))}u.isMDXComponent=!0}}]);