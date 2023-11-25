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
}
