"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3409],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=m(a),k=r,N=s["".concat(o,".").concat(k)]||s[k]||c[k]||l;return a?n.createElement(N,i(i({ref:t},u),{},{components:a})):n.createElement(N,i({ref:t},u))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9626:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={},i="Object Recognition",p={unversionedId:"api-specification/ObjectRecognition",id:"api-specification/ObjectRecognition",title:"Object Recognition",description:"Purpose",source:"@site/docs/api-specification/ObjectRecognition.md",sourceDirName:"api-specification",slug:"/api-specification/ObjectRecognition",permalink:"/project-ar-pet-pals/docs/api-specification/ObjectRecognition",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-ar-pet-pals/edit/main/documentation/docs/api-specification/ObjectRecognition.md",tags:[],version:"current",lastUpdatedBy:"son2005",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Database Integration",permalink:"/project-ar-pet-pals/docs/api-specification/DatabaseIntegration"},next:{title:"Pet Behavior",permalink:"/project-ar-pet-pals/docs/api-specification/PetBehaviour"}},o={},m=[{value:"ARTrackedImageManager",id:"artrackedimagemanager",level:2},{value:"ARHumanBodyManager",id:"arhumanbodymanager",level:2},{value:"ARTrackedObjectManager",id:"artrackedobjectmanager",level:2},{value:"ARPlaneManager",id:"arplanemanager",level:2}],u={toc:m};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"object-recognition"},"Object Recognition"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose")),(0,r.kt)("p",null,"Object recogntion will be used to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Identify Plane Surfaces like floors, desks,or tables where the pet can "stand" on.'),(0,r.kt)("li",{parentName:"ul"},"Identify objects so that it can interact with them through animations, like flying around a glass of water."),(0,r.kt)("li",{parentName:"ul"},"Analyze whether an object is food or not, if it is food guess how healthy that food is."),(0,r.kt)("li",{parentName:"ul"},"Have a human body recognition method so that the pet can follow its human.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE")),(0,r.kt)("p",null,"This is NOT AR Pet Pals' API. It is AR Foundation's API that is used in this project, and it is here to give an overview of the APIs used to make our augment reality work. Find out more: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@6.0/manual/features/features.html"},"AR Foundational API")),(0,r.kt)("h2",{id:"artrackedimagemanager"},"ARTrackedImageManager"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose")),(0,r.kt)("p",null,"Performs 2D Image tracking used for tracking potential 2D images."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"currentMaxNumberOfMovingImages: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Integer"),(0,r.kt)("li",{parentName:"ul"},"Purpose: maximum number of moving images to track in real time that is currently in use by the subsystem."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"gameObjectName"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Purpose: the name for the GameObject when a new Image is detected"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"referenceLibrary"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: IReferenceImageLibrary"),(0,r.kt)("li",{parentName:"ul"},"Purpose: Get or set of images to search for in real-world"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"trackedImagePrefab"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: GameObject"),(0,r.kt)("li",{parentName:"ul"},"Purpose: Instantiates Prefab for each image")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CreateRuntimeLibrary()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: To create the set of images to search"),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: Create a XRReferenceImageLibrary"),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: NONE"),(0,r.kt)("li",{parentName:"ul"},"Parameters: XRReferenceImageLibrary or null "),(0,r.kt)("li",{parentName:"ul"},"Returns: RuntimeReferenceImageLibrary"),(0,r.kt)("li",{parentName:"ul"},"Exceptions: NotSupportedException"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GetPrefab()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Get the Prefab for each tracked image"),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: have an ARTrackedImage"),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: NONE"),(0,r.kt)("li",{parentName:"ul"},"Parameters: NONE"),(0,r.kt)("li",{parentName:"ul"},"Returns: GameObject"),(0,r.kt)("li",{parentName:"ul"},"Exceptions: NONE"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"OnTrackablesChanged()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Called when images tracked change"),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: Have a list of tracked images"),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: Set a callback to see what images change"),(0,r.kt)("li",{parentName:"ul"},"Parameters: List ARTrackedImage added, List ARTrackedImage updated, List ARTrackedImage removed "),(0,r.kt)("li",{parentName:"ul"},"Returns: NONE"),(0,r.kt)("li",{parentName:"ul"},"Exceptions: NONE")))),(0,r.kt)("h2",{id:"arhumanbodymanager"},"ARHumanBodyManager"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose")),(0,r.kt)("p",null,"The Manager used to track human bodies"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"gameObjectName"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Purpose: The name for any generated GameObjects."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"humanBodyPrefab"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: GameObject"),(0,r.kt)("li",{parentName:"ul"},"Purpose: The Prefab object to instantiate at the location of the human body origin."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"pose2DEnabled"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Boolean"),(0,r.kt)("li",{parentName:"ul"},"Purpose: Whether 2D human pose estimation is enabled"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"pose3DEnabled"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Boolean"),(0,r.kt)("li",{parentName:"ul"},"Purpose: Whether 3D human pose estimation is enabled"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"pose3DScaleEstimationEnabled"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Boolean"),(0,r.kt)("li",{parentName:"ul"},"Purpose: Whether 3D human body scale estimation is enabled.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GetHumanBody"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: get the body associated with trackableID"),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: Have a trackable human body"),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: NONE"),(0,r.kt)("li",{parentName:"ul"},"Parameters: TrackableID"),(0,r.kt)("li",{parentName:"ul"},"Returns: ARHumanBody"),(0,r.kt)("li",{parentName:"ul"},"Exceptions: NONE"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GetHumanBodyPose2DJoints"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Gets the human body pose 2D joints for the current frame."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions:  have a trackable human body"),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: Fills memory with joints"),(0,r.kt)("li",{parentName:"ul"},"Parameters: Allocator ( Memory allocator where joints will be stored )"),(0,r.kt)("li",{parentName:"ul"},"Returns: NativeArray XRHumanBodyPose2DJoint"),(0,r.kt)("li",{parentName:"ul"},"Exceptions: NotSupportedExceptions"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GetPrefab"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: gets prefab of human body"),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions:Have a trackable human body"),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: NONE"),(0,r.kt)("li",{parentName:"ul"},"Parameters: NONE"),(0,r.kt)("li",{parentName:"ul"},"Returns: GameObject"),(0,r.kt)("li",{parentName:"ul"},"Exceptions: NONE"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"OnTrackablesChanged"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Callback when the trackable deltas are being reported."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: Have a trackable human body"),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: Set a callback for tracking changes"),(0,r.kt)("li",{parentName:"ul"},"Parameters: List ARHumanBody added, List ARHumanBody updated, List ARHumanBody removed"),(0,r.kt)("li",{parentName:"ul"},"Returns: NONE"),(0,r.kt)("li",{parentName:"ul"},"Exceptions: NONE")))),(0,r.kt)("h2",{id:"artrackedobjectmanager"},"ARTrackedObjectManager"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose"),"\nManager for tracking 3D Objects"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"gameObjectName   "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Purpose: Name of the GameObject"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"referenceLibrary   "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: XRReferenceObjectLibrary\t"),(0,r.kt)("li",{parentName:"ul"},"Purpose: Set or Get library of 3d objects"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"trackedObjectPrefab "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: GameObject"),(0,r.kt)("li",{parentName:"ul"},"Purpose: instantiates this Prefab for each detected object.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GetPrefab():"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Gets Prefab of 3D object"),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: Have a 3D object"),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: NONE"),(0,r.kt)("li",{parentName:"ul"},"Parameters: NONE"),(0,r.kt)("li",{parentName:"ul"},"Returns: GameObject"),(0,r.kt)("li",{parentName:"ul"},"Exceptions: NONE"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"OnTrackablesChanged"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Callback when the trackable deltas are being reported."),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: Have a trackable 3d object"),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: Set a callback for tracking changes"),(0,r.kt)("li",{parentName:"ul"},"Parameters: List ARTrackedObject added, List ARTrackedObject updated, List ARTrackedObject removed"),(0,r.kt)("li",{parentName:"ul"},"Returns: NONE"),(0,r.kt)("li",{parentName:"ul"},"Exceptions: NONE")))),(0,r.kt)("h2",{id:"arplanemanager"},"ARPlaneManager"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose")),(0,r.kt)("p",null,"Manager that handles plane surface detection"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"planePrefab"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: GameObject"),(0,r.kt)("li",{parentName:"ul"},"Purpose: Prefab of plane"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"gameObjectName"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Purpose: get name of GameObject"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"currentDirectionMode"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: PlaneDetectionMode\t"),(0,r.kt)("li",{parentName:"ul"},"Purpose: get or set plane direction mode")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GetPlane():"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: gets tracked plane with TrackableID"),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: Have a trackable plane"),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: NONE"),(0,r.kt)("li",{parentName:"ul"},"Parameters: TrackableID"),(0,r.kt)("li",{parentName:"ul"},"Returns: ARPlane"),(0,r.kt)("li",{parentName:"ul"},"Exceptions: NONE"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GetPrefab():"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: gets prefab of plane"),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: Have an existing plane"),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: NONE"),(0,r.kt)("li",{parentName:"ul"},"Parameters: NONE"),(0,r.kt)("li",{parentName:"ul"},"Returns: GameObject"),(0,r.kt)("li",{parentName:"ul"},"Exceptions: NONE"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"OnTrackablesChanged():"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: set callback for when plane detection change"),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: have list of ARPlanes "),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: Sets callback"),(0,r.kt)("li",{parentName:"ul"},"Parameters: List ARPlane added, List ARPlane updated, List ARPlane removed"),(0,r.kt)("li",{parentName:"ul"},"Returns: NONE"),(0,r.kt)("li",{parentName:"ul"},"Exceptions: NONE")))))}s.isMDXComponent=!0}}]);