---
sidebar_position: 2
---

# Integration Tests

## Use Case 1- APP Illustrating the Effects of Poor Nutrition
Verify that the ARPetPals app effectively illustrates the consequences of poor nutrition through user interactions and the virtual pet's response.

Expected result: The virtual pet's condition accurately reflects the consequences of poor nutrition and inactivity. The app correctly recognizes the selected food items, and the virtual pet's response aligns with the poor nutritional value of the meal.

Test Components:

-Object Recognition AI: The system component responsible for recognizing food items through the smartphone's camera.

-Virtual Pet Metrics: The script governing the virtual pet's responses to user actions and its metrics.

## Use Case 2- APP Helping User Make Healthier Food Choices
Test the system's ability to assist users in making healthier food choices by providing guidance and feedback in ARPetPals.

Expected Result: The system provides accurate feedback on the nutritional value of the selected food item. The app encourages and reinforces the importance of healthier food choices through the virtual pet's response. The user's virtual pet reflects improved health and happiness

Test Components:

-Object Recognition AI: The system component responsible for recognizing food items through the smartphone's camera.

-Virtual Pet Behavior System: The system component that responds to user interactions related to food choices.

## Use Case 3- APP Helping User Keep Active
Validate the system's capability to encourage and monitor user physical activity in ARPetPals.

Expected Result: The app effectively motivates the user to engage in physical activity in response to the virtual pet's exercise needs. The activity tracker accurately records the user's physical activity metrics. The app fetches and uses the physical activity data to reflect the virtual pet's improved condition.

Test Components:

-ARPetPals App: The client application responsible for initiating, tracking, and displaying user physical activity and its influence on the virtual pet.

-Activity Tracker (e.g., Smartphone's Sensors): The system component that measures the user's physical activity metrics, such as steps and distance.

-Virtual Pet Behavior System: The system component that responds to user actions related to physical activity and mirrors the virtual pet's state.

## Use Case 4 - Competitive Leaderboard
Verify the system's ability to engage users in competitive interaction and track their progress through a leaderboard in ARPetPals.

Expected Result: The app effectively prompts the user to engage in competitive activities for exercise and nutrition. The user's interactions with the virtual pet reflect their progress. The virtual pet's metrics are uploaded to the database. The app's leaderboard accurately reflects the user's improved ranking.

Test Components:

-ARPetPals App: The client application responsible for presenting the competitive leaderboard and tracking user actions that affect leaderboard rankings.

-Virtual Pet Metrics: The script governing the virtual pet's responses to user actions and its metrics.

-Database: The system component responsible for storing and retrieving user data, including leaderboard rankings and user interactions.

## Use Case 5 - Pet Personalization
Validate the system's ability to enable users to personalize their virtual pet's name, appearance, and app settings in ARPetPals.

Expected Result: The app successfully provides a user-friendly interface for customizing the virtual pet's name. The user can browse, select, and apply their chosen avatar from the list of avatars. The user's settings preferences are correctly applied. The virtual pet is displayed with the name, chosen avatar, and adjusted settings.

Test Components:

-ARPetPals App: The client application responsible for providing personalization options and displaying the customized virtual pet.

-Database: The system component responsible for storing and retrieving user preferences and customized pet data.

## Use Case 6 - User Sign-In and Sign-Out
Verify the system's ability to provide secure user sign-in and sign-out.

Expected Result: The app offers secure user sign-in options for new and returning users. New users can successfully register, and returning users can sign in with their existing credentials, loading saved data. The "sign out" button in the settings menu allows users to securely log out of their account.

Test Components:

-ARPetPals App: The client application that manages user authentication and account management.

-Database: The system component responsible for storing and managing user account data.
