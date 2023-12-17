"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9937],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,m=u["".concat(o,".").concat(h)]||u[h]||d[h]||i;return r?a.createElement(m,s(s({ref:t},c),{},{components:r})):a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:6},s="ER Diagram and Table Design",l={unversionedId:"system-architecture/table-design",id:"system-architecture/table-design",title:"ER Diagram and Table Design",description:"ER Diagram",source:"@site/docs/system-architecture/table-design.md",sourceDirName:"system-architecture",slug:"/system-architecture/table-design",permalink:"/project-ar-pet-pals/docs/system-architecture/table-design",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-ar-pet-pals/edit/main/documentation/docs/system-architecture/table-design.md",tags:[],version:"current",lastUpdatedBy:"karljamesgray",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Version Control",permalink:"/project-ar-pet-pals/docs/system-architecture/version-control"},next:{title:"Design - API",permalink:"/project-ar-pet-pals/docs/category/design---api"}},o={},p=[{value:"ER Diagram",id:"er-diagram",level:2},{value:"Table Design",id:"table-design",level:2},{value:"User",id:"user",level:3},{value:"PetPal",id:"petpal",level:3},{value:"PetHealthInfo",id:"pethealthinfo",level:3},{value:"Task",id:"task",level:3},{value:"PhysicalTask",id:"physicaltask",level:3},{value:"NutritionTask",id:"nutritiontask",level:3}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"er-diagram-and-table-design"},"ER Diagram and Table Design"),(0,n.kt)("h2",{id:"er-diagram"},"ER Diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ER Diagram",src:r(9891).Z,width:"766",height:"1011"})),(0,n.kt)("h2",{id:"table-design"},"Table Design"),(0,n.kt)("h3",{id:"user"},"User"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"user_id (pk): Unique identifier assigned to each user of the app."),(0,n.kt)("li",{parentName:"ul"},"username: Represents the user\u2019s chosen display name."),(0,n.kt)("li",{parentName:"ul"},"password: Encrypted string used for authenticating the user during login."),(0,n.kt)("li",{parentName:"ul"},"date_joined: Timestamp noting when the user joined or created an account."),(0,n.kt)("li",{parentName:"ul"},"leaderboard_ranking: The user\u2019s current ranking on the leaderboard."),(0,n.kt)("li",{parentName:"ul"},"badge: String noting any of the user's earned achievements or medals.")),(0,n.kt)("h3",{id:"petpal"},"PetPal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"pet_id (pk): Unique identifier assigned to each virtual pet in the application."),(0,n.kt)("li",{parentName:"ul"},"user_id (fk): Foreign key referencing the User table, denoting the owner of the pet."),(0,n.kt)("li",{parentName:"ul"},"pet_name: Represents the name of the virtual pet.")),(0,n.kt)("h3",{id:"pethealthinfo"},"PetHealthInfo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"pet_health_info_id (pk): Unique Identifier assigned to each record of pet health."),(0,n.kt)("li",{parentName:"ul"},"pet_id (fk): Foreign key referencing the PetPal table."),(0,n.kt)("li",{parentName:"ul"},"pet_health_hungry: String indicating the hunger level of the pet."),(0,n.kt)("li",{parentName:"ul"},"pet_health_bored: String indicating the pet's boredom status."),(0,n.kt)("li",{parentName:"ul"},"last_activity: Timestamp of the most recent activity performed by or with the virtual pet."),(0,n.kt)("li",{parentName:"ul"},"last_recorded_food: String noting the most recent food eaten by the pet.")),(0,n.kt)("h3",{id:"task"},"Task"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"task_id (pk): Unique identifier referencing the specific task the user is completing."),(0,n.kt)("li",{parentName:"ul"},"task_type: Represents the type of task, such as walking or eating healthy."),(0,n.kt)("li",{parentName:"ul"},"user_id (fk): Foreign key that references the User table, denoting the user who performed the task."),(0,n.kt)("li",{parentName:"ul"},"daily_progress: Integer describing the user's daily progress status for completing the corresponding task.")),(0,n.kt)("h3",{id:"physicaltask"},"PhysicalTask"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"physical_id (pk): Unique identifier referencing the specific physical task the user is performing."),(0,n.kt)("li",{parentName:"ul"},"task_id (fk): Foreign key referencing the Task table."),(0,n.kt)("li",{parentName:"ul"},"task_type: Represents the type of physical activity task, such as walking or running."),(0,n.kt)("li",{parentName:"ul"},"steps_taken: Integer noting the number of steps taken during that particular physical activity."),(0,n.kt)("li",{parentName:"ul"},"calories_burned: Integer representing the number of calories burned during the activity."),(0,n.kt)("li",{parentName:"ul"},"last_activity: Timestamp of the user's most recent physical activity."),(0,n.kt)("li",{parentName:"ul"},"recurrence_timer: Timestamp indicating the next scheduled time for a physical activity task."),(0,n.kt)("li",{parentName:"ul"},"record_breaker: Integer indicating whether the user has surpassed their previous task-related records.")),(0,n.kt)("h3",{id:"nutritiontask"},"NutritionTask"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"nutrition_id (pk): Unique Identifier referencing the specific nutrition task the user is performing."),(0,n.kt)("li",{parentName:"ul"},"task_id (fk): Foreign key referencing the Task table."),(0,n.kt)("li",{parentName:"ul"},"task_type: Represents the type of nutrition task, such as eating a healthy snack."),(0,n.kt)("li",{parentName:"ul"},"last_recorded_food: String noting the most recent food recognized and recorded by the app."),(0,n.kt)("li",{parentName:"ul"},"count_healthy: Integer noting the number of times healthy food items have been recorded."),(0,n.kt)("li",{parentName:"ul"},"record_breaker: Integer indicating whether the user has surpassed their previous healthy eating records."),(0,n.kt)("li",{parentName:"ul"},"recurrence_timer: Timestamp indicating the next scheduled time for the nutrition-related task."),(0,n.kt)("li",{parentName:"ul"},"count_not_healthy: Integer representing the number of times non-healthy food items have been eaten.")))}u.isMDXComponent=!0},9891:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/er_diagram-0130e51522cc54f5d4f33f2646d28dd3.png"}}]);