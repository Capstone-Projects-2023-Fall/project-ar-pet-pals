"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[4568],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>g});var n=s(7294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(s),h=r,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return s?n.createElement(g,a(a({ref:t},c),{},{components:s})):n.createElement(g,a({ref:t},c))}));function g(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=s.length,a=new Array(i);a[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,a[1]=o;for(var p=2;p<i;p++)a[p]=s[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,s)}h.displayName="MDXCreateElement"},2058:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=s(7462),r=(s(7294),s(3905));const i={sidebar_position:2},a="Integration Tests",o={unversionedId:"test-procedures/integration-tests",id:"test-procedures/integration-tests",title:"Integration Tests",description:"Use Case 1- APP Illustrating the Effects of Poor Nutrition",source:"@site/docs/test-procedures/integration-tests.md",sourceDirName:"test-procedures",slug:"/test-procedures/integration-tests",permalink:"/project-ar-pet-pals/docs/test-procedures/integration-tests",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-ar-pet-pals/edit/main/documentation/docs/test-procedures/integration-tests.md",tags:[],version:"current",lastUpdatedBy:"Anya Tewari",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Unit Tests",permalink:"/project-ar-pet-pals/docs/test-procedures/unit-tests"},next:{title:"Acceptance Testing",permalink:"/project-ar-pet-pals/docs/test-procedures/acceptance-testing"}},l={},p=[{value:"Use Case 1- APP Illustrating the Effects of Poor Nutrition",id:"use-case-1--app-illustrating-the-effects-of-poor-nutrition",level:2},{value:"Use Case 2- APP Helping User Make Healthier Food Choices",id:"use-case-2--app-helping-user-make-healthier-food-choices",level:2},{value:"Use Case 3- APP Helping User Keep Active",id:"use-case-3--app-helping-user-keep-active",level:2},{value:"Use Case 4 - Competitive Leaderboard",id:"use-case-4---competitive-leaderboard",level:2},{value:"Use Case 5 - Pet Personalization",id:"use-case-5---pet-personalization",level:2},{value:"Use Case 6 - User Sign-In and Sign-Out",id:"use-case-6---user-sign-in-and-sign-out",level:2}],c={toc:p};function u(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integration-tests"},"Integration Tests"),(0,r.kt)("h2",{id:"use-case-1--app-illustrating-the-effects-of-poor-nutrition"},"Use Case 1- APP Illustrating the Effects of Poor Nutrition"),(0,r.kt)("p",null,"Verify that the ARPetPals app effectively illustrates the consequences of poor nutrition through user interactions and the virtual pet's response."),(0,r.kt)("p",null,"Expected result: The virtual pet's condition accurately reflects the consequences of poor nutrition and inactivity. The app correctly recognizes the selected food items, and the virtual pet's response aligns with the poor nutritional value of the meal."),(0,r.kt)("p",null,"Test Components:"),(0,r.kt)("p",null,"-Object Recognition AI: The system component responsible for recognizing food items through the smartphone's camera."),(0,r.kt)("p",null,"-Virtual Pet Metrics: The script governing the virtual pet's responses to user actions and its metrics."),(0,r.kt)("h2",{id:"use-case-2--app-helping-user-make-healthier-food-choices"},"Use Case 2- APP Helping User Make Healthier Food Choices"),(0,r.kt)("p",null,"Test the system's ability to assist users in making healthier food choices by providing guidance and feedback in ARPetPals."),(0,r.kt)("p",null,"Expected Result: The system provides accurate feedback on the nutritional value of the selected food item. The app encourages and reinforces the importance of healthier food choices through the virtual pet's response. The user's virtual pet reflects improved health and happiness"),(0,r.kt)("p",null,"Test Components:"),(0,r.kt)("p",null,"-Object Recognition AI: The system component responsible for recognizing food items through the smartphone's camera."),(0,r.kt)("p",null,"-Virtual Pet Behavior System: The system component that responds to user interactions related to food choices."),(0,r.kt)("h2",{id:"use-case-3--app-helping-user-keep-active"},"Use Case 3- APP Helping User Keep Active"),(0,r.kt)("p",null,"Validate the system's capability to encourage and monitor user physical activity in ARPetPals."),(0,r.kt)("p",null,"Expected Result: The app effectively motivates the user to engage in physical activity in response to the virtual pet's exercise needs. The activity tracker accurately records the user's physical activity metrics. The app fetches and uses the physical activity data to reflect the virtual pet's improved condition."),(0,r.kt)("p",null,"Test Components:"),(0,r.kt)("p",null,"-ARPetPals App: The client application responsible for initiating, tracking, and displaying user physical activity and its influence on the virtual pet."),(0,r.kt)("p",null,"-Activity Tracker (e.g., Smartphone's Sensors): The system component that measures the user's physical activity metrics, such as steps and distance."),(0,r.kt)("p",null,"-Virtual Pet Behavior System: The system component that responds to user actions related to physical activity and mirrors the virtual pet's state."),(0,r.kt)("h2",{id:"use-case-4---competitive-leaderboard"},"Use Case 4 - Competitive Leaderboard"),(0,r.kt)("p",null,"Verify the system's ability to engage users in competitive interaction and track their progress through a leaderboard in ARPetPals."),(0,r.kt)("p",null,"Expected Result: The app effectively prompts the user to engage in competitive activities for exercise and nutrition. The user's interactions with the virtual pet reflect their progress. The virtual pet's metrics are uploaded to the database. The app's leaderboard accurately reflects the user's improved ranking."),(0,r.kt)("p",null,"Test Components:"),(0,r.kt)("p",null,"-ARPetPals App: The client application responsible for presenting the competitive leaderboard and tracking user actions that affect leaderboard rankings."),(0,r.kt)("p",null,"-Virtual Pet Metrics: The script governing the virtual pet's responses to user actions and its metrics."),(0,r.kt)("p",null,"-Database: The system component responsible for storing and retrieving user data, including leaderboard rankings and user interactions."),(0,r.kt)("h2",{id:"use-case-5---pet-personalization"},"Use Case 5 - Pet Personalization"),(0,r.kt)("p",null,"Validate the system's ability to enable users to personalize their virtual pet's name, appearance, and app settings in ARPetPals."),(0,r.kt)("p",null,"Expected Result: The app successfully provides a user-friendly interface for customizing the virtual pet's name. The user can browse, select, and apply their chosen avatar from the list of avatars. The user's settings preferences are correctly applied. The virtual pet is displayed with the name, chosen avatar, and adjusted settings."),(0,r.kt)("p",null,"Test Components:"),(0,r.kt)("p",null,"-ARPetPals App: The client application responsible for providing personalization options and displaying the customized virtual pet."),(0,r.kt)("p",null,"-Database: The system component responsible for storing and retrieving user preferences and customized pet data."),(0,r.kt)("h2",{id:"use-case-6---user-sign-in-and-sign-out"},"Use Case 6 - User Sign-In and Sign-Out"),(0,r.kt)("p",null,"Verify the system's ability to provide secure user sign-in and sign-out."),(0,r.kt)("p",null,'Expected Result: The app offers secure user sign-in options for new and returning users. New users can successfully register, and returning users can sign in with their existing credentials, loading saved data. The "sign out" button in the settings menu allows users to securely log out of their account.'),(0,r.kt)("p",null,"Test Components:"),(0,r.kt)("p",null,"-ARPetPals App: The client application that manages user authentication and account management."),(0,r.kt)("p",null,"-Database: The system component responsible for storing and managing user account data."))}u.isMDXComponent=!0}}]);