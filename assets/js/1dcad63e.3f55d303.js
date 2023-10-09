"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=s.createContext({}),u=function(e){var t=s.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=u(n),h=a,g=l["".concat(p,".").concat(h)]||l[h]||d[h]||r;return n?s.createElement(g,o(o({ref:t},c),{},{components:n})):s.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var s=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},o="Sequence Diagrams",i={unversionedId:"system-architecture/sequence-diagrams",id:"system-architecture/sequence-diagrams",title:"Sequence Diagrams",description:"Use case 1",source:"@site/docs/system-architecture/sequence-diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/sequence-diagrams",permalink:"/project-ar-pet-pals/docs/system-architecture/sequence-diagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-ar-pet-pals/edit/main/documentation/docs/system-architecture/sequence-diagrams.md",tags:[],version:"current",lastUpdatedBy:"Anya Tewari",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Components",permalink:"/project-ar-pet-pals/docs/system-architecture/components"},next:{title:"Algorithm Overview",permalink:"/project-ar-pet-pals/docs/system-architecture/algorithm-overview"}},p={},u=[{value:"Use case 1",id:"use-case-1",level:2},{value:"Use case 2",id:"use-case-2",level:2},{value:"Use case 3",id:"use-case-3",level:2},{value:"Use case 4",id:"use-case-4",level:2},{value:"Use case 5",id:"use-case-5",level:2},{value:"Use case 6",id:"use-case-6",level:2},{value:"Use case 7",id:"use-case-7",level:2},{value:"Use Case 8",id:"use-case-8",level:2}],c={toc:u};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,a.kt)("h2",{id:"use-case-1"},"Use case 1"),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    title Sequence Diagram 1\n\n    actor user\n\n    %% user->>+appstore: requests app\n    %% appstore--\x3e>-user: downloads and installs app\n\n    user->>APP: Opens app\n    user->>APP: Create an account\n\n    APP->>database: Create new user\n    database--\x3e>APP: Return new user\n    APP--\x3e>user: Display intro for first-time user\n\n    APP->>APP: Pet's health and happiness decreases\n\n    APP->>user: Send notification to feed pet\n    \n    user--\x3e>APP: User puts unhealthy food in frame of camera\n    APP->>objectRecognition: Send image of frame \n    objectRecognition--\x3e>APP: Send food's information\n    APP->>user: Display food information\n    APP->>user: Prompt user to confirm food information\n    user--\x3e>APP: User confirms food information\n    APP->>database: improves pet's health by 25% and happiness by 15%\n    database--\x3e>APP: Display new pet stats\n    APP->>user: Display text about eating healthier food\n"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"## Use Case 1- APP Illustrating the Effects of Poor Nutrition \nA user is a college student and spends lots of time studying at their desk and does not have time to cook nutritious meals.\nUser downloads ARPP and creates an account.\nUser has been studying for hours and has not eaten or done any physical activity.\nUser receives a notification from the app reminding them to feed their pet.\nUser opens the app and sees their virtual pet sitting on their desk, looking very malnourished and weak.\nUser gets a bowl of ramen noodles and a can of Monster to drink.\nUser points the camera at its food and the app recognizes the food correctly, asking the user to verify.\nUser taps a button to confirm that the food is correctly recognized.\nThe pet is nourished slightly but is not at 100% health due to the poor nutritional value of the user\u2019s meal.\nThe user is not properly nourished due to the poor meal choice and is hungry again a short while later.\n")),(0,a.kt)("h2",{id:"use-case-2"},"Use case 2"),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    title Sequence Diagram 2\n\n    actor user\n\n    %% user->>+appstore: requests app\n    %% appstore--\x3e>-user: downloads and installs app\n\n    user->>APP: opens app\n    APP--\x3e>user: \"Welcome\"\n\n    user->>APP: creates an account\n    APP->>database: stores user's info.\n    database--\x3e>APP: returns new info.\n    APP--\x3e>user: shows updated information\n    Note left of user: Has not yet eaten\n\n    APP->>user: Sends notification to feed pet\n    user--\x3eAPP: Opens app\n    APP->>user: Display malnourished pet\n    Note left of user: Cooks chicken\n    user--\x3e>APP: shows chicken to camera\n    APP->>objectRecognition: shows user's video about food\n    objectRecognition--\x3e>APP: sends back the food's information\n    APP->>user: Displays food information\n    APP->>user: Asks if food was recognized properly\n    user--\x3e>APP: confirms food was recognized properly\n    APP->>database: improves pet's health to 100%\n    database--\x3e>APP: returns new pet info.\n    APP->>user: Encourages user for eating healthy\n"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"## Use Case 2- APP Helping User Make Healthier Food Choices\n1. A user is a works from home and is trying to improve their eating habits.\n2. User downloads ARPP to aid their nutrition goals and creates an account.\n3. User has been working for hours and has not eaten.\n4. User receives a notification from the app reminding them to feed their pet.\n5. User opens the app and sees their virtual pet sitting on their desk, looking very malnourished and weak.\n6. User cooks a chicken breast.\n7. User points the camera at its food and the app recognizes the food correctly, asking the user to verify.\n8. User taps a button to confirm that the food is correctly recognized.\n9. The virtual pet is now nourished and at100% health due to the high nutritional value of the chicken breast.\n10. The user is encouraged by their pets' happiness and continues to eat healthier meals.\n")),(0,a.kt)("h2",{id:"use-case-3"},"Use case 3"),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    title Sequence Diagram 3\n\n    actor user\n    activate APP\n    activate database\n    APP->>database: Checks pet's status\n    database--\x3e>APP: Sends pet status\n\n    Note right of user: User does not login for a while\n\n    APP->>user: Sends notification about pet's status\n    user--\x3e>APP: logs in\n    APP->>user: \"welcome back\"\n    APP->>user: Displays pet that looks hyper\n    user--\x3e>APP: Clicks button to indicate starting activity\n\n    user->>APP: User walks\n    Note right of APP: App records steps with smartphone's sensor\n    user->>APP: Clicks button to end activity\n    APP->>database: Improves pet's status\n    database--\x3e>APP: Sends new status\n    APP--\x3e>user: Displays calmer pet\n    deactivate database"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"## Use Case 3- APP Helping User Keep Active\n1. A user is a software engineer working from home full time and has eaten but has not moved in a while due to several long morning zoom meetings.\n2. The user receives a notification from the app letting them know that their pet is in need of a walk.\n3. The user opens the app and sees their virtual pet in their room, looking very hyper and needing exercise. The pet\u2019s happiness bar is low.\n4. The user taps a button to indicate they are starting their activity.\n5. The user stands up and takes a walk down their hallway and back to their room.\n6. The app tracks the users steps using their smartphones built in hardware sensors.\n7. The user taps a button on the app to record their activity.\n8. The virtual pet is seen on screen in the users room visibly calmer/happier, and its health bar is at 100%.\n")),(0,a.kt)("h2",{id:"use-case-4"},"Use case 4"),(0,a.kt)("mermaid",{value:'sequenceDiagram\n    participant User as Corporate Employee\n    participant App as AR PetPal\n    participant LB as Leaderboard\n\n    App->>User: Notification: "Your pet wants to exercise!"\n    User->>App: Opens App and sees stretching animation\n    User->>User: Does a quick workout\n    App->>User: Signals pet\'s hunger\n    User->>App: Scans oatmeal with fruits\n    App->>User: Recognizes food. Ask for confirmation\n    User->>App: Confirms food\n    App->>LB: Update health status\n    LB->>User: Climb a few spots on the leaderboard'}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"## Use Case 4 - Competitive Leaderboard\n1. A corporate employee who's been working from home due to recent global circumstances. With a sedentary lifestyle, they struggle to incorporate regular exercise into their daily routine.\n2. User wakes up to a notification: \"Your pet wants to exercise!\"\n3. User opens the app, sees the pet stretching, and does a quick workout.\n4. Post-workout, the pet signals it's hungry.\n5. User makes oatmeal with fruits and scans it with the app.\n6. App recognizes food, the user confirms, and the pet eats.\n7. Pet's health improves, and the user climbs a few spots on the leaderboard.\n")),(0,a.kt)("h2",{id:"use-case-5"},"Use case 5"),(0,a.kt)("mermaid",{value:'sequenceDiagram\n    participant User as Tech-Savvy User\n    participant App as AR PetPal\n\n    User->>App: Navigates to "Pet Personalization"\n    App->>User: Display customization options\n    User->>App: Types in new pet name\n    App->>User: Name updated\n    User->>App: Browses avatar collection\n    User->>App: Selects desired avatar\n    App->>User: Avatar updated\n    User->>App: Navigates to app settings\n    User->>App: Tweaks preferences\n    App->>User: Apply changes and showcase pet with new name and appearance'}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'## Use Case 5 - Pet Personalization\n1. A tech-savvy user who enjoys personalizing digital platforms to reflect their preferences. They want their virtual pet to be unique and resonate with their style.\n2. User navigates to the "Pet Personalization" section in the app.\n3. User decides to give their pet a new name and types it in.\n4. User then browses through a collection of avatars, selecting the one they find most appealing.\n5. Wanting more control, the user goes into the app settings to tweak preferences to their liking.\n6. Upon finishing the customization, the app showcases the pet with its new name and appearance.\n')),(0,a.kt)("h2",{id:"use-case-6"},"Use case 6"),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    title Sequence Diagram 6\n\n    actor user\n\n    Note right of user: College student eager to use digital platforms\n\n    user->>APP: opens app\n\n    alt user is new to the app\n        APP--\x3e>user:  displays Sign up form\n        user->APP: signs up\n        APP->>database: adds user's info to db\n        database--\x3e>APP: returns user's info\n\n\n    else user is returning\n        APP--\x3e>user: displays login form\n        user->>APP: logs in\n        APP->>database: checks user's credentials\n        database--\x3e>APP: grants access\n\n    end\n    Note right of user: User takes a break from app\n    user->>APP: user wants logs out\n    APP--\x3euser: asks the user for confirmation about logging out\n    user->>APP: confirms that he wants to log out\n    APP->>database: clears user's login cookie\n    APP--\x3e>user: logs the user out\n\n    Note right of user: user closes app"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'## Use Case 6 - User Sign-In and Sign-Out\n1. A college student eager to engage with digital platforms in their leisure time. They want to securely access their ARPetPals account and ensure they can log out to protect their data.\n2. Upon launching the ARPetPals app, the user is greeted with options: "Sign In" or "Sign Up".\n3. If new to the platform, the user taps on "Sign Up", providing the necessary details to create their account.\n4. If returning, the user taps on "Sign In", entering their existing credentials to access the app.\n5. While enjoying their ARPetPals experience, the user decides to take a break and ensure their account is secure.\n6. Navigating to the settings menu, the user spots the "Sign Out" option and taps on it.\n7. The app confirms their sign-out.\n')),(0,a.kt)("h2",{id:"use-case-7"},"Use case 7"),(0,a.kt)("mermaid",{value:'\nsequenceDiagram\n    title Sequence Diagram 7\n\n    actor user\n    activate APP\n    activate objectRecognition\n    activate database\n\n    APP->>database: Checks pet\'s status\n    database--\x3e>APP: Sends pet status\n    APP--\x3e>user: sends notification "Your pet suggests a quick brain break!"\n\n    user->>APP: open app\n    APP--\x3e>user: display the pet juggling virtual balls\n\n    user->>APP: grabs a fruit snack and scans it\n    APP->>objectRecognition: capture and transfer image data\n    objectRecognition->>+objectRecognition: process image data\n    objectRecognition--\x3e>APP: recognize fruit\n    APP--\x3e>user: show comment "fruit"\n\n    user->>APP: tap the fruit\n    APP->>+APP: determine pet response\n    APP--\x3e>user: displaying pet nibbling its virtual fruit'}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'## Use Case 7- Environment Engagement\n1. A user is a high school student preparing for exams and requires short breaks to stay efficient.\n2. After two hours of studying, the app prompts: "Your pet suggests a quick brain break!"\n3. User opens the app to see the pet juggling virtual balls.\n4. User attempts to mimic the juggling, causing some laughter and relaxation.\n5. The user grabs a fruit snack and scans it.\n6. Pet nibbles its virtual fruit, and both feel rejuvenated.\n7. The user returns to studying, feeling more refreshed and focused.\n')),(0,a.kt)("h2",{id:"use-case-8"},"Use Case 8"),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    title Sequence Diagram 8\n\n    actor user\n\n    Note right of user: Young healthy adult on fitness journey\n\n    user->>APP: opens app\n    user->>APP: opens leaderboard tab\n\n    APP->>database: Asks for leaderboard info.\n    database--\x3e>APP: Returns leaderboard info.\n\n    APP--\x3e>user: Shows a list of users sorted by points\n\n    Note right of user: Sees the highest-level user\n\n    user->>APP: taps on highest-level user\n\n    APP->>database: asks for user and pet information\n    database--\x3e>APP: Returns user and pet information\n\n    APP--\x3e>user: displays user's info.\n    APP--\x3e>user: displays how to earn badges\n\n    user->>APP: clicks on ribbon to learn how to earn badges\n\n    APP--\x3e>user: shows badges stored in app\n\n    Note right of user: sees badge for feeding the most protein\n\n    user->>APP: taps on information icon to find more info.\n    APP--\x3e>user: tells user how to earn points\n\n\n    Note right of user: User makes goal to eat healthier to earn points\n\n    user->>APP: earns points\n    APP->>database: updates user's score\n    database--\x3e>APP: returns new info.\n\n    APP--\x3e>user: moves the user up on the leaderboard\n"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"## Use Case 8- APP Creating a Competetive Interactive Health Experience\n1. User is a young adult on a fitness journey with friends.\n2. User has been keeping up with their health and nutrition goals using the app and interacting with their virtual pet.\n3. At the end of the week, user opens the app and taps on the leaderboard tab.\n4. Sees the users with the most amount of points.\n5. Taps on another user\u2019s username and sees their profile, pet\u2019s health score, and badges.\n6. Taps on ribbon icon to see how to earn badges.\n7. Sees that there is a badge for feeding virtual pet the most protein in grams/week.\n8. User taps on the information circle icon to see what tasks reward users with points.\n9. User makes new goal to eat more protein this next week so they can get higher on the leaderboard and compete with their friends.\n10. User earns points and moves up on the leaderboard.\n")))}l.isMDXComponent=!0}}]);