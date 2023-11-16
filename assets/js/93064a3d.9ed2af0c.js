"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8946],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(a),k=n,h=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return a?r.createElement(h,i(i({ref:t},s),{},{components:a})):r.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9285:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const l={},i="Pet Behavior",o={unversionedId:"api-specification/PetBehaviour",id:"api-specification/PetBehaviour",title:"Pet Behavior",description:"Purpose",source:"@site/docs/api-specification/PetBehaviour.md",sourceDirName:"api-specification",slug:"/api-specification/PetBehaviour",permalink:"/project-ar-pet-pals/docs/api-specification/PetBehaviour",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-ar-pet-pals/edit/main/documentation/docs/api-specification/PetBehaviour.md",tags:[],version:"current",lastUpdatedBy:"Anya Tewari",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Object Recognition",permalink:"/project-ar-pet-pals/docs/api-specification/ObjectRecognition"},next:{title:"API docs",permalink:"/project-ar-pet-pals/docs/api-specification/api"}},p={},u=[{value:"BehaviorInterpreter",id:"behaviorinterpreter",level:2},{value:"BehaviorManagerment",id:"behaviormanagerment",level:2},{value:"UserActionProcessor",id:"useractionprocessor",level:2},{value:"HealthMetricCalculator",id:"healthmetriccalculator",level:2}],s={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pet-behavior"},"Pet Behavior"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose")),(0,n.kt)("p",null,"Based on user actions and other factors, the pet can exhibit a variety of behaviors on-screen. This component interprets user input, the visual feed, and other inputs and converts them into pet behaviors."),(0,n.kt)("h2",{id:"behaviorinterpreter"},"BehaviorInterpreter"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose")),(0,n.kt)("p",null,"Class BehaviorInterpreter will interprets user input, visual feed, and other inputs to determine pet behaviour."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Data Fields")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"behaviour",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Type: Behaviour"),(0,n.kt)("li",{parentName:"ul"},"Purpose: Hold a reference of pet behaviour that determine pet behaviour. "))),(0,n.kt)("li",{parentName:"ul"},"Userinput",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Type: Touch"),(0,n.kt)("li",{parentName:"ul"},"Purpose: Hold a reference of user input that using to covert to pet behaviour.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Medthods")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"InterpretUserInput"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Purpose: This fucntion will get user input and covert it to pet behaviour."),(0,n.kt)("li",{parentName:"ul"},"Parameters: Touch"),(0,n.kt)("li",{parentName:"ul"},"Return Value and Output Variables: Behaviour"),(0,n.kt)("li",{parentName:"ul"},"Exceptions Thrown: Error Code."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"InterpretVisualFeed"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Purpose: This fucntion will convert visual feed from user to behaviour."),(0,n.kt)("li",{parentName:"ul"},"Parameters: Behaviour"),(0,n.kt)("li",{parentName:"ul"},"Return Value and Output Variables: Behaviour"),(0,n.kt)("li",{parentName:"ul"},"Exceptions Thrown: Error Code."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"determinePetBehavior"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Purpose: This class will determine typor of per behavior from user input."),(0,n.kt)("li",{parentName:"ul"},"Parameters: Touch"),(0,n.kt)("li",{parentName:"ul"},"Return Value and Output Variables: Behaviour"),(0,n.kt)("li",{parentName:"ul"},"Exceptions Thrown: Error Code.")))),(0,n.kt)("h2",{id:"behaviormanagerment"},"BehaviorManagerment"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose")),(0,n.kt)("p",null,"This class will manages the different behaviors the pet can exhibit."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Data Fields")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"behaviour"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"- Type: Behaviour\n- Purpose: Hold a reference of pet behaviour that determine pet behaviour. \n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Medthods"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ManageBehavior"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Purpose: This fucntion will get user input and covert it to pet behaviour."),(0,n.kt)("li",{parentName:"ul"},"Parameters: Behaviour"),(0,n.kt)("li",{parentName:"ul"},"Return Value and Output Variables: Behaviour"),(0,n.kt)("li",{parentName:"ul"},"Exceptions Thrown: Error Code."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"TriggerBehavior"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Purpose: This function set up the trigger for pet when receive user input."),(0,n.kt)("li",{parentName:"ul"},"Parameters: Behaviour"),(0,n.kt)("li",{parentName:"ul"},"Return Value and Output Variables: None"),(0,n.kt)("li",{parentName:"ul"},"Exceptions Thrown: Error Code."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"UpdateBehavior"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Purpose: This function will update pet behavior to pet display."),(0,n.kt)("li",{parentName:"ul"},"Parameters: Behaviour"),(0,n.kt)("li",{parentName:"ul"},"Return Value and Output Variables: None"),(0,n.kt)("li",{parentName:"ul"},"Exceptions Thrown: Error Code.")))),(0,n.kt)("h2",{id:"useractionprocessor"},"UserActionProcessor"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose")),(0,n.kt)("p",null,"Class UserActionProcessor will processes user actions and converts them into corresponding pet behaviors."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Data Fields")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Userinput",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Type: Touch"),(0,n.kt)("li",{parentName:"ul"},"Purpose: Hold a reference of user input that using to covert to pet behaviour.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Medthods")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ProcessUserAction"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Purpose: This function will process user action to behavior"),(0,n.kt)("li",{parentName:"ul"},"Parameters: UserAction"),(0,n.kt)("li",{parentName:"ul"},"Return Value and Output Variables: None"),(0,n.kt)("li",{parentName:"ul"},"Exceptions Thrown: Error Code."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ConvertActionToBehavior"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Purpose: This fuction will convert action to behaviour type."),(0,n.kt)("li",{parentName:"ul"},"Parameters: UserAction"),(0,n.kt)("li",{parentName:"ul"},"Return Value and Output Variables: Behaviour"),(0,n.kt)("li",{parentName:"ul"},"Exceptions Thrown: Error Code."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ManageActionData"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Purpose: This function will manage the converted behaviour data. "),(0,n.kt)("li",{parentName:"ul"},"Parameters: Behaviour"),(0,n.kt)("li",{parentName:"ul"},"Return Value and Output Variables: None"),(0,n.kt)("li",{parentName:"ul"},"Exceptions Thrown: Error Code.")))),(0,n.kt)("h2",{id:"healthmetriccalculator"},"HealthMetricCalculator"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose")),(0,n.kt)("p",null,"Class HealthMetricCalcualtor will Calculates the health metrics of the pet based on user diet and exercise habits."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Data Fields")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"behaviour",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Type: Json"),(0,n.kt)("li",{parentName:"ul"},"Purpose: Hold a reference of user healths.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Medthods")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"CalculateHealthMetric"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Purpose: This function will calcualte the health metric of pet and return to pet display "),(0,n.kt)("li",{parentName:"ul"},"Parameters: Float"),(0,n.kt)("li",{parentName:"ul"},"Return Value and Output Variables: Float"),(0,n.kt)("li",{parentName:"ul"},"Exceptions Thrown: Error Code."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ProcessUserHabit"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Purpose: This function will get user data from database to tracking user input foods."),(0,n.kt)("li",{parentName:"ul"},"Parameters: Float"),(0,n.kt)("li",{parentName:"ul"},"Return Value and Output Variables: Float"),(0,n.kt)("li",{parentName:"ul"},"Exceptions Thrown: Error Code."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ManageHealthData"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Purpose: This function will manage heathdata of user by using algorithm to calcualte user heath status."),(0,n.kt)("li",{parentName:"ul"},"Parameters: Data"),(0,n.kt)("li",{parentName:"ul"},"Return Value and Output Variables: Json"),(0,n.kt)("li",{parentName:"ul"},"Exceptions Thrown: Error Code.")))))}c.isMDXComponent=!0}}]);