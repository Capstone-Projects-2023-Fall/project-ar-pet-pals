using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;
#if UNITY_IOS
using Unity.Notifications.iOS;
#endif


public class IosNotificationController : MonoBehaviour
{
    #if UNITY_IOS
    IEnumerator RequestAuthorization()
{
    var authorizationOption = AuthorizationOption.Alert | AuthorizationOption.Badge;
    using (var req = new AuthorizationRequest(authorizationOption, true))
    {
        while (!req.IsFinished)
        {
            yield return null;
        };

        string res = "\n RequestAuthorization:";
        res += "\n finished: " + req.IsFinished;
        res += "\n granted :  " + req.Granted;
        res += "\n error:  " + req.Error;
        res += "\n deviceToken:  " + req.DeviceToken;
        Debug.Log(res);
    }
}
    

    public void SendNotification(string title, string body, string subtitle, int FireTimeInSeconds)
    {
        var timeTrigger = new iOSNotificationTimeIntervalTrigger()
        {
            TimeInterval = new TimeSpan(0, 0, FireTimeInSeconds),
            Repeats = false
        };

        var notification = new iOSNotification()
        {
            Identifier = "generic_notification",
            Title = title,
            Body = body,
            Subtitle = subtitle,
            ShowInForeground = true,
            ForegroundPresentationOption = (PresentationOption.Alert | PresentationOption.Sound),
            CategoryIdentifier = "default_category",
            ThreadIdentifier = "thread1",
            timeTrigger = timeTrigger

        };

        iOSNotificationCenter.ScheduleNotification(notification);
    }
#endif
    }
    
