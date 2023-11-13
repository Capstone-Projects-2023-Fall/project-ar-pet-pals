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
//check if initial notification already been sent
if (!PlayerPrefs.HasKey("InitialNotificationSent"))
{}
        // Set up the notification message and parameters
        var notification = new AndroidNotification();
        notification.Title = "Attention!";
        notification.Text = "Come to check on your pet!!!";
        notification.FireTime = System.DateTime.Now.AddSeconds(15);

        // Send the notification
        var id = AndroidNotificationCenter.SendNotification(notification, "channel_id");

//set flag to indicate that initial notification has been sent
    PlayerPrefs.SetInt("InitialNotificationSent", 1);
    PlayerPrefs.Save();

        // If the script is run and a message is already schedule, cancel it and re-schedule another message
        if (AndroidNotificationCenter.CheckScheduledNotificationStatus(id) == NotificationStatus.Scheduled)
        {
            AndroidNotificationCenter.CancelAllNotifications();
            AndroidNotificationCenter.SendNotification(notification, "channel_id");
        }
    }
 string recognizedFood = GetRecognizedFood();

     StartCoroutine(HealthScoreManager.GetHealthScore(recognizedFood, (healthScore) =>
        {
    //fetches health score for a recognized food and then the callback function passed to it 
 //schedules notification with the health score u got
 //callback function (healthScore) => { ScheduleNotification(healthScore); } invoked after
 //health score is received, takes health score as a param then calls ScheduleNotification
      NotificationScheduler.ScheduleNotification(healthScore);
        }));
    }
        //determine how to schedule notification based on health score

//when u run your Unity it will communicate with Deno server to get
 //health score based on the recognized food.
    }

    // Update is called once per frame
    void Update()
    {
        
    }

