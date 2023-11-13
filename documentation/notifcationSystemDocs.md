## MobileNotification.cs
This script orchestrates the setup and sending of notifications. The primary changes include the introduction of dynamic scheduling based on health score and modifications to prevent repetitive notifications.

## Changes Made:
# Dynamic Scheduling:

csharp
Copy code
// In MobileNotification.cs
// ...
var healthScore = HealthScoreManager.GetHealthScore(); // Assume the existence of GetHealthScore method
notification.FireTime = System.DateTime.Now.AddSeconds(healthScore * 60); // Dynamic scheduling based on health score
The notification's FireTime is now dynamically calculated based on the health score retrieved from HealthScoreManager. This ensures that notifications are scheduled dynamically according to the user's health score.

# Preventing Repetitive Notifications:

csharp
Copy code
// In MobileNotification.cs
// ...
const string notificationKey = "health_notification";
if (AndroidNotificationCenter.CheckScheduledNotificationStatus(notificationKey) == NotificationStatus.Scheduled)
{
    AndroidNotificationCenter.CancelAllNotifications();
}
var id = AndroidNotificationCenter.SendNotification(notification, notificationKey);
To prevent the function from sending notifications every 15 seconds, a unique key (notificationKey) is used to identify and cancel existing notifications before rescheduling.

# User Inactivity Monitoring:

csharp
Copy code
// In MobileNotification.cs
// ...
var lastLoginDate = UserActivityManager.GetLastLoginDate(); // Assume the existence of GetLastLoginDate method
var daysSinceLastLogin = (System.DateTime.Now - lastLoginDate).Days;

if (daysSinceLastLogin >= 7 && daysSinceLastLogin < 30)
{
    SendReminderNotification("Your pet's health is low. Feed your pet to keep it healthy!");
}
else if (daysSinceLastLogin >= 30 && daysSinceLastLogin < 37)
{
    SendCriticalNotification("Your pet is dying! Log in within 7 days to save your pet!");
}
else if (daysSinceLastLogin >= 37)
{
    SendFinalWarningNotification("Your account will be terminated in 24 hours unless you log in and feed your pet!");
}
A new section is added to monitor user activity. Depending on the duration of inactivity, different notifications are sent to remind the user about their pet's well-being.

# Notifications.cs
This script manages the creation and display of notifications.

## Changes Made:
No specific changes were made, as this file is likely responsible for encapsulating the Android notification creation logic, and it's being utilized by MobileNotification.cs.

# HealthScoreManager.cs
This script manages the health score and exposes methods to retrieve it.

## Changes Made:
No specific changes were described in the provided context, but it's assumed that there's a method (GetHealthScore) to retrieve the user's health score dynamically.

# NotificationsScheduler.cs
This script handles the scheduling and cancellation of notifications.

## Changes Made:
No specific changes were described, but it's assumed that this file is integral to the dynamic scheduling implementation, working in conjunction with MobileNotification.cs to handle notification scheduling based on health score.

# SignUpController.cs
This script likely manages user sign-up and initialization processes.

## Changes Made:
No specific changes were described in the provided context, but it's assumed that there are modifications to prevent the initialization function from sending notifications every 15 seconds.

## Future Plans:
Personalized Notifications:
In future iterations, the goal is to introduce personalized notifications based on user data, such as accessing the device's clock for sending morning messages or setting up birthday notifications.

## User Inactivity Monitoring:
A new feature is proposed to monitor user activity and send notifications based on the duration of inactivity. The system will automatically decrease the pet's health over time and, in extreme cases, may lead to account termination.

## Proposed Approach:
User Activity Monitoring:

Implement a method in UserActivityManager.cs to retrieve the user's last login date.
Introduce conditional checks in MobileNotification.cs to monitor the duration of user inactivity.
Notification Types:

Create new notification types for different levels of user inactivity, such as reminders, critical alerts, and termination warnings.
Customize notification content based on the severity of the situation.
Account Termination:

Implement a mechanism to automatically decrease the pet's health over time.
Consider account termination if the user does not log in within a specified period.
Conclusion:
The proposed user inactivity monitoring feature adds a layer of engagement by encouraging users to log in and attend to their virtual pets. Notifications are strategically designed to escalate in urgency, ensuring users receive timely reminders about their pet's well-being. This feature not only enhances the app's functionality but also encourages sustained user engagement.
