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
    // Adjust this formula based on your specific requirements
    // Linear decay with caps for higher and lower health scores
    int maxInterval = 5;  // Maximum allowed interval
    int minInterval = 1;  // Minimum allowed interval
    int capThresholdHigh = 7; // Health score above which the interval is capped
    int capThresholdLow = 3;  // Health score below which the interval is capped

    // Linear decay formula
    int calculatedInterval = Mathf.Max(minInterval, maxInterval - healthScore);

    // Cap the interval for higher health scores
    if (healthScore > capThresholdHigh)
    {
        calculatedInterval = maxInterval;
    }

    // Cap the interval for lower health scores
    if (healthScore <= capThresholdLow)
    {
        calculatedInterval = Mathf.Min(calculatedInterval, 3);
    }

    return TimeSpan.FromHours(calculatedInterval);
}
}
