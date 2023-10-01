---
sidebar_position: 3
---

# Sequence Diagrams

## Use case 2

```mermaid
sequenceDiagram
    title Sequence Diagram 2

    actor user

    %% user->>+appstore: requests app
    %% appstore-->>-user: downloads and installs app

    user->>APP: opens app
    APP-->>user: "Welcome"

    user->>APP: creates an account
    APP->>database: stores user's info.
    database-->>APP: returns new info.
    APP-->>user: shows updated information
    Note left of user: Has not yet eaten

    APP->>user: Sends notification to feed pet
    user-->APP: Opens app
    APP->>user: Display malnourished pet
    Note left of user: Cooks chicken
    user-->>APP: shows chicken to camera
    APP->>objectRecognition: shows user's video about food
    objectRecognition-->>APP: sends back the food's information
    APP->>user: Displays food information
    APP->>user: Asks if food was recognized properly
    user-->>APP: confirms food was recognized properly
    APP->>database: improves pet's health to 100%
    database-->>APP: returns new pet info.
    APP->>user: Encourages user for eating healthy

```

```text
## Use Case 2- APP Helping User Make Healthier Food Choices
1. A user is a works from home and is trying to improve their eating habits.
2. User downloads ARPP to aid their nutrition goals and creates an account.
3. User has been working for hours and has not eaten.
4. User receives a notification from the app reminding them to feed their pet.
5. User opens the app and sees their virtual pet sitting on their desk, looking very malnourished and weak.
6. User cooks a chicken breast.
7. User points the camera at its food and the app recognizes the food correctly, asking the user to verify.
8. User taps a button to confirm that the food is correctly recognized.
9. The virtual pet is now nourished and at100% health due to the high nutritional value of the chicken breast.
10. The user is encouraged by their pets' happiness and continues to eat healthier meals.
```

## Use case 3

```mermaid
sequenceDiagram
    title Sequence Diagram 3

    actor user
    activate APP
    activate database
    APP->>database: Checks pet's status
    database-->>APP: Sends pet status

    Note right of user: User does not login for a while

    APP->>user: Sends notification about pet's status
    user-->>APP: logs in
    APP->>user: "welcome back"
    APP->>user: Displays pet that looks hyper
    user-->>APP: Clicks button to indicate starting activity

    user->>APP: User walks
    Note right of APP: App records steps with smartphone's sensor
    user->>APP: Clicks button to end activity
    APP->>database: Improves pet's status
    database-->>APP: Sends new status
    APP-->>user: Displays calmer pet
    deactivate database
```

```text
## Use Case 3- APP Helping User Keep Active
1. A user is a software engineer working from home full time and has eaten but has not moved in a while due to several long morning zoom meetings.
2. The user receives a notification from the app letting them know that their pet is in need of a walk.
3. The user opens the app and sees their virtual pet in their room, looking very hyper and needing exercise. The pet’s happiness bar is low.
4. The user taps a button to indicate they are starting their activity.
5. The user stands up and takes a walk down their hallway and back to their room.
6. The app tracks the users steps using their smartphones built in hardware sensors.
7. The user taps a button on the app to record their activity.
8. The virtual pet is seen on screen in the users room visibly calmer/happier, and its health bar is at 100%.
```

## Use case 4

```mermaid
sequenceDiagram
    participant User as Corporate Employee
    participant App as AR PetPal
    participant LB as Leaderboard

    App->>User: Notification: "Your pet wants to exercise!"
    User->>App: Opens App and sees stretching animation
    User->>User: Does a quick workout
    App->>User: Signals pet's hunger
    User->>App: Scans oatmeal with fruits
    App->>User: Recognizes food. Ask for confirmation
    User->>App: Confirms food
    App->>LB: Update health status
    LB->>User: Climb a few spots on the leaderboard
```

```text
## Use Case 4 - Competitive Leaderboard
1. A corporate employee who's been working from home due to recent global circumstances. With a sedentary lifestyle, they struggle to incorporate regular exercise into their daily routine.
2. User wakes up to a notification: "Your pet wants to exercise!"
3. User opens the app, sees the pet stretching, and does a quick workout.
4. Post-workout, the pet signals it's hungry.
5. User makes oatmeal with fruits and scans it with the app.
6. App recognizes food, the user confirms, and the pet eats.
7. Pet's health improves, and the user climbs a few spots on the leaderboard.
```

## Use case 5

```mermaid
sequenceDiagram
    participant User as Tech-Savvy User
    participant App as AR PetPal

    User->>App: Navigates to "Pet Personalization"
    App->>User: Display customization options
    User->>App: Types in new pet name
    App->>User: Name updated
    User->>App: Browses avatar collection
    User->>App: Selects desired avatar
    App->>User: Avatar updated
    User->>App: Navigates to app settings
    User->>App: Tweaks preferences
    App->>User: Apply changes and showcase pet with new name and appearance
```

```text
## Use Case 5 - Pet Personalization
1. A tech-savvy user who enjoys personalizing digital platforms to reflect their preferences. They want their virtual pet to be unique and resonate with their style.
2. User navigates to the "Pet Personalization" section in the app.
3. User decides to give their pet a new name and types it in.
4. User then browses through a collection of avatars, selecting the one they find most appealing.
5. Wanting more control, the user goes into the app settings to tweak preferences to their liking.
6. Upon finishing the customization, the app showcases the pet with its new name and appearance.
```

## Use case 6

```mermaid
sequenceDiagram
    participant User as College Student
    participant App as AR PetPal

    User->>App: Launches ARPetPals app
    App-->>User: Displays "Sign In" or "Sign Up" options
    User->>App: Chooses "Sign Up" (for new users) or "Sign In" (for returning users)
    Note over User,App: If "Sign Up"
    User->>App: Provides necessary details to create account
    App-->>User: Account created successfully
    Note over User,App: If "Sign In"
    User->>App: Enters existing credentials
    App-->>User: Grants access to ARPetPals dashboard
    User->>App: Navigates to settings menu
    User->>App: Selects "Sign Out" option
    App-->>User: Confirms sign-out and returns to initial sign-in screen
```

```text
## Use Case 6 - User Sign-In and Sign-Out
1. A college student eager to engage with digital platforms in their leisure time. They want to securely access their ARPetPals account and ensure they can log out to protect their data.
2. Upon launching the ARPetPals app, the user is greeted with options: "Sign In" or "Sign Up".
3. If new to the platform, the user taps on "Sign Up", providing the necessary details to create their account.
4. If returning, the user taps on "Sign In", entering their existing credentials to access the app.
5. While enjoying their ARPetPals experience, the user decides to take a break and ensure their account is secure.
6. Navigating to the settings menu, the user spots the "Sign Out" option and taps on it.
7. The app confirms their sign-out.
```

## Use case 7

```mermaid

sequenceDiagram
    title Sequence Diagram 7

    actor user
    activate APP
    activate objectRecognition
    activate database

    APP->>database: Checks pet's status
    database-->>APP: Sends pet status
    APP-->>user: sends notification "Your pet suggests a quick brain break!"

    user->>APP: open app
    APP-->>user: display the pet juggling virtual balls

    user->>APP: grabs a fruit snack and scans it
    APP->>objectRecognition: capture and transfer image data
    objectRecognition->>+objectRecognition: process image data
    objectRecognition-->>APP: recognize fruit
    APP-->>user: show comment "fruit"

    user->>APP: tap the fruit
    APP->>+APP: determine pet response
    APP-->>user: displaying pet nibbling its virtual fruit
```

```text
## Use Case 7- Environment Engagement
1. A user is a high school student preparing for exams and requires short breaks to stay efficient.
2. After two hours of studying, the app prompts: "Your pet suggests a quick brain break!"
3. User opens the app to see the pet juggling virtual balls.
4. User attempts to mimic the juggling, causing some laughter and relaxation.
5. The user grabs a fruit snack and scans it.
6. Pet nibbles its virtual fruit, and both feel rejuvenated.
7. The user returns to studying, feeling more refreshed and focused.
```

## Use Case 8 
```mermaid
sequenceDiagram
    title Sequence Diagram 8

    actor user

    Note right of user: Young healthy adult on fitness journey

    user->>APP: opens app
    user->>APP: opens leaderboard tab

    APP->>database: Asks for leaderboard info.
    database-->>APP: Returns leaderboard info.

    APP-->>user: Shows a list of users sorted by points

    Note right of user: Sees the highest-level user

    user->>APP: taps on highest-level user

    APP->>database: asks for user and pet information
    database-->>APP: Returns user and pet information

    APP-->>user: displays user's info.
    APP-->>user: displays how to earn badges

    user->>APP: clicks on ribbon to learn how to earn badges

    APP-->>user: shows badges stored in app

    Note right of user: sees badge for feeding the most protein

    user->>APP: taps on information icon to find more info.
    APP-->>user: tells user how to earn points


    Note right of user: User makes goal to eat healthier to earn points

    user->>APP: earns points
    APP->>database: updates user's score
    database-->>APP: returns new info.

    APP-->>user: moves the user up on the leaderboard

```
```text
## Use Case 8- APP Creating a Competetive Interactive Health Experience
1. User is a young adult on a fitness journey with friends.
2. User has been keeping up with their health and nutrition goals using the app and interacting with their virtual pet.
3. At the end of the week, user opens the app and taps on the leaderboard tab.
4. Sees the users with the most amount of points.
5. Taps on another user’s username and sees their profile, pet’s health score, and badges.
6. Taps on ribbon icon to see how to earn badges.
7. Sees that there is a badge for feeding virtual pet the most protein in grams/week.
8. User taps on the information circle icon to see what tasks reward users with points.
9. User makes new goal to eat more protein this next week so they can get higher on the leaderboard and compete with their friends.
10. User earns points and moves up on the leaderboard.
```