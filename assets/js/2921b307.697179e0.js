"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8041],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>m});var o=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},h=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(i),u=n,m=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return i?o.createElement(m,a(a({ref:t},h),{},{components:i})):o.createElement(m,a({ref:t},h))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<r;c++)a[c]=i[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}u.displayName="MDXCreateElement"},3533:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=i(7462),n=(i(7294),i(3905));const r={sidebar_position:4},a="Algorithm Overview",l={unversionedId:"system-architecture/algorithm-overview",id:"system-architecture/algorithm-overview",title:"Algorithm Overview",description:"Algorithms to highlight",source:"@site/docs/system-architecture/algorithm-overview.md",sourceDirName:"system-architecture",slug:"/system-architecture/algorithm-overview",permalink:"/project-ar-pet-pals/docs/system-architecture/algorithm-overview",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-ar-pet-pals/edit/main/documentation/docs/system-architecture/algorithm-overview.md",tags:[],version:"current",lastUpdatedBy:"son2005",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Sequence Diagrams",permalink:"/project-ar-pet-pals/docs/system-architecture/sequence-diagrams"},next:{title:"Table Design",permalink:"/project-ar-pet-pals/docs/system-architecture/table-design"}},s={},c=[{value:"Augmented Reality (AR)",id:"augmented-reality-ar",level:2},{value:"Object Recognition (OR)",id:"object-recognition-or",level:2},{value:"Step Integration",id:"step-integration",level:2},{value:"Food detection",id:"food-detection",level:2},{value:"Pet Health",id:"pet-health",level:2}],h={toc:c};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"algorithm-overview"},"Algorithm Overview"),(0,n.kt)("p",null,"Algorithms to highlight"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Object Recognition (From seeing fruit to pet getting nutrition)"),(0,n.kt)("li",{parentName:"ul"},"Step Integration (How steps impact pet health)"),(0,n.kt)("li",{parentName:"ul"},"Pet Health (How different foods affect it, how health degrades over time)")),(0,n.kt)("h2",{id:"augmented-reality-ar"},"Augmented Reality (AR)"),(0,n.kt)("p",null,"Augmented reality is a technology that displays virtual objects on top of a camera's view of the real world. Some examples of AR can be found in some highly technologically advanced cars, which have support for displaying arrows and other driving-related signs on the windshield. A company called ",(0,n.kt)("a",{parentName:"p",href:"https://wayray.com/#what-we-do"},"WayRay")," does exactly that.   "),(0,n.kt)("p",null,"In our project, we will use ",(0,n.kt)("strong",{parentName:"p"},"Google's AR Foundation")," to implement our virtual pet into the app, which will allow the pet to be displayed to the user. The pet will be able to interact with real-life objects, done with object recognition ( See Object Recognition), and it will display different animations depending on the type of object it is interacting with. For instance, if it recognizes a backpack in the room, it will get in and out of the backpack in a fun and animated way."),(0,n.kt)("h2",{id:"object-recognition-or"},"Object Recognition (OR)"),(0,n.kt)("p",null,"Object recognition is a computer vision technique for identifying objects in images or videos, which is done through machine learning and deep learning algorithms. The first step of object recognition is object detection, that is being able to map out a section of the image or video where an object is detected. Once that section of the image is highlighted, it will continue to the second step of object recognition, object classification. Object classification, as the name describes, classifies what kind of object that section of the image/video is. For instance, is it a pizza or a water bottle?"),(0,n.kt)("p",null,"For our integration of OR we are pretty fortunate that ",(0,n.kt)("strong",{parentName:"p"},"AR Foundation")," already has OR built into the library that allows real-time environment tracking and plane detection (for placing the pet in the real world say on top of a desk or bed). With this library, we will detect whether or not the recognized objects are food or not ( see Food Detection section), and depending on how healthy the food is or isn't it will affect the pet's health. ( see Pet Health)"),(0,n.kt)("h2",{id:"step-integration"},"Step Integration"),(0,n.kt)("p",null,"Step integration simply involves using the user's mobile device's built-in sensor to determine the number of steps that the user has taken. When a user wants to start a physical activity, she will click a button that will start the step recording process, and depending on how many steps the user took it will boost the pet's health. For instance, if a user is sitting at her desk for the whole day, and decides she needs some exercise and only walks 300 steps it will improve the pet's health much less than if she were to walk a mile."),(0,n.kt)("h2",{id:"food-detection"},"Food detection"),(0,n.kt)("p",null,"Food detection, in our case, just means that once OR determines that the object in the video or image is food, the application will try to sort out what type of food it is, and it will have a heuristic function that will predict how nutritious that food is. If it is found to be a nourishing meal, then the pet's health will be boosted. If it isn't, then it's health will decline ( See Pet Health)"),(0,n.kt)("h2",{id:"pet-health"},"Pet Health"),(0,n.kt)("p",null,"The user's pet will have a health bar which may or may not be displayed to the user depending on the user's preferences. Said health bar will function in a very similar way that health bars in video games work, and it will be on a scale from 0-100% where 100% is the most healthy the pet can possibly be to 0% where it will be extremely unhealthy and malnourished. To improve a pet's health a user must either record their steps taken in a walk ( See Step Integration) or show healthy-looking food to the camera so that the app can recognize whether that food is healthy looking or not, in which case it will enhance the pet's health."))}p.isMDXComponent=!0}}]);