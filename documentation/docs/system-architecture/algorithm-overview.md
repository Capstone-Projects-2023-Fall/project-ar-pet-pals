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
Augmented reality is a technology that displays virtual objects on top of a camera's view of the real world. Some examples of AR can be found in some highly technologically advanced cars, which have support for displaying arrows and other driving-related signs on the windshield. A company called [WayRay](https://wayray.com/#what-we-do) does exactly that.   

In our project, we will use **Google's AR Foundation** to implement our virtual pet into the app, which will allow the pet to be displayed to the user. The pet will be able to interact with real-life objects, done with object recognition ( See Object Recognition), and it will display different animations depending on the type of object it is interacting with. For instance, if it recognizes a backpack in the room, it will get in and out of the backpack in a fun and animated way.

## Object Recognition (OR)
Object recognition is a computer vision technique for identifying objects in images or videos, which is done through machine learning and deep learning algorithms. The first step of object recognition is object detection, that is being able to map out a section of the image or video where an object is detected. Once that section of the image is highlighted, it will continue to the second step of object recognition, object classification. Object classification, as the name describes, classifies what kind of object that section of the image/video is. For instance, is it a pizza or a water bottle?

For our integration of OR we are pretty fortunate that **AR Foundation** already has OR built into the library that allows real-time environment tracking and plane detection (for placing the pet in the real world say on top of a desk or bed). With this library, we will detect whether or not the recognized objects are food or not ( see Food Detection section), and depending on how healthy the food is or isn't it will affect the pet's health. ( see Pet Health)

## Step Integration
Step integration simply involves using the user's mobile device's built-in sensor to determine the number of steps that the user has taken. When a user wants to start a physical activity, she will click a button that will start the step recording process, and depending on how many steps the user took it will boost the pet's health. For instance, if a user is sitting at her desk for the whole day, and decides she needs some exercise and only walks 300 steps it will improve the pet's health much less than if she were to walk a mile.

## Food detection
Food detection, in our case, just means that once OR determines that the object in the video or image is food, the application will try to sort out what type of food it is, and it will have a heuristic function that will predict how nutritious that food is. If it is found to be a nourishing meal, then the pet's health will be boosted. If it isn't, then it's health will decline ( See Pet Health)

## Pet Health
The user's pet will have a health bar which may or may not be displayed to the user depending on the user's preferences. Said health bar will function in a very similar way that health bars in video games work, and it will be on a scale from 0-100% where 100% is the most healthy the pet can possibly be to 0% where it will be extremely unhealthy and malnourished. To improve a pet's health a user must either record their steps taken in a walk ( See Step Integration) or show healthy-looking food to the camera so that the app can recognize whether that food is healthy looking or not, in which case it will enhance the pet's health.