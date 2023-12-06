using System.Collections;
using System.Collections.Generic;
using Unity.Notifications.Android;
using UnityEngine;
using UnityEngine.Andriod;

public class MobileNotification : MonoBehaviour
{
    public void RequestAuthorization()
    {
        if(!Permission.HasUserAuthorizedPermission("android.permission.POST_NOTIFICATIONS"))
        {
            Permission.RequestUserPermission("android.permission.POST_NOTIFICATIONS");
        }
    }
    public void RegisterNotificationChannel()
    {
         var channel = new AndroidNotificationChannel()
        {
            Id = "generic_reminder_notification",
            Name = "Generic Reminder Notification",
            Importance = Importance.Default,
            Description = "Reminder notification"
    };
    AndroidNotificationCenter.RegisterNotificationChannel(channel);
    }
    public void SendNotification(string title, string text, int FireTimeInSeconds)
    {
        var notification = new AndroidNotification();
        notification.Title = title;
        notification.Text = text;
        notification.FireTime = System.DateTime.Now.AddSeconds(FireTimeInSeconds);

        AndroidNotificationCenter.SendNotification(notification, "generic_reminder_notification")
    }
}
    /* Start is called before the first frame update
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

        //register a new notification channel for birthday notifications
        var birthdayChannel = new AndroidNotificationChannel()
        {
            Id = "birthday_channel_id",
            Name = "Birthday Notification Channel",
            Importance = Importance.Default,
            Description = "Birthday notifications",
        };
        AndroidNotificationCenter.RegisterNotificationChannel(birthdayChannel);
        
    }
    

/

    }

    // Update is called once per frame
    void Update()
{

}

