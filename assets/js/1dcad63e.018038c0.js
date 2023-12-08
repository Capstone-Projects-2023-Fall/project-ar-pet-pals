"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8968],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>P});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),h=s,P=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return a?n.createElement(P,i(i({ref:t},c),{},{components:a})):n.createElement(P,i({ref:t},c))}));function P(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1639:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),s=(a(7294),a(3905));const r={sidebar_position:3},i="Sequence Diagrams",o={unversionedId:"system-architecture/sequence-diagrams",id:"system-architecture/sequence-diagrams",title:"Sequence Diagrams",description:"Use Case 1 - APP Illustrating the Effects of Poor Nutrition",source:"@site/docs/system-architecture/sequence-diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/sequence-diagrams",permalink:"/project-ar-pet-pals/docs/system-architecture/sequence-diagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-ar-pet-pals/edit/main/documentation/docs/system-architecture/sequence-diagrams.md",tags:[],version:"current",lastUpdatedBy:"Youfei Li",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Schedule",permalink:"/project-ar-pet-pals/docs/system-architecture/schedule"},next:{title:"Algorithm Overview",permalink:"/project-ar-pet-pals/docs/system-architecture/algorithm-overview"}},l={},p=[{value:"Use Case 1 - APP Illustrating the Effects of Poor Nutrition",id:"use-case-1---app-illustrating-the-effects-of-poor-nutrition",level:2},{value:"Use Case 2- APP Helping User Make Healthier Food Choices",id:"use-case-2--app-helping-user-make-healthier-food-choices",level:2},{value:"Use Case 2- APP Helping User Make Healthier Food Choices",id:"use-case-2--app-helping-user-make-healthier-food-choices-1",level:2},{value:"Use Case 3- APP Helping User Keep Active",id:"use-case-3--app-helping-user-keep-active",level:2},{value:"Use Case 4 - Competitive Leaderboard",id:"use-case-4---competitive-leaderboard",level:2},{value:"Use Case 5 - Pet Personalization",id:"use-case-5---pet-personalization",level:2},{value:"Use Case 6 - User Sign-In and Sign-Out",id:"use-case-6---user-sign-in-and-sign-out",level:2},{value:"Use Case 7- Environment Engagement",id:"use-case-7--environment-engagement",level:2},{value:"Use Case 8- APP Creating a Competetive Interactive Health Experience",id:"use-case-8--app-creating-a-competetive-interactive-health-experience",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,s.kt)("h2",{id:"use-case-1---app-illustrating-the-effects-of-poor-nutrition"},"Use Case 1 - APP Illustrating the Effects of Poor Nutrition"),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    title Sequence Diagram 1\n\n    actor user\n\n    user->>APP: Opens app\n    activate APP\n    user->>APP: Create an account\n    APP->>database: Create new user\n    activate database\n    database--\x3e>APP: Return new user\n    deactivate database\n    APP--\x3e>user: Display intro for first-time user\n    deactivate APP\n\n    APP->>APP: Pet's health and happiness decreases\n\n    APP->>user: Send notification to feed pet\n    activate APP\n    user--\x3e>APP: User puts unhealthy food in frame of camera\n    APP->>objectRecognition: Send image of frame \n    activate objectRecognition\n    objectRecognition--\x3e>APP: Send food's information\n    deactivate objectRecognition\n\n    APP->>user: Display food information\n    APP->>user: Prompt user to confirm food information\n    user--\x3e>APP: User confirms food information\n    APP->>database: improves pet's health by 25% and happiness by 15%\n    activate database\n    database--\x3e>APP: Display new pet stats\n    deactivate database\n    APP->>user: Display text about eating healthier food\n    deactivate APP"}),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"A user is a college student and spends lots of time studying at their desk and does not have time to cook nutritious meals."),(0,s.kt)("li",{parentName:"ol"},"User downloads ARPP and creates an account."),(0,s.kt)("li",{parentName:"ol"},"User has been studying for hours and has not eaten or done any physical activity."),(0,s.kt)("li",{parentName:"ol"},"User receives a notification from the app reminding them to feed their pet."),(0,s.kt)("li",{parentName:"ol"},"User opens the app and sees their virtual pet sitting on their desk, looking very malnourished and weak."),(0,s.kt)("li",{parentName:"ol"},"User gets a bowl of ramen noodles and a can of Monster to drink."),(0,s.kt)("li",{parentName:"ol"},"User points the camera at its food and the app recognizes the food correctly, asking the user to verify."),(0,s.kt)("li",{parentName:"ol"},"User taps a button to confirm that the food is correctly recognized."),(0,s.kt)("li",{parentName:"ol"},"The pet is nourished slightly but is not at 100% health due to the poor nutritional value of the user\u2019s meal."),(0,s.kt)("li",{parentName:"ol"},"The user is not properly nourished due to the poor meal choice and is hungry again a short while later.")),(0,s.kt)("h2",{id:"use-case-2--app-helping-user-make-healthier-food-choices"},"Use Case 2- APP Helping User Make Healthier Food Choices"),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    title Sequence Diagram 2\n\n    actor user\n\n    user->>APP: opens app\n    activate APP\n    APP--\x3e>user: \"Welcome\"\n\n    user->>APP: creates an account\n    APP->>database: stores user's info.\n    activate database\n    database--\x3e>APP: returns new info.\n    deactivate database\n\n    APP--\x3e>user: shows updated information\n    deactivate APP\n    Note left of user: Has not yet eaten\n\n    APP->>user: Sends notification to feed pet\n    user--\x3e>APP: Opens app\n    activate APP\n    APP->>user: Display malnourished pet\n    Note left of user: Cooks chicken\n    user--\x3e>APP: shows chicken to camera\n    APP->>objectRecognition: shows user's video about food\n    activate objectRecognition\n    objectRecognition--\x3e>APP: sends back the food's information\n    deactivate objectRecognition\n\n    APP->>user: Displays food information\n    APP->>user: Asks if food was recognized properly\n    user--\x3e>APP: confirms food was recognized properly\n    APP->>database: improves pet's health to 100%\n    activate database\n    database--\x3e>APP: returns new pet info.\n    deactivate database\n\n    APP->>user: Encourages user for eating healthy\n    deactivate APP\n"}),(0,s.kt)("h2",{id:"use-case-2--app-helping-user-make-healthier-food-choices-1"},"Use Case 2- APP Helping User Make Healthier Food Choices"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"A user works from home and is trying to improve their eating habits."),(0,s.kt)("li",{parentName:"ol"},"User downloads ARPP to aid their nutrition goals and creates an account."),(0,s.kt)("li",{parentName:"ol"},"User has been working for hours and has not eaten."),(0,s.kt)("li",{parentName:"ol"},"User receives a notification from the app reminding them to feed their pet."),(0,s.kt)("li",{parentName:"ol"},"User opens the app and sees their virtual pet sitting on their desk, looking very malnourished and weak."),(0,s.kt)("li",{parentName:"ol"},"User cooks a chicken breast."),(0,s.kt)("li",{parentName:"ol"},"User points the camera at its food and the app recognizes the food correctly, asking the user to verify."),(0,s.kt)("li",{parentName:"ol"},"User taps a button to confirm that the food is correctly recognized."),(0,s.kt)("li",{parentName:"ol"},"The virtual pet is now nourished and at 100% health due to the high nutritional value of the chicken breast."),(0,s.kt)("li",{parentName:"ol"},"The user is encouraged by their pet's happiness and continues to eat healthier meals.")),(0,s.kt)("h2",{id:"use-case-3--app-helping-user-keep-active"},"Use Case 3- APP Helping User Keep Active"),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    title Sequence Diagram 3\n\n    actor user\n    activate APP\n    APP->>database: Checks pet's status\n    activate database\n    database--\x3e>APP: Sends pet status\n    deactivate database\n    Note right of user: User does not login for a while\n\n    APP->>user: Sends notification about pet's status\n    user--\x3e>APP: logs in\n    activate APP\n    APP->>user: \"welcome back\"\n    APP->>user: Displays pet that looks hyper\n    user--\x3e>APP: Clicks button to indicate starting activity\n\n    user->>APP: User walks\n    Note right of APP: App records steps with smartphone's sensor\n    user->>APP: Clicks button to end activity\n    APP->>database: Improves pet's status\n    activate database\n    database--\x3e>APP: Sends new status\n    deactivate database\n    APP--\x3e>user: Displays calmer pet\n    deactivate APP"}),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"A user is a software engineer working from home full time and has eaten but has not moved in a while due to several long morning zoom meetings."),(0,s.kt)("li",{parentName:"ol"},"The user receives a notification from the app letting them know that their pet is in need of a walk."),(0,s.kt)("li",{parentName:"ol"},"The user opens the app and sees their virtual pet in their room, looking very hyper and needing exercise. The pet\u2019s happiness bar is low."),(0,s.kt)("li",{parentName:"ol"},"The user taps a button to indicate they are starting their activity."),(0,s.kt)("li",{parentName:"ol"},"The user stands up and takes a walk down their hallway and back to their room."),(0,s.kt)("li",{parentName:"ol"},"The app tracks the user's steps using their smartphones built in hardware sensors."),(0,s.kt)("li",{parentName:"ol"},"The user taps a button on the app to record their activity."),(0,s.kt)("li",{parentName:"ol"},"The virtual pet is seen on screen in the users room visibly calmer/happier, and its health bar is at 100%.")),(0,s.kt)("h2",{id:"use-case-4---competitive-leaderboard"},"Use Case 4 - Competitive Leaderboard"),(0,s.kt)("mermaid",{value:'sequenceDiagram\n    participant User as Corporate Employee\n    participant App as AR PetPal\n    participant LB as Leaderboard\n\n    App->>User: Notification: "Your pet wants to exercise!"\n    User->>App: Opens App and sees stretching animation\n    activate App\n    Note left of User: Does a quick workout\n    User->>App: Tells app about workout\n    Note right of App: Registers workout\n    App->>User: Signals pet\'s hunger\n    User--\x3e>App: Scans oatmeal with fruits\n    App->>User: Recognizes food. Ask for confirmation\n    User--\x3e>App: Confirms food\n    App->>LB: Update health status\n    deactivate App\n\n    activate LB\n    LB->>User: Climb a few spots on the leaderboard\n    deactivate LB'}),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"A corporate employee who's been working from home due to recent global circumstances. With a sedentary lifestyle, they struggle to incorporate regular exercise into their daily routine."),(0,s.kt)("li",{parentName:"ol"},'User wakes up to a notification: "Your pet wants to exercise!"'),(0,s.kt)("li",{parentName:"ol"},"User opens the app, sees the pet stretching, and does a quick workout."),(0,s.kt)("li",{parentName:"ol"},"Post-workout, the pet signals it's hungry."),(0,s.kt)("li",{parentName:"ol"},"User makes oatmeal with fruits and scans it with the app."),(0,s.kt)("li",{parentName:"ol"},"App recognizes food, the user confirms, and the pet eats."),(0,s.kt)("li",{parentName:"ol"},"Pet's health improves, and the user climbs a few spots on the leaderboard.")),(0,s.kt)("h2",{id:"use-case-5---pet-personalization"},"Use Case 5 - Pet Personalization"),(0,s.kt)("mermaid",{value:'sequenceDiagram\n    title Sequence Diagram 5\n\n    actor user\n    participant APP\n\n    user->>APP: user clicks on settings menu\n    activate APP\n    APP--\x3e>user: display settings menu\n    user->>APP: user clicks on "change name" button\n    user->>APP: user changes name\n    APP->>Database: update "name" with user input\n    activate Database\n    Database--\x3e>APP: api response\n    deactivate Database\n    user->>APP: user clicks on "change avatar" button\n    user->>APP: user changes avatar\n    APP->>Database: update "avatar" with user input\n    activate Database\n    Database--\x3e>APP: api response\n    deactivate Database\n\n    user->>APP: user clicks "close menu" button\n    APP--\x3e>user: close settings menu\n    deactivate APP'}),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"A tech-savvy user who enjoys personalizing digital platforms to reflect their preferences. They want their virtual pet to be unique and resonate with their style."),(0,s.kt)("li",{parentName:"ol"},'User navigates to the "Pet Personalization" section in the app.'),(0,s.kt)("li",{parentName:"ol"},"User decides to give their pet a new name and types it in."),(0,s.kt)("li",{parentName:"ol"},"User then browses through a collection of avatars, selecting the one they find most appealing."),(0,s.kt)("li",{parentName:"ol"},"Wanting more control, the user goes into the app settings to tweak preferences to their liking."),(0,s.kt)("li",{parentName:"ol"},"Upon finishing the customization, the app showcases the pet with its new name and appearance.")),(0,s.kt)("h2",{id:"use-case-6---user-sign-in-and-sign-out"},"Use Case 6 - User Sign-In and Sign-Out"),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    title Sequence Diagram 6\n\n    actor user\n\n    Note right of user: College student eager to use digital platforms\n\n    user->>APP: opens app\n    activate APP\n\n    alt user is new to the app\n        APP--\x3e>user:  displays Sign up form\n        user->APP: signs up\n        APP->>database: adds user's info to db\n        activate database\n        database--\x3e>APP: returns user's info\n        deactivate database\n\n        deactivate APP\n\n\n\n    else user is returning\n        APP--\x3e>user: displays login form\n        activate APP\n        user->>APP: logs in\n        APP->>database: checks user's credentials\n        activate database\n        database--\x3e>APP: grants access\n        deactivate database\n        deactivate APP\n\n    end\n    Note right of user: User takes a break from app\n    user->>APP: user wants logs out\n    activate APP\n    APP--\x3euser: asks the user for confirmation about logging out\n    user->>APP: confirms that he wants to log out\n    APP->>database: clears user's login cookie\n    activate database\n    deactivate database\n    APP--\x3e>user: logs the user out\n    deactivate APP\n\n    Note right of user: user closes app"}),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"A college student eager to engage with digital platforms in their leisure time. They want to securely access their ARPetPals account and ensure they can log out to protect their data."),(0,s.kt)("li",{parentName:"ol"},'Upon launching the ARPetPals app, the user is greeted with options: "Sign In" or "Sign Up".'),(0,s.kt)("li",{parentName:"ol"},'If new to the platform, the user taps on "Sign Up", providing the necessary details to create their account.'),(0,s.kt)("li",{parentName:"ol"},'If returning, the user taps on "Sign In", entering their existing credentials to access the app.'),(0,s.kt)("li",{parentName:"ol"},"While enjoying their ARPetPals experience, the user decides to take a break and ensure their account is secure."),(0,s.kt)("li",{parentName:"ol"},'Navigating to the settings menu, the user spots the "Sign Out" option and taps on it.'),(0,s.kt)("li",{parentName:"ol"},"The app confirms their sign-out.")),(0,s.kt)("h2",{id:"use-case-7--environment-engagement"},"Use Case 7- Environment Engagement"),(0,s.kt)("mermaid",{value:'\nsequenceDiagram\n    title Sequence Diagram 7\n\n    actor user\n    activate objectRecognition\n\n    APP->>database: Checks pet\'s status\n    activate database\n    database--\x3e>APP: Sends pet status\n    deactivate database\n    APP--\x3e>user: sends notification "Your pet suggests a quick brain break!"\n\n    user->>APP: open app\n    activate APP\n    APP--\x3e>user: display the pet juggling virtual balls\n\n    user->>APP: grabs a fruit snack and scans it\n    APP->>objectRecognition: capture and transfer image data\n    activate objectRecognition\n    Note right of objectRecognition: process image data\n    objectRecognition--\x3e>APP: recognize fruit\n    deactivate objectRecognition\n\n    APP--\x3e>user: show comment "fruit"\n\n    user->>APP: tap the fruit\n    Note right of APP: determine pet response\n    APP--\x3e>user: displaying pet nibbling its virtual fruit\n    deactivate APP'}),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"A user is a high school student preparing for exams and requires short breaks to stay efficient."),(0,s.kt)("li",{parentName:"ol"},'After two hours of studying, the app prompts: "Your pet suggests a quick brain break!"'),(0,s.kt)("li",{parentName:"ol"},"User opens the app to see the pet juggling virtual balls."),(0,s.kt)("li",{parentName:"ol"},"User attempts to mimic the juggling, causing some laughter and relaxation."),(0,s.kt)("li",{parentName:"ol"},"The user grabs a fruit snack and scans it."),(0,s.kt)("li",{parentName:"ol"},"Pet nibbles its virtual fruit, and both feel rejuvenated."),(0,s.kt)("li",{parentName:"ol"},"The user returns to studying, feeling more refreshed and focused.")),(0,s.kt)("h2",{id:"use-case-8--app-creating-a-competetive-interactive-health-experience"},"Use Case 8- APP Creating a Competetive Interactive Health Experience"),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    title Sequence Diagram 8\n\n    actor user\n\n    Note right of user: Young healthy adult on fitness journey\n\n    user->>APP: opens app\n    activate APP\n    user->>APP: opens leaderboard tab\n\n    APP->>database: Asks for leaderboard info.\n    activate database\n    database--\x3e>APP: Returns leaderboard info.\n    deactivate database\n    APP--\x3e>user: Shows a list of users sorted by points\n\n    Note right of user: Sees the highest-level user\n\n    user->>APP: taps on highest-level user\n\n    APP->>database: asks for user and pet information\n    activate database\n    database--\x3e>APP: Returns user and pet information\n    deactivate database\n    APP--\x3e>user: displays user's info.\n    user->>APP: clicks on ribbon to learn how to earn badges\n    APP--\x3e>user: displays how to earn badges\n\n    Note right of user: sees badge for feeding the most protein\n\n    user->>APP: taps on information icon to find more info.\n    APP--\x3e>user: tells user how to earn points\n    deactivate APP\n\n    Note right of user: User makes goal to eat healthier to earn points\n\n    user->>APP: earns points\n    activate APP\n    APP->>database: updates user's score\n    activate database\n    database--\x3e>APP: returns new info.\n    deactivate database\n    APP--\x3e>user: moves the user up on the leaderboard\n    deactivate APP"}),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User is a young adult on a fitness journey with friends."),(0,s.kt)("li",{parentName:"ol"},"User has been keeping up with their health and nutrition goals using the app and interacting with their virtual pet."),(0,s.kt)("li",{parentName:"ol"},"At the end of the week, user opens the app and taps on the leaderboard tab."),(0,s.kt)("li",{parentName:"ol"},"Sees the user with the most amount of points."),(0,s.kt)("li",{parentName:"ol"},"Taps on another user\u2019s username and sees their profile, pet\u2019s health score, and badges."),(0,s.kt)("li",{parentName:"ol"},"Taps on ribbon icon to see how to earn badges."),(0,s.kt)("li",{parentName:"ol"},"Sees that there is a badge for feeding virtual pet the most protein in grams/week."),(0,s.kt)("li",{parentName:"ol"},"User taps on the information circle icon to see what tasks reward users with points."),(0,s.kt)("li",{parentName:"ol"},"User makes new goal to eat more protein next week so they can get higher on the leaderboard and compete with their friends."),(0,s.kt)("li",{parentName:"ol"},"User earns points and moves up on the leaderboard.")))}u.isMDXComponent=!0}}]);