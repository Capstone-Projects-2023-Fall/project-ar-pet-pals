---
sidebar_position: 3
---

Sequence Diagrams
=============================



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



## Use case 7
```mermaid

sequenceDiagram
    title Sequence Diagram 7

    actor user

    user->>APP: opens app
    APP-->>user: "Welcome"

    user->>APP: aim camera at chair
    APP->>objectRecognition: capture and transfer chair image data
    objectRecognition->>+objectRecognition: process image data
    objectRecognition-->>APP: recognize chair
    APP-->>user: show comment "chair"

    user->>APP: tap the chair
    APP->>+APP: determine pet response
    APP-->>user: display the pet animation of running to the chair and sitting down
```


```text
## Use Case 7- Environment Engagement
1. A user is a work from home and wants to be entertained by how the virtual pet's interactions with the real world environment.
2. The user opens ARPetPals app.
3. The user aims the camera at a chair next to him.
4. The app captures and transfers the chair's image data to the object recognition component.
5. The object recognition component processes the image data, recognizes the chair, and send the result back to the app.
6. The app informs the user the recognized object by displaying a comment "chair."
7. The user wants the virtual pet seated next to him.
8. The user tap the chair.
9. The app responds to the user by displaying an animation of the virtual pet running to the chair and sitting down.
```