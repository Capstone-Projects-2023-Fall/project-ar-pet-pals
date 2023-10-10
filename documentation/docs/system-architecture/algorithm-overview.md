---
sidebar_position: 4
---

Algorithm Overview
=============================

Algorithms to highlight
- Object Recognition (From seeing fruit to pet getting nutrition)
- Step Integration (How steps impact pet health)
- Pet Health (How different foods affect it, how health degrades over time)


## Augmented Reality (AR)
The project will apply **Google's AR Foundation** to implement a virtual pet into the app, allowing the pet to be displayed to the user. The pet will interact with real-life objects using object recognition (See Object Recognition), and it will display various animations based on the type of object it is interacting with. For instance, if it recognizes a backpack in the room, it will get in and out of the backpack in a fun and animated way.

## Object Recognition (OR)
The **AR Foundation** package already has OR built into the library that allows real-time environment tracking and plane detection (for placing the pet in the real world say on top of a desk or bed). With this library, AR Pet Pals will detect whether or not the recognized objects are food or not ( see Food Detection section), and depending on how healthy the food is or isn't it will affect the pet's health. ( see Pet Health)

## Step Integration
Step integration involves using the user's mobile device's built-in sensor to determine the number of steps that the user has taken. When a user wants to start a physical activity, she will click a button that will start the step recording process, and depending on how many steps the user took it will boost the pet's health. For instance, if a user is sitting at her desk for the whole day, and decides she needs some exercise and only walks 300 steps it will improve the pet's health much less than if she were to walk a mile.

## Food detection
Food detection means that once Object Recognition(OR) determines that the object in the video or image is food, the application will attempt to identify the type of food it is and employ a heuristic function to predict its nutritional value. If it is deemed to be a nourishing meal, then the pet's health will improve. If it isn't, then its health will decline (See Pet Health).

## Pet Health
The user's pet will have a health bar which may or may not be displayed to the user depending on the user's preferences. Said health bar will function in a very similar way that health bars in video games work, and it will be on a scale from 0-100% where 100% is the most healthy the pet can possibly be to 0% where it will be extremely unhealthy and malnourished. To improve a pet's health a user must either record their steps taken in a walk ( See Step Integration) or show healthy-looking food to the camera so that the app can recognize whether that food is healthy looking or not, in which case it will enhance the pet's health.