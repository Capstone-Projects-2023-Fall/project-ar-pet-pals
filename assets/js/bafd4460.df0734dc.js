"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9617],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},200:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:4},l="Features and Requirements",o={unversionedId:"requirements/features-and-requirements",id:"requirements/features-and-requirements",title:"Features and Requirements",description:"Functional Requirements",source:"@site/docs/requirements/features-and-requirements.md",sourceDirName:"requirements",slug:"/requirements/features-and-requirements",permalink:"/project-ar-pet-pals/docs/requirements/features-and-requirements",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-ar-pet-pals/edit/main/documentation/docs/requirements/features-and-requirements.md",tags:[],version:"current",lastUpdatedBy:"Anya Tewari",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Development Environment",permalink:"/project-ar-pet-pals/docs/requirements/development-environment"},next:{title:"Use-case descriptions",permalink:"/project-ar-pet-pals/docs/requirements/use-case-descriptions"}},s={},p=[{value:"Functional Requirements",id:"functional-requirements",level:2},{value:"Non-Functional Requirements",id:"non-functional-requirements",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"features-and-requirements"},"Features and Requirements"),(0,r.kt)("h2",{id:"functional-requirements"},"Functional Requirements"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ARPetPals will require registration with Google account.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users must have the option to register using their Google account for easy sign-up."),(0,r.kt)("li",{parentName:"ul"},"During registration, users will be prompted to grant necessary permissions to the app."),(0,r.kt)("li",{parentName:"ul"},"User data obtained from the Google account, such as name and profile picture, may be used to personalize the experience.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"User must allow access to the Camera and fitness app to play the game.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The app will request access to the smartphone's camera to enable augmented reality features."),(0,r.kt)("li",{parentName:"ul"},"Users will also have the option to grant access to their fitness app data, which can be used to enhance the pet's health and activity level within the game."),(0,r.kt)("li",{parentName:"ul"},"Clear explanations and prompts for granting these permissions will be provided to the user.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A welcome screen will appear first when the user first signs up explaining the game.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upon initial sign-up, a welcoming screen will provide a brief and user-friendly explanation of the game's concept and mechanics."),(0,r.kt)("li",{parentName:"ul"},"It will introduce users to their virtual pet and its role in their daily life."),(0,r.kt)("li",{parentName:"ul"},"The screen may also offer a tutorial to guide users through basic interactions.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"User picks the avatar of the pet and gives it a name.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users will have the opportunity to select and customize their pet's avatar from a range of options."),(0,r.kt)("li",{parentName:"ul"},"They will be prompted to give a unique name to their pet, fostering a sense of ownership and attachment."),(0,r.kt)("li",{parentName:"ul"},"Customization options may include selecting the pet's color, size, and features.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Main screen shows the pet, health and happiness measurements, settings")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upon completing setup, the smartphone's camera will activate, merging the virtual pet with the user's real-world environment.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The main game screen will prominently display the virtual pet, accompanied by health and happiness metrics.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Users can access the settings menu from this screen to configure preferences."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ARPetPals will use ai to detect what kind of food you are eating, and will affect the health and happiness of the pet.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AI algorithms will analyze the user's eating habits through the camera feed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The app will identify the type of food being consumed and simulate its impact on the pet's health and happiness.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A variety of food items and their corresponding effects will be programmed into the game."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ARPetPals will use ai to tell you jokes about objects that it recognizes.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The AI will recognize real-world objects through the camera.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When an object is recognized, the virtual pet may spontaneously generate and share relevant jokes or comments about the object."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Users can feed the pet by searching within the AR environment by double clicking on a space.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Users can initiate the feeding interaction by double-clicking on different areas of the ground within the augmented reality environment.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'When the user double-clicks on a specific spot, the app will simulate a "food search."')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The outcome of the search will vary; in some instances, virtual food items will appear, while in others, nothing will be found."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ARPetPals will track the user's activity and will affect the health and happiness of the pet.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ARPetPals will integrate activity tracking through the smartphone's health app.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The app will monitor the user's physical movement and encourage a healthy level of activity throughout the day.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The virtual pet's well-being, including both happiness and health metrics, will be influenced by the user's activity level.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Regular physical movement and engagement with the pet may lead to improved pet happiness and health."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The pet will have different animations depending on the event.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The virtual pet will exhibit different animations and behaviors based on various events and interactions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For instance, it may dance when happy, display curiosity when shown an object, or express hunger when it's time to eat.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"These animations enhance the pet's realism and engagement."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Users will be able to play with and clean their pet to increase health and happiness.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Users can engage in playtime activities with their pet, such as throwing virtual toys.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cleaning interactions, like brushing or bathing the pet, will also be available to boost its happiness and hygiene.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Different interactions will yield varying degrees of health and happiness improvement."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The leaderboard button will display other user\u2019s pets with the happiest and healthiest pets.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The leaderboard button allows users to view other players' virtual pets.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pets on the leaderboard will be ranked based on their happiness and health metrics.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Users can use this feature to compare their pet's well-being with others and strive for a top-ranking position."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Users can sign out of the app.")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Users will have the ability to sign out of the app when they choose to do so.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Signing out ensures the privacy and security of user data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Appropriate warnings and confirmation prompts will be provided to prevent accidental sign-outs."))),(0,r.kt)("h2",{id:"non-functional-requirements"},"Non-Functional Requirements"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usability")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"User-Friendly Interface: The app should offer an intuitive, user-friendly interface that allows users to easily navigate through different features."),(0,r.kt)("li",{parentName:"ol"},"Quick Response: The application should be responsive and quick in processing actions. Interactions with the virtual pet should not lag or delay."),(0,r.kt)("li",{parentName:"ol"},"Tutorial: An optional tutorial should be provided to familiarize new users with the app's functionalities.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Performance")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Real-Time Processing: The object and speech recognition algorithms should operate in real-time to provide a seamless user experience."),(0,r.kt)("li",{parentName:"ol"},"Low Latency: Latency should be minimized for all augmented reality functions, and any delays should not exceed 1-2 seconds."),(0,r.kt)("li",{parentName:"ol"},"Smooth Animation: Animations of the pet should run smoothly, without glitches, for an immersive experience.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Security")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"User Authentication: The Google account sign-up process must be secure, and any data collected must be stored securely."),(0,r.kt)("li",{parentName:"ol"},"Permission Management: The app should securely manage permissions for camera access and other sensitive data, revoking them if necessary upon user sign-out.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scalability")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Multi-Platform Support: The app should be compatible with both Android and iOS, and be scalable for future platforms."),(0,r.kt)("li",{parentName:"ol"},"Database Scalability: The system should be able to accommodate an increasing number of registered users and pets without degradation in performance.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Availability")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Backup and Recovery: A backup system should be in place to recover user data in case of any loss or corruption.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Accessibility")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Voice Commands: Voice recognition should be accurate and efficient for differently-abled users."),(0,r.kt)("li",{parentName:"ol"},"Visual Aids: Text should be clearly readable, and the app should offer some degree of customization for those with visual impairments.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Quality")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"High-Quality Graphics: The AR representation of the pet should be of high quality, enhancing the realism and engagement levels."),(0,r.kt)("li",{parentName:"ol"},"Sound Quality: Any sounds or speech produced within the app should be clear and free from distortion.")))}m.isMDXComponent=!0}}]);