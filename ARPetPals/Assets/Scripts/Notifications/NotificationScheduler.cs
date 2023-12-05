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
        notification.FireTime = DateTime.Now;
        AndroidNotificationCenter.SendNotification(notification, "channel_id");
    }

    public static void ScheduleNotification(int healthScore)
    {
        DateTime nextNotificationTime = DateTime.Now.Add(CalculateNotificationInterval(healthScore));
        SendNotification("username_placeholder", "Your account is at risk of termination. Log in to feed your pet!");
    }

    public static void CheckAccountActivityAndSendNotifications(List<User> users)
    {
        foreach (var user in users)
        {
            var pet = Pets.FindOne(user.Id.ToString());

            if (pet == null)
            {
                continue; // Skip users without pets
            }

            var minutesSinceLastActivity = CalculateTimeDifferenceInMinutes(pet.status.lastActivity);

            var thirtyDaysInMinutes = 30 * 24 * 60;
            if (minutesSinceLastActivity > thirtyDaysInMinutes)
            {
                // Schedule a notification instead of sending it directly
                ScheduleNotification(pet.status.health);
            }
        }
    }

    private static TimeSpan CalculateNotificationInterval(int healthScore)
    {
        int maxInterval = 5;
        int minInterval = 1;
        int capThresholdHigh = 7;
        int capThresholdLow = 3;

        int calculatedInterval = Math.Max(minInterval, maxInterval - healthScore);

        if (healthScore > capThresholdHigh)
        {
            calculatedInterval = maxInterval;
        }

        if (healthScore <= capThresholdLow)
        {
            calculatedInterval = Math.Min(calculatedInterval, 3);
        }

        return TimeSpan.FromHours(calculatedInterval);
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

