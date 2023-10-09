"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9366],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7933:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},s="Components",o={unversionedId:"system-architecture/components",id:"system-architecture/components",title:"Components",description:"Client-Facing Application",source:"@site/docs/system-architecture/components.md",sourceDirName:"system-architecture",slug:"/system-architecture/components",permalink:"/project-ar-pet-pals/docs/system-architecture/components",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-ar-pet-pals/edit/main/documentation/docs/system-architecture/components.md",tags:[],version:"current",lastUpdatedBy:"Hy Nguyen",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"General Requirements",permalink:"/project-ar-pet-pals/docs/system-architecture/general-requirements"},next:{title:"Sequence Diagrams",permalink:"/project-ar-pet-pals/docs/system-architecture/sequence-diagrams"}},l={},c=[{value:"Client-Facing Application",id:"client-facing-application",level:2},{value:"Device Data Collection",id:"device-data-collection",level:2},{value:"Object Recognition AI",id:"object-recognition-ai",level:2},{value:"Pet Display",id:"pet-display",level:2},{value:"Pet Behavior",id:"pet-behavior",level:2},{value:"Databse Integration",id:"databse-integration",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"components"},"Components"),(0,r.kt)("h2",{id:"client-facing-application"},"Client-Facing Application"),(0,r.kt)("p",null,"This component is what the client sees when they open the application. Everybit of user interaction is prompted and handled through here."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Classes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UserInterface: Handles the display and layout of the user interface."),(0,r.kt)("li",{parentName:"ul"},"UserInputHandler: Manages user interactions and inputs."),(0,r.kt)("li",{parentName:"ul"},"NotificationManager: Sends reminders and notifications to the user."),(0,r.kt)("li",{parentName:"ul"},"LeaderBoardDisplay: Manages the display of the public leaderboard."),(0,r.kt)("li",{parentName:"ul"},"ExerciseReminder: Sends reminders to users to interact with their pet by exercising.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Class Diagram",src:a(4983).Z,width:"1405",height:"298"})),(0,r.kt)("h2",{id:"device-data-collection"},"Device Data Collection"),(0,r.kt)("p",null,"Since this application heavily relies on AR, sensor and visual data has to be constantly collected and interpreted. While the camera is the most used portion of the application, sensors such as touch and accelerometer may also provide crucial information to support a positive and seamless user experience."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Classes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CameraManager: Manages camera access and data collection."),(0,r.kt)("li",{parentName:"ul"},"SensorManager: Manages the collection of data from various sensors like accelerometer and touch."),(0,r.kt)("li",{parentName:"ul"},"DataInterpreter: Interprets and processes the collected sensor and visual data.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Class Diagram",src:a(8014).Z,width:"917",height:"266"})),(0,r.kt)("h2",{id:"object-recognition-ai"},"Object Recognition AI"),(0,r.kt)("p",null,"Once connection with the camera has been established, AR Pet Pals needs to extract relevant objects from the visual feed. Object recognition and machine learning approaches will be employed here to ensure that the app can communicate the objects it sees with the rest of the software."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Classes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ObjectRecognition: Identifies objects from the camera feed using machine learning models."),(0,r.kt)("li",{parentName:"ul"},"ObjectProcessor: Processes recognized objects and extracts relevant information."),(0,r.kt)("li",{parentName:"ul"},"AICommunicator: Facilitates communication between the object recognition component and other components."),(0,r.kt)("li",{parentName:"ul"},"NutritionRecorder: Records and processes the nutrition information of the food recognized by the object recognition AI.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Class Diagram",src:a(7085).Z,width:"1232",height:"282"})),(0,r.kt)("h2",{id:"pet-display"},"Pet Display"),(0,r.kt)("p",null,"The pet itself will be displayed using the advanced graphics technology, Unity. To allow for Unity to properly display the results classes have to be created receive configuration details and to carry the visual to the user display."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Classes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PetRenderer: Renders the pet on the screen using Unity."),(0,r.kt)("li",{parentName:"ul"},"DisplayConfigurator: Configures display settings and parameters for Unity."),(0,r.kt)("li",{parentName:"ul"},"UserDisplayManager: Manages the display of the pet and other elements on the user screen.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Class Diagram",src:a(5539).Z,width:"858",height:"266"})),(0,r.kt)("h2",{id:"pet-behavior"},"Pet Behavior"),(0,r.kt)("p",null,"Based on user actions and other factors, the pet can exhibit a variety of behaviors on-screen. This component interprets user input, the visual feed, and other inputs and converts them into pet behaviors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Classes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BehaviorInterpreter: Interprets user input, visual feed, and other inputs to determine pet behavior."),(0,r.kt)("li",{parentName:"ul"},"BehaviorManager: Manages the different behaviors the pet can exhibit."),(0,r.kt)("li",{parentName:"ul"},"UserActionProcessor: Processes user actions and converts them into corresponding pet behaviors."),(0,r.kt)("li",{parentName:"ul"},"HealthMetricCalculator: Calculates the health metrics of the pet based on user diet and exercise habits.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Class Diagram",src:a(9370).Z,width:"1188",height:"282"})),(0,r.kt)("h2",{id:"databse-integration"},"Databse Integration"),(0,r.kt)("p",null,"User and pet information will be stored in a connected database. Upon reboots of the app, new users logging, or major setting changes, the database will accessed to retrieve relevant data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Classes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DatabaseManager: Manages connections, retrievals, and updates to the database."),(0,r.kt)("li",{parentName:"ul"},"UserDataRetriever: Retrieves user and pet information from the database."),(0,r.kt)("li",{parentName:"ul"},"SettingsManager: Manages user settings and preferences and updates them in the database.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Class Diagram",src:a(7376).Z,width:"756",height:"266"})))}d.isMDXComponent=!0},4983:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/client-facing-app-cd-bb6390cd7911b43dc203583df9374246.png"},7376:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/db-integration-cd-466c543386b96bcb8e15f356290e44b9.png"},8014:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/device-data-collect-cd-f680e0bbfbfc21bc1d7e4866ad68963c.png"},7085:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/obj-recogn-ai-cd-3c0e606ab9f2fee94fb2660b7e291d17.png"},9370:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pet-behavior-cd-18dd624ecaddc627405e250c2379346b.png"},5539:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pet-display-cd-e0c5889c99da670478362b1387818692.png"}}]);