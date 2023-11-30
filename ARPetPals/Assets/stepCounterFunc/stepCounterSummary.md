## User Step Tracking:

Users can log their daily step counts, which are tracked and stored.
Daily step counts are associated with each user.

## Daily Step Goal Setting and Updating:

Users can set a daily step goal during the sign-up process.
Daily step goals can be updated by users.

## Total Step Count Tracking:

Total step counts are recorded and updated daily for each user.

## Weekly Step Count Calculation:

Weekly step counts are calculated based on the steps logged in the past seven days.

## Health Score Calculation:

Health scores are calculated based on the total step counts, with every 1000 steps contributing to the score.

## Average Health Score Calculation:

Average health scores are calculated based on the steps and health scores recorded in the past seven days.

## Update Step Goal Endpoint:

An API endpoint (/api/user/step-goal) allows users to update their daily step goals.

## Check Step Goal Completion:

A function (checkStepGoal) checks whether users have met their daily step goals.
## Step Count Leaderboard (Planned):

A leaderboard feature is planned to showcase top users based on their weekly health scores.
The leaderboard will be published every Sunday at 12 am.

## Modular Code Structure:

Code is organized into separate files, including controller.steps.ts for step-related logic.
