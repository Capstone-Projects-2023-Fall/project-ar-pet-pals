using { calculateTimeDifferenceInMinutes } from "./yourUtilityFile.ts";
using { Pets } from "./controllers.pets.ts";
using Unity.Notifications.Android;
using System;
using System.Collections.Generic; // Added this import for List

public static class NotificationScheduler
{
    private static void SendNotification(string username, string message)
    {
        var notification = new AndroidNotification();
        notification.Title = "Attention!";
        notification.Text = message;

        // calculate next notification time based on health score
        notification.FireTime = DateTime.Now;

        // send notification
        AndroidNotificationCenter.SendNotification(notification, "channel_id");
    }

    public static void ScheduleNotification(int healthScore)
    {
        // calculate next notification time based on health score
        DateTime nextNotificationTime = DateTime.Now.Add(CalculateNotificationInterval(healthScore));

        // send notification
        SendNotification("username_placeholder", "Your account is at risk of termination. Log in to feed your pet!");
    }

    private static TimeSpan CalculateNotificationInterval(int healthScore)
    {
        // linear decay with caps for higher and lower health scores
        int maxInterval = 5;  // max allowed interval
        int minInterval = 1;  // min allowed interval
        int capThresholdHigh = 7; // health score above which the interval is capped
        int capThresholdLow = 3;  // health score below which the interval is capped

        // linear decay formula
        int calculatedInterval = Math.Max(minInterval, maxInterval - healthScore);

        // cap interval for higher health scores
        if (healthScore > capThresholdHigh)
        {
            calculatedInterval = maxInterval;
        }

        // cap interval for lower health scores
        if (healthScore <= capThresholdLow)
        {
            calculatedInterval = Math.Min(calculatedInterval, 3);
        }

        return TimeSpan.FromHours(calculatedInterval);
    }

   
/*In this modified code, the CheckAccountActivityAndSendNotifications method now accepts
 a list of users (List<User> users). This list of users should be passed from C# application
  when calling this method. The method then iterates over the users, retrieves the associated pets, 
  checks for low account activity, and schedules notifications accordingly.*/
    public static void CheckAccountActivityAndSendNotifications(List<User> users)
    {
        foreach (var user in users)
        {
            // Retrieve the pet for the user
            var pet = Pets.FindOne(user.Id.ToString());

            if (pet == null)
            {
                continue; // Skip users without pets
            }

            var minutesSinceLastActivity = CalculateTimeDifferenceInMinutes(pet.status.lastActivity);

            // Check if the user has low/no account activity (30 days threshold)
            var thirtyDaysInMinutes = 30 * 24 * 60; // 30 days * 24 hours/day * 60 minutes/hour
            if (minutesSinceLastActivity > thirtyDaysInMinutes)
            {
                // Schedule a notification instead of sending it directly
                ScheduleNotification(pet.status.health);
            }
        }
    }
}
/*async function checkAccountActivityAndSendNotifications() {
  const users = await Users.find({}).toArray(); // Retrieve all users

  for (const user of users) {
    const pet = await Pets.findOne({ user_id: user._id.toString() });

    if (!pet) {
      continue; // Skip users without pets
    }

    const minutesSinceLastActivity = calculateTimeDifferenceInMinutes(pet.status.lastActivity);

    // Check if the user has low/no account activity (30 days threshold)
    const thirtyDaysInMinutes = 30 * 24 * 60; // 30 days * 24 hours/day * 60 minutes/hour
    if (minutesSinceLastActivity > thirtyDaysInMinutes) {
      // Send a warning notification
      sendNotification(user.username, "Warning: Your account is at risk of termination. Log in to feed your pet!");
    }
  }
}

// Pseudo-code for scheduling the periodic task
setInterval(async () => {
  await checkAccountActivityAndSendNotifications();
}, /* Set an appropriate interval in milliseconds */ //);


//}



  /*private void SendNotification(string username, string message)
    {
        // Implement your notification sending logic here
        // You may use AndroidNotificationCenter.SendNotification with a new channel for account activity warnings
        // Retrieve the pet for the user (assuming you have a Pets class)
var pet = Pets.GetPetForUser(userId);

// Calculate minutes since last activity (replace this with your actual utility function)
var minutesSinceLastActivity = CalculateTimeDifferenceInMinutes(pet.LastActivity);

// 30 days in minutes
var thirtyDaysInMinutes = 30 * 24 * 60;

if (minutesSinceLastActivity > thirtyDaysInMinutes)
{
    SendNotification(user.Username, "Warning: Your account is at risk of termination. Log in to feed your pet!");
}

    }*/

