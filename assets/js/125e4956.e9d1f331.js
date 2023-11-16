"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[6921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},s="Unit Tests",a={unversionedId:"test-procedures/unit-tests",id:"test-procedures/unit-tests",title:"Unit Tests",description:"Unit Testing Frameworks",source:"@site/docs/test-procedures/unit-tests.md",sourceDirName:"test-procedures",slug:"/test-procedures/unit-tests",permalink:"/project-ar-pet-pals/docs/test-procedures/unit-tests",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-ar-pet-pals/edit/main/documentation/docs/test-procedures/unit-tests.md",tags:[],version:"current",lastUpdatedBy:"Alex Mailo",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Test Procedures",permalink:"/project-ar-pet-pals/docs/category/test-procedures"},next:{title:"Integration Tests",permalink:"/project-ar-pet-pals/docs/test-procedures/integration-tests"}},c={},l=[{value:"Unit Testing Frameworks",id:"unit-testing-frameworks",level:2},{value:"What Will Be Tested",id:"what-will-be-tested",level:2},{value:"Unity Components",id:"unity-components",level:3},{value:"AR Components",id:"ar-components",level:3},{value:"Object Recognition",id:"object-recognition",level:3},{value:"Android-Specific Components",id:"android-specific-components",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"unit-tests"},"Unit Tests"),(0,o.kt)("h2",{id:"unit-testing-frameworks"},"Unit Testing Frameworks"),(0,o.kt)("p",null,"Unity has its own embedded unit test runner and framework, NUnit.\nFor any Android-specific testing, JUnit will be used."),(0,o.kt)("h2",{id:"what-will-be-tested"},"What Will Be Tested"),(0,o.kt)("h3",{id:"unity-components"},"Unity Components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Game Objects: Ensure that objects are instantiated correctly and that their properties are properly set."),(0,o.kt)("li",{parentName:"ul"},"Physics: Test that objects behave as expected under various conditions."),(0,o.kt)("li",{parentName:"ul"},"User Inputs: The application should handle various user inputs like touch, swipe, etc.")),(0,o.kt)("h3",{id:"ar-components"},"AR Components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Initialization: Test that AR sessions start correctly and required resources are accessed."),(0,o.kt)("li",{parentName:"ul"},"Tracking: Mock different tracking states and check how the application reacts."),(0,o.kt)("li",{parentName:"ul"},"Plane Detection: Ensure that when planes are detected, they are properly represented in the app."),(0,o.kt)("li",{parentName:"ul"},"Anchor Points: Test the creation, movement, and deletion of AR anchor points. Anchor points are points in the real world where virtual objects can be placed.")),(0,o.kt)("h3",{id:"object-recognition"},"Object Recognition"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Database Matching: Ensure that recognized objects correspond to objects listed in our database."),(0,o.kt)("li",{parentName:"ul"},"Accuracy: Mock various object scenarios and see how recognition handles partial lighting, obscured views, etc."),(0,o.kt)("li",{parentName:"ul"},"Performance: Check how quickly objects are recognized.")),(0,o.kt)("h3",{id:"android-specific-components"},"Android-Specific Components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lifecycle Events: Test how the application functions under different Android lifecyle events such as onPause or onResume."),(0,o.kt)("li",{parentName:"ul"},"Permissions: Check app's behavior when permissions (like camera access) are denied.")))}u.isMDXComponent=!0}}]);