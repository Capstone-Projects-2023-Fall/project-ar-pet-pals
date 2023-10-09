"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3642],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},212:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:4,description:"Database Integration"},l="Database Integration",p={unversionedId:"api-specification/DatabaseIntegration",id:"api-specification/DatabaseIntegration",title:"Database Integration",description:"Database Integration",source:"@site/docs/api-specification/DatabaseIntegration.md",sourceDirName:"api-specification",slug:"/api-specification/DatabaseIntegration",permalink:"/project-ar-pet-pals/docs/api-specification/DatabaseIntegration",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-ar-pet-pals/edit/main/documentation/docs/api-specification/DatabaseIntegration.md",tags:[],version:"current",lastUpdatedBy:"Anya Tewari",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Database Integration"},sidebar:"docsSidebar",previous:{title:"Device Data Collection Documentation",permalink:"/project-ar-pet-pals/docs/api-specification/DeviceData"},next:{title:"Object Recognition",permalink:"/project-ar-pet-pals/docs/api-specification/ObjectRecognition"}},o={},s=[{value:"Class DatabaseManager",id:"class-databasemanager",level:2},{value:"Class UserDataRetriever",id:"class-userdataretriever",level:2},{value:"Class SettingsManager",id:"class-settingsmanager",level:2}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"database-integration"},"Database Integration"),(0,r.kt)("h2",{id:"class-databasemanager"},"Class DatabaseManager"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose"),"\nManages connections, retrievals, and updates to the database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dbConnection"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Connection"),(0,r.kt)("li",{parentName:"ul"},"Purpose: Holds a reference to the active database connection.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ConnectToDatabase()")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Establish a connection to the database."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: Database details like URL, username, and password must be provided."),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: A connection to the database is established."),(0,r.kt)("li",{parentName:"ul"},"Parameters and Data Types: None"),(0,r.kt)("li",{parentName:"ul"},"Return Value and Output Variables:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Boolean"),(0,r.kt)("li",{parentName:"ul"},"Output: Status of connection, true if connected, false otherwise."))),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: ConnectionFailedException"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"RetrieveData()")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Retrieve data from the database."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: ",(0,r.kt)("inlineCode",{parentName:"li"},"dbConnection")," must be active."),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: Requested data is fetched."),(0,r.kt)("li",{parentName:"ul"},"Parameters and Data Types: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Param: query"),(0,r.kt)("li",{parentName:"ul"},"Type: String"))),(0,r.kt)("li",{parentName:"ul"},"Return Value and Output Variables:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Data"),(0,r.kt)("li",{parentName:"ul"},"Output: An object representing the fetched data."))),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: DataNotFoundException"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"UpdateData()")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Update data in the database."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: ",(0,r.kt)("inlineCode",{parentName:"li"},"dbConnection")," must be active."),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: Data is updated in the database."),(0,r.kt)("li",{parentName:"ul"},"Parameters and Data Types: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Param: data"),(0,r.kt)("li",{parentName:"ul"},"Type: Object"))),(0,r.kt)("li",{parentName:"ul"},"Return Value and Output Variables: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Boolean"),(0,r.kt)("li",{parentName:"ul"},"Output: Status of update, true if successful, false otherwise."))),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: UpdateFailedException")))),(0,r.kt)("h2",{id:"class-userdataretriever"},"Class UserDataRetriever"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose"),"\nRetrieves user and pet information from the database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userManager"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: DatabaseManager"),(0,r.kt)("li",{parentName:"ul"},"Purpose: Holds a reference to the DatabaseManager to fetch user and pet data.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GetUserInfo()")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Fetch user information from the database."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: ",(0,r.kt)("inlineCode",{parentName:"li"},"userManager")," must have an active connection to the database."),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: User information is fetched."),(0,r.kt)("li",{parentName:"ul"},"Parameters and Data Types: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Param: userID"),(0,r.kt)("li",{parentName:"ul"},"Type: Integer"))),(0,r.kt)("li",{parentName:"ul"},"Return Value and Output Variables:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: User"),(0,r.kt)("li",{parentName:"ul"},"Output: An object representing user information."))),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: UserNotFoundException"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GetPetInfo()")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Fetch pet information for a given user."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: ",(0,r.kt)("inlineCode",{parentName:"li"},"userManager")," must have an active connection to the database."),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: Pet information is fetched."),(0,r.kt)("li",{parentName:"ul"},"Parameters and Data Types: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Param: userID"),(0,r.kt)("li",{parentName:"ul"},"Type: Integer"))),(0,r.kt)("li",{parentName:"ul"},"Return Value and Output Variables:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Pet"),(0,r.kt)("li",{parentName:"ul"},"Output: An object representing pet information."))),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: PetNotFoundException")))),(0,r.kt)("h2",{id:"class-settingsmanager"},"Class SettingsManager"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose"),"\nManages user settings and preferences and updates them in the database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"settingsDB"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: DatabaseManager"),(0,r.kt)("li",{parentName:"ul"},"Purpose: Holds a reference to the DatabaseManager to fetch and update settings.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"FetchSettings()")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Retrieve user settings from the database."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: ",(0,r.kt)("inlineCode",{parentName:"li"},"settingsDB")," must have an active connection to the database."),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: Settings data is fetched."),(0,r.kt)("li",{parentName:"ul"},"Parameters and Data Types: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Param: userID"),(0,r.kt)("li",{parentName:"ul"},"Type: Integer"))),(0,r.kt)("li",{parentName:"ul"},"Return Value and Output Variables:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Settings"),(0,r.kt)("li",{parentName:"ul"},"Output: An object representing user settings."))),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: SettingsNotFoundException"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"UpdateSettings()")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Update user settings in the database."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: ",(0,r.kt)("inlineCode",{parentName:"li"},"settingsDB")," must have an active connection to the database."),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: Settings data is updated."),(0,r.kt)("li",{parentName:"ul"},"Parameters and Data Types:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Param: settingsData"),(0,r.kt)("li",{parentName:"ul"},"Type: Settings"))),(0,r.kt)("li",{parentName:"ul"},"Return Value and Output Variables: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Boolean"),(0,r.kt)("li",{parentName:"ul"},"Output: Status of update, true if successful, false otherwise."))),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: UpdateFailedException")))))}m.isMDXComponent=!0}}]);