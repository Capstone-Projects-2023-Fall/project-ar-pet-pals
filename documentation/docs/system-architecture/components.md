---
sidebar_position: 2
---

Components
=============================

# Client Application

The client application is the ARPetPals mobile app installed on the user's Android. It serves as the primary interface that users interact with their virtual pets and the augmented reality environment.

### Interfaces:
- Main User Interface: The user interacts with the virtual pet, the AR environment, and various app features through the mobile app's user interface.
- Camera: The app uses the smartphone's camera to capture the real-world environment, facilitating object recognition and virtual pet integration.
- API Integration: The app may interface with external services or APIs for certain features like user authentication.

# Object Recognition AI

Object recognition AI is a crucial component that enables the virtual pet to interact with real-world objects. It identifies and analyzes objects captured by the smartphone's camera to trigger appropriate responses from the virtual pet.

### Interfaces:
- Camera Feed Interface: The object recognition AI receives input from the smartphone's camera feed, continuously processing visual data to recognize objects.
- Virtual Pet Interaction: When objects are recognized, the AI communicates with the virtual pet's behavior system to trigger animations, comments, or interactions.

# Virtual Pet Behavior System

The virtual pet behavior system governs the actions, animations, and responses of the user's virtual pet. It ensures that the pet exhibits lifelike behaviors and interactions based on user actions and environmental cues.

### Interfaces:
- User Interaction Interface: The behavior system responds to user interactions such as feeding, playing, and cleaning.

- Object Recognition Interface: It receives signals from the object recognition AI to trigger specific animations or comments when the pet interacts with recognized objects.
- Health and Happiness Metrics Interface: The system calculates and updates the pet's health and happiness metrics based on user interactions and environmental cues.


# Backend Server

The backend server handles data related to the leaderboard feature. It stores and manages user profiles, pet metrics, and leaderboard rankings.

### Interfaces:
- User Profile Data Interface: The server communicates with the client app to store and retrieve user profiles, including pet information and activity metrics.
- Leaderboard Data Interface: It provides leaderboard data to the client app, enabling users to view 
the rankings of pets based on health and happiness.

# Database 

If a backend server is used, it may rely on a database to store and manage user and leaderboard data.

#### Interfaces:
- Server-Database Interface: The backend server communicates with the database to perform operations such as storing user profiles, updating pet metrics, and retrieving leaderboard data.

# User's Smartphone Sensors

The user's smartphone is equipped with sensors such as GPS and accelerometers. These sensors are used to track the user's physical movement and activity level.

#### Interfaces:
- Activity Tracking Interface: The client app accesses sensor data to monitor the user's physical movement and translate it into activity metrics that impact the virtual pet's well-being.
