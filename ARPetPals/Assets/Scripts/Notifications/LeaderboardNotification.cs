
using Unity.Notifications.Android;

public static class LeaderboardNotification
{
    public static void ScheduleWeeklyLeaderboardNotification()
    {
        var notification = new AndroidNotification();
        notification.Title = "Weekly Leaderboard!";
        notification.Text = "The weekly leaderboard is out. Open the app and see how you compare!";

        // Calculate the next Sunday at midnight
        notification.FireTime = CalculateNextSundayMidnight();

        // Send the notification
        AndroidNotificationCenter.SendNotification(notification, "channel_id");
    }

    private static System.DateTime CalculateNextSundayMidnight()
    {
        System.DateTime now = System.DateTime.Now;
        int daysUntilNextSunday = ((int)DayOfWeek.Sunday - (int)now.DayOfWeek + 7) % 7;
        System.DateTime nextSundayMidnight = now.AddDays(daysUntilNextSunday + 1).Date;
        return nextSundayMidnight;
    }
}
