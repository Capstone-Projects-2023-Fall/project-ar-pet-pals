/*using Unity.Notifications.Android;

public static class BirthdayNotificationManager
{
    public static void ScheduleBirthdayNotification(string userName, System.DateTime birthday)
    {
        // Calculate the time until the next birthday
        System.DateTime nextBirthday = new System.DateTime(System.DateTime.Now.Year, birthday.Month, birthday.Day);
        if (nextBirthday < System.DateTime.Now)
        {
            nextBirthday = nextBirthday.AddYears(1);
        }
        var timeUntilBirthday = nextBirthday - System.DateTime.Now;

        // Set up the birthday notification
        var birthdayNotification = new AndroidNotification();
        birthdayNotification.Title = "Happy Birthday, " + userName + "!";
        birthdayNotification.Text = " Open this notification to celebrate with your pet!";
        birthdayNotification.FireTime = System.DateTime.Now.Add(timeUntilBirthday);

        // Send the notification
        var id = AndroidNotificationCenter.SendNotification(birthdayNotification, "birthday_channel_id");
    }
}
*/