This document describes the future features and UI plans for the AR Pet Pals app. 


Background:
The app is being made using Unity and C#, as well as some web tools for the servers and databases as well as using APIs to pass information back and forth. 
The app uses  virtual reality and object recognition technology. Users download the app and create an account. They will then be able to pick out and name their own virtual pet. Using AR technology and Unity's development tools, the user will be able to see their pet in their environment using their phone camera. The pet will appear where they point their camera at. 

Intro:
Users must care for their pets by feeding and exercising them. Users feed their pet by pointing the camera at food they are currently eating in real life. The app will use the camera to take a photo and scan the photo using object recognition technology and identify the food. The app will use its internal database to populate the top 3 foods that could be in the photo, and the user will be prompted to select which food is correct. If none are correct, users may select an option that says "none" and manually input the food label. Using an object recognition API, the app will rate the health of the user's meal on a scale of 1 to 10, 10 being the healthiest. The pet will be  energized based on the health score of their food. 

Health Bar:
On the bottom of the screen, the pet's health bar will be displayed. The bar is split into 10 small segments. The pet's health bar level will correspond to the health score of the food the user ate most recently. The pet will appear more energetic and happy if the food they are given is rated 7 or above. The pet will appear neutral if the food given is rated 4 through 6. They will appear tired and sad if the food they are given is rated below a 3. 

Notifications & Health: 
Additionally, the app notification system is tied to the food’s health score and the pet's health. If a user feeds their pet more healthy food, there will be a longer time in between push notifications/reminders to open the app, and vice versa. 

Physical Activity Feature:
The app will possibly feature the ability to exercise your pet. Using the same exact health rating system that the food recognition feature uses, the app will access the phone's internal hardware to track the step count of the user. Users can set their personal daily step goals in the app under the “Settings” tab. If the user only meets half of their daily goal, the pet's health will be decreased by 25%. The overall health of the pet will be calculated using a formula which incorporates both the food health scores and the users activity level to create one single value that will correspond with the pets health bar displayed on screen. 

Interactive Leaderboard:
To add a competitive spirit to the app, users can compete with friends for weekly health challenges. Users can opt in to an interactive experience where their pet’s overall score, based on user activity and food scores, will be calculated each week and totalled against their peers. Users will compete against other users within a 100 mile radius, or add friends by linking their phone number to their account, and the top 10 users of each week are displayed on a leaderboard. The leaderboards will be centered around heavily populated areas and have a 100 mile radius. If users make the leaderboard, they will receive a cute trophy that is displayed on their profile for a week. 

Drop Down Menu:
The app will always open to the camera screen after the login screen (for returning users). In the top right bar, there will be a spinner that will drop down to give users a menu. The menu will have the following categories: “Pet profile”, “User Profile”, “Health and Happiness”, “Leaderboard”, and “Settings”.  “Pet Profile” is where users can view their pets personal information, such as animal type, age, gender. “User Profile” is where users can view and edit their account information, such as username, birthday, email, and phone number. “Health and Happiness” is where users can view their pets overall health score and their progress over the week, user step count per week, and the ability to adjust their step goal. “Leaderboard” is where users can view the names of users on the Leaderboard of the week, which repopulates every Sunday morning. 
