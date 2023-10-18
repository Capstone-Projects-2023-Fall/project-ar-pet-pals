"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[6941],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4098:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:3,description:"Device Data Collection"},i="Device Data Collection",o={unversionedId:"api-specification/DeviceData",id:"api-specification/DeviceData",title:"Device Data Collection",description:"Device Data Collection",source:"@site/docs/api-specification/DeviceData.md",sourceDirName:"api-specification",slug:"/api-specification/DeviceData",permalink:"/project-ar-pet-pals/docs/api-specification/DeviceData",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-ar-pet-pals/edit/main/documentation/docs/api-specification/DeviceData.md",tags:[],version:"current",lastUpdatedBy:"Alex Mailo",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Device Data Collection"},sidebar:"docsSidebar",previous:{title:"Document - Outline",permalink:"/project-ar-pet-pals/docs/api-specification/doc-outline"},next:{title:"Database Integration",permalink:"/project-ar-pet-pals/docs/api-specification/DatabaseIntegration"}},p={},s=[{value:"Class CameraManager",id:"class-cameramanager",level:2},{value:"Class SensorManager",id:"class-sensormanager",level:2},{value:"Class DataInterpreter",id:"class-datainterpreter",level:2}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"device-data-collection"},"Device Data Collection"),(0,r.kt)("h2",{id:"class-cameramanager"},"Class CameraManager"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose")),(0,r.kt)("p",null,"Manages camera access and data collection. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mainCamera",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Camera"),(0,r.kt)("li",{parentName:"ul"},"Purpose: Holds a reference to the main camera that the CameraManager class will manage.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AccessCamera()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Allowing access and manipulation of the camera's properties and settings."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: The mainCamera field must be set to a valid Unity Camera object."),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: None"),(0,r.kt)("li",{parentName:"ul"},"Parameters and Data Types: None"),(0,r.kt)("li",{parentName:"ul"},"Return Value and Output Variables: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Void"))),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CollectVisualData()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Collecting visual data from the camera."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: The mainCamera field must be set to a valid Unity Camera object."),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: The visual data is collected and can be further processed."),(0,r.kt)("li",{parentName:"ul"},"Parameters and Data Types: None"),(0,r.kt)("li",{parentName:"ul"},"Return Value and Output Variables: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: ImageStream"),(0,r.kt)("li",{parentName:"ul"},"Output: An object representing the visual data collected from the camera."))),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ManageCameraSetting()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Managing various camera settings or configurations."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: The mainCamera field must be set to a valid Unity Camera object."),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: None"),(0,r.kt)("li",{parentName:"ul"},"Parameters and Data Types: None"),(0,r.kt)("li",{parentName:"ul"},"Return Value and Output Variables: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Void"))),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: None")))),(0,r.kt)("h2",{id:"class-sensormanager"},"Class SensorManager"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose")),(0,r.kt)("p",null,"Manages the collection of data from various sensors like accelerometer and touch."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"accelerometerSensor",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Accelerometer"),(0,r.kt)("li",{parentName:"ul"},"Purpose: Holds a reference to the accelerometer sensor, which is used to collect acceleration data.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CollectAccelerometerData()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Collecting data from the accelerometer sensor, which measures device acceleration."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: The accelerometerSensor field must be properly initialized and configured."),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: Acceleration data is collected and can be further processed."),(0,r.kt)("li",{parentName:"ul"},"Parameters and Data Types: None"),(0,r.kt)("li",{parentName:"ul"},"Return Value and Output Variables: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Acceleration"),(0,r.kt)("li",{parentName:"ul"},"Output: An object representing acceleration data collected from the accelerometer."))),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CollectTouchData()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Collecting touch input data from the user's interaction."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: The device's touch input system should be properly configured and active."),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: Touch input data is collected and can be further processed."),(0,r.kt)("li",{parentName:"ul"},"Parameters and Data Types: None"),(0,r.kt)("li",{parentName:"ul"},"Return Value and Output Variables: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Touch"),(0,r.kt)("li",{parentName:"ul"},"Output: An object representing touch input data collected."))),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ManageSensorSetting()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Managing various sensor settings or configurations."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: The sensor(s) to be managed should be properly initialized and configured."),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: None"),(0,r.kt)("li",{parentName:"ul"},"Parameters and Data Types: None"),(0,r.kt)("li",{parentName:"ul"},"Return Value and Output Variables: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Void"))),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: None")))),(0,r.kt)("h2",{id:"class-datainterpreter"},"Class DataInterpreter"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose")),(0,r.kt)("p",null,"Interprets and processes the collected sensor and visual data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"visualData",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Data"),(0,r.kt)("li",{parentName:"ul"},"Purpose: Holds a reference to visual data that needs interpretation.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"InterpretVisualData()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Interpreting visual data."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: The visualData field must be properly initialized."),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: The visual data is interpreted and returned."),(0,r.kt)("li",{parentName:"ul"},"Parameters and Data Types: None"),(0,r.kt)("li",{parentName:"ul"},"Return Value and Output Variables: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Object"),(0,r.kt)("li",{parentName:"ul"},"Output: An object representing the interpretation of visual data."))),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ProcessSensorData()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Processing sensor data, which may include data from various sensors such as accelerometers or touch inputs."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: Sensor data should be properly initialized and provided as input."),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: The sensor data is processed and returned."),(0,r.kt)("li",{parentName:"ul"},"Parameters and Data Types:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Param: data"),(0,r.kt)("li",{parentName:"ul"},"Type: Object"))),(0,r.kt)("li",{parentName:"ul"},"Return Value and Output Variables: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Data"),(0,r.kt)("li",{parentName:"ul"},"Output: An object representing the processed sensor data."))),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AnalyzeData()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Analyzing data."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: Data to be analyzed should be provided as input."),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: The data is analyzed."),(0,r.kt)("li",{parentName:"ul"},"Parameters and Data Types: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Param: data"),(0,r.kt)("li",{parentName:"ul"},"Type: Object"))),(0,r.kt)("li",{parentName:"ul"},"Return Value and Output Variables: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Information"),(0,r.kt)("li",{parentName:"ul"},"Output: An object representing the results of data analysis."))),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: None")))))}c.isMDXComponent=!0}}]);