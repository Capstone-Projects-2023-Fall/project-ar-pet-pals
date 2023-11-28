using { calculateTimeDifferenceInMinutes } from "./yourUtilityFile.ts";
using { Pets } from "./controllers.pets.ts";
using Unity.Notifications.Android;
using System;

public static class NotificationScheduler
{
  private void ScheduleNotification(int healthScore)
    {
        var notification = new AndroidNotification();
        notification.Title = "Attention!";
        notification.Text = "Come to check on your pet!!!";

        //calculate next notification time based on health score
        notification.FireTime = System.DateTime.Now.Add(CalculateNotificationInterval(healthScore));

        //send notification
        AndroidNotificationCenter.SendNotification(notification, "channel_id");
    }

    private TimeSpan CalculateNotificationInterval(int healthScore)
{
    
    //linear decay with caps for higher and lower health scores
    int maxInterval = 5;  //max allowed interval
    int minInterval = 1;  //min allowed interval
    int capThresholdHigh = 7; //health score above which the interval is capped
    int capThresholdLow = 3;  //health score below which the interval is capped

    //linear decay formula
    int calculatedInterval = Mathf.Max(minInterval, maxInterval - healthScore);

    //cap interval for higher health scores
    if (healthScore > capThresholdHigh)
    {
        calculatedInterval = maxInterval;
    }

    //cap interval for lower health scores
    if (healthScore <= capThresholdLow)
    {
        calculatedInterval = Mathf.Min(calculatedInterval, 3);
    }

    return TimeSpan.FromHours(calculatedInterval);
}
  // Pseudo-code for checking account activity and sending notifications
async function checkAccountActivityAndSendNotifications() {
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
}, /* Set an appropriate interval in milliseconds */);

}
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

