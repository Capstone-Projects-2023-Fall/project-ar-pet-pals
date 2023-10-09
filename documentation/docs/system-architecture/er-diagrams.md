---
sidebar_position: 6
---

ER Diagrams
=============================

## ER Diagram
![ER Diagram](./img/database_design.jpg)



## Table Design
### User
- UserID: Unique identifier assigned to each user of the app.
- Username: Represents the user’s chosen display name.
- Password: Encrypted string used for authenticating the user during login.
- Date_joined: Timestamp noting when the user joined or created an account.
- leaderboard_ranking: The user’s current ranking on the leaderboard.
- badge: String noting any of the user's earned achievements or medals.


### PetPal
- PetID: Unique identifier assigned to each virtual pet in the application.
- UserID (fk): Foreign key referencing the User table, denoting the owner of the pet.
- Pet_Name: Represents the name of the virtual pet.


### PetHealthInfo
- PetID (pk): Unique identifier referencing the specific pet whose health information is being recorded.
- petHealth_hungry: String indicating the hunger level of the pet.
- petHealth_bored: String indicating the pet's boredom status.
- last_activity: Timestamp of the most recent activity performed by or with the virtual pet.
- last_recorded_food: String noting the most recent food eaten by the pet.


### Task
- task_type (pk): Represents the unique type of task, such as walking or eating healthy.
- UserID (fk): Foreign key that references the User table, denoting the user who performed the task.
- daily_progress: Integer describing the user's daily progress status for completing the corresponding task.


### PhysicalActivity
- task_type (pk): Represents the unique type of physical activity task, such as walking or running.
- steps_taken: Integer noting the number of steps taken during that particular physical activity.
- calories_burned: Integer representing the number of calories burned during the activity.
- last_activity: Timestamp of the user's most recent physical activity.
- recurrence_timer: Timestamp indicating the next scheduled time for a physical activity task.
- record_breaker: Integer indicating whether the user has surpassed their previous task-related records.


### NutritionInfo
- task_type (pk): Represents the unique type of nutrition-related task, such as eating a healthy snack.
- last_recorded_food: String noting the most recent food recognized and recorded by the app.
- count_healthy: Integer noting the number of times healthy food items have been recorded.
- record_breaker: Integer indicating whether the user has surpassed their previous healthy eating records.
- recurrence_timer: Timestamp indicating the next scheduled time for the nutrition-related task.
- count_not_healthy: Integer representing the number of times non-healthy food items have been eaten.
