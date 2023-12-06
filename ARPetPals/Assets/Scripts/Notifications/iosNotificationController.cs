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
    public IEnumerator RequestAuthorization()
    {
        using var req = new AuthorizationRequest(AuthorizationOption.Alert | AuthorizationOption.Badge, true);
        while(!req.IsFinished)
        {
            yield return null;
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
    