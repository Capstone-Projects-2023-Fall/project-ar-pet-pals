---
sidebar_position: 4
---

# Features and Requirements

## Functional Requirements

**ARPetPals will require registration with Google account.**

  - Users must have the option to register using their Google account for easy sign-up.
  
  - During registration, users will be prompted to grant necessary permissions to the app.
  
  - User data obtained from the Google account, such as name and profile picture, may be used to personalize the experience.

**User must allow access to the Camera and fitness app to play the game.**
  
  - The app will request access to the smartphone's camera to enable augmented reality features.
  
  - Users will also have the option to grant access to their fitness app data, which can be used to enhance the pet's health and activity level within the game.
  
  - Clear explanations and prompts for granting these permissions will be provided to the user.

**A welcome screen will appear first when the user first signs up explaining the game.**
  
  - Upon initial sign-up, a welcoming screen will provide a brief and user-friendly explanation of the game's concept and mechanics.
  
  - It will introduce users to their virtual pet and its role in their daily life.
  
  - The screen may also offer a tutorial to guide users through basic interactions.

**User picks the avatar of the pet and gives it a name.**

  - Users will have the opportunity to select and customize their pet's avatar from a range of options.
  
  - They will be prompted to give a unique name to their pet, fostering a sense of ownership and attachment.
  
  - Customization options may include selecting the pet's color, size, and features.

**Main screen shows the pet, health and happiness measurements, settings**

  - Upon completing setup, the smartphone's camera will activate, merging the virtual pet with the user's real-world environment.

 - The main game screen will prominently display the virtual pet, accompanied by health and happiness metrics.

 - Users can access the settings menu from this screen to configure preferences.

**ARPetPals will use ai to detect what kind of food you are eating, and will affect the health and happiness of the pet.**

 - AI algorithms will analyze the user's eating habits through the camera feed.

 - The app will identify the type of food being consumed and simulate its impact on the pet's health and happiness.

 - A variety of food items and their corresponding effects will be programmed into the game.

**ARPetPals will use ai to tell you jokes about objects that it recognizes.**

 - The AI will recognize real-world objects through the camera.

 - When an object is recognized, the virtual pet may spontaneously generate and share relevant jokes or comments about the object.

**Users can feed the pet by searching within the AR environment by double clicking on a space.**

 - Users can initiate the feeding interaction by double-clicking on different areas of the ground within the augmented reality environment.

 - When the user double-clicks on a specific spot, the app will simulate a "food search."

 - The outcome of the search will vary; in some instances, virtual food items will appear, while in others, nothing will be found.

**ARPetPals will track the user's activity and will affect the health and happiness of the pet.**

 - ARPetPals will integrate activity tracking through the smartphone's health app.

 - The app will monitor the user's physical movement and encourage a healthy level of activity throughout the day.

 - The virtual pet's well-being, including both happiness and health metrics, will be influenced by the user's activity level.

 - Regular physical movement and engagement with the pet may lead to improved pet happiness and health.

**The pet will have different animations depending on the event.**

 - The virtual pet will exhibit different animations and behaviors based on various events and interactions.

 - For instance, it may dance when happy, display curiosity when shown an object, or express hunger when it's time to eat.

 - These animations enhance the pet's realism and engagement.

**Users will be able to play with and clean their pet to increase health and happiness.**

 - Users can engage in playtime activities with their pet, such as throwing virtual toys.

 - Cleaning interactions, like brushing or bathing the pet, will also be available to boost its happiness and hygiene.

 - Different interactions will yield varying degrees of health and happiness improvement.

**The leaderboard button will display other user’s pets with the happiest and healthiest pets.**

 - The leaderboard button allows users to view other players' virtual pets.

 - Pets on the leaderboard will be ranked based on their happiness and health metrics.

 - Users can use this feature to compare their pet's well-being with others and strive for a top-ranking position.

**Users can sign out of the app.** 

 - Users will have the ability to sign out of the app when they choose to do so.

 - Signing out ensures the privacy and security of user data.

 - Appropriate warnings and confirmation prompts will be provided to prevent accidental sign-outs.

## Non-Functional Requirements

**Usability**
  1. User-Friendly Interface: The app should offer an intuitive, user-friendly interface that allows users to easily navigate through different features.
  2. Quick Response: The application should be responsive and quick in processing actions. Interactions with the virtual pet should not lag or delay.
  3. Tutorial: An optional tutorial should be provided to familiarize new users with the app's functionalities.

**Performance**
  1. Real-Time Processing: The object and speech recognition algorithms should operate in real-time to provide a seamless user experience.
  2. Low Latency: Latency should be minimized for all augmented reality functions, and any delays should not exceed 1-2 seconds.
  3. Smooth Animation: Animations of the pet should run smoothly, without glitches, for an immersive experience.

**Security**
  1. User Authentication: The Google account sign-up process must be secure, and any data collected must be stored securely.
  2. Permission Management: The app should securely manage permissions for camera access and other sensitive data, revoking them if necessary upon user sign-out.

**Scalability**
  1. Multi-Platform Support: The app should be compatible with both Android and iOS, and be scalable for future platforms.
  2. Database Scalability: The system should be able to accommodate an increasing number of registered users and pets without degradation in performance.

**Availability**
  1. Backup and Recovery: A backup system should be in place to recover user data in case of any loss or corruption.

**Accessibility**
  1. Voice Commands: Voice recognition should be accurate and efficient for differently-abled users.
  2. Visual Aids: Text should be clearly readable, and the app should offer some degree of customization for those with visual impairments.

**Quality**
  1. High-Quality Graphics: The AR representation of the pet should be of high quality, enhancing the realism and engagement levels.
  2. Sound Quality: Any sounds or speech produced within the app should be clear and free from distortion.