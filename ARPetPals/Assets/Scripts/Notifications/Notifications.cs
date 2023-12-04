namespace ARPetPals.Notifications
{
    public static class NotificationScheduler
    {
        private static HashSet<string> initialNotificationFlags = new HashSet<string>();

        public static void ScheduleInitialNotification(string username)
        {
            //implement logic to schedule initial notification here
            // ...
            initialNotificationFlags.Add(username);
        }

        public static bool shouldSendInitialNotification(string username)
        {
            //check if user has already received initial notification
            return !initialNotificationFlags.Contains(username);
        }
    }
}
