import { leaderboardList } from "./controllers.leaderboard.ts";

// Pseudo-code for a function that sends notifications to the top 5 users
function sendTop5Notifications(top5Users: { username: string; score: number }[]) {
  for (const user of top5Users) {
    // Use a notification library or service to send a notification to each user
    sendNotification(user.username, "Congrats, you are in the top 5 this week! Open the app to celebrate with your pet!");
  }
}

// Pseudo-code for scheduling notifications (using setInterval)
setInterval(async () => {
  const { top5Users } = await leaderboardList(); // Get the current top 5 users
  sendTop5Notifications(top5Users);
}, /* Set an appropriate interval in milliseconds, e.g., one week */);

// Run the Deno server (controllers.leaderboard.ts)
//deno run --allow-net controllers/controllers.leaderboard.ts

// Run the notification scheduler (schedulers/notificationScheduler.ts)
//deno run --allow-net --allow-read schedulers/notificationScheduler.ts
