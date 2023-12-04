using System.Collections;
using System.Collections.Generic;
using Unity.Notifications.Android;
using UnityEngine;

public class MobileNotification : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        // Remove notification that have already been displayed
        AndroidNotificationCenter.CancelAllDisplayedNotifications();


        // Setting up Andriod notification channel
        var channel = new AndroidNotificationChannel()
        {
            Id = "channel_id",
            Name = "Notification Channel",
            Importance = Importance.Default,
            Description = "Reminder notifications",
        };
        AndroidNotificationCenter.RegisterNotificationChannel(channel);

        // Set up the notification message and parameters
        var notification = new AndroidNotification();
        notification.Title = "Attention!";
        notification.Text = "Come to check on your pet!!!";
        notification.FireTime = System.DateTime.Now.AddSeconds(15);

        // Send the notification
        var id = AndroidNotificationCenter.SendNotification(notification, "channel_id");

        // If the script is run and a message is already schedule, cancel it and re-schedule another message
        if (AndroidNotificationCenter.CheckScheduledNotificationStatus(id) == NotificationStatus.Scheduled)
        {
            AndroidNotificationCenter.CancelAllNotifications();
            AndroidNotificationCenter.SendNotification(notification, "channel_id");
        }


    }
}
