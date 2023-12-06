using System.Collections;
using System.Collections.Generic;
using UnityEngine;
#if UNITY_ANDROID
using Unity.Notifications.Android;
using UnityEngine.Android;
#endif

public class AndroidNotificationsController : MonoBehaviour
{
    #if UNITY_ANDROID
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
            //creating channel for notiifcation
            Id = "generic_reminder_notification",
            Name = "Generic Reminder Notification",
            Importance = Importance.Default,
            Description = "Reminder notification"
    };
    AndroidNotificationCenter.RegisterNotificationChannel(channel);
    }
    public void SendNotification(string title, string text, int FireTimeInSeconds)
    {
        //creating new notification
        var notification = new AndroidNotification();
        notification.Title = title;
        notification.Text = text;
        notification.FireTime = System.DateTime.Now.AddSeconds(FireTimeInSeconds);

//send notification
//if script is run and a notification is already scheduled, cancel it and resend another message
       var Identifier = AndroidNotificationCenter.SendNotification(notification, "generic_reminder_notification");
       if(AndroidNotificationCenter.CheckScheduledNotificationStatus(Identifier) == NotificationStatus.Scheduled)
       {
        AndroidNotificationCenter.CancelAllNotifications();
        AndroidNotificationCenter.SendNotification(notification, "generic_reminder_notification");
       }
    }
    #endif 
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
    */