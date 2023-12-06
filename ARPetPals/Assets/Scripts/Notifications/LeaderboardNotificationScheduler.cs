using System;
using System.Collections.Generic;
using System.Timers;
using System.Threading.Tasks;
using Unity.Notifications.Android;

public class LeaderboardNotificationScheduler
{
    private const int NotificationIntervalMilliseconds = 6 * 24 * 60 * 60 * 1000; // Every 6 days in milliseconds
    private Timer timer;

    public LeaderboardNotificationScheduler()
    {
        timer = new Timer(NotificationIntervalMilliseconds);
        timer.Elapsed += OnTimerElapsed;
    }

    public void Start()
    {
        timer.Start();
        OnTimerElapsed(null, null); // Send notifications immediately on start
    }

    private async void OnTimerElapsed(object sender, ElapsedEventArgs e)
    {
        try
        {
          // Get the current top 5 users
            List<UserScore> top5Users = await GetTop5Users();

            // Send notifications to the top 5 users
            SendTop5Notifications(top5Users);

            // Send weekly leaderboard notification to all users on Sundays
            ScheduleWeeklyLeaderboardNotificationForAll();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error scheduling notifications: {ex.Message}");
        }
    }

 private List<UserScore> GetTop5Users()
    {
        List<UserScore> top5Users = new List<UserScore>();

        // Call the GetTop5Users function from APIService
        apiService.GetLeaderBoardList(response =>
        {
            APIServiceResponse.GetLeaderBoardResponse responseData = JsonUtility.FromJson<APIServiceResponse.GetLeaderBoardResponse>(response);
            List<APIServiceResponse.LeaderBoardInfo> boardList = responseData.leaderboardList;

            // Sort the boardList by score in descending order
            boardList.Sort((a, b) => b.score.CompareTo(a.score));

            int index = 0;
            foreach (var boardInfo in boardList)
            {
                UserScore userScore = new UserScore
                {
                    Username = boardInfo.username,
                    Score = boardInfo.score
                };

                top5Users.Add(userScore);

                index++;

                if (index >= 5) // Stop after getting the top 5 users
                    break;
            }
        });

        return top5Users;
    }

    private void SendTop5Notifications(List<UserScore> top5Users)
    {
        foreach (var user in top5Users)
        {
            // Implement logic to send notifications to each user
            // Example:
            // SendNotification(user.Username, $"Congrats, {user.Username}! You are in the top 5 this week. Open the app to celebrate with your pet!");
            ScheduleWeeklyLeaderboardNotification(user.Username);
        }
    }
   private void ScheduleWeeklyLeaderboardNotification(string username)
    {
        var notification = new AndroidNotification();
        notification.Title = "Weekly Leaderboard!";
        notification.Text = $"Congrats, {username}! You are in the top 5 this week. Open the app to celebrate with your pet!";

        // Calculate the next Sunday at midnight
        notification.FireTime = CalculateNextSundayMidnight();

        // Send the notification
        AndroidNotificationCenter.SendNotification(notification, "channel_id");
    }

    private void ScheduleWeeklyLeaderboardNotificationForAll()
    {
        var notification = new AndroidNotification();
        notification.Title = "Weekly Leaderboard!";
        notification.Text = "The weekly leaderboard is out! Check it out.";

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