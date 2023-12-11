using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using TMPro;
using ARPetPals;

public class usecase4test
{
    private SettingMenuController settingMenuController;
    private GameObject leaderBoardPage;
    private List<TMP_Text> nameTexts;
    private List<TMP_Text> scoreTexts;

    [SetUp]
    public void SetUp()
    {
        // Instantiate the SettingMenuController
        settingMenuController = new GameObject().AddComponent<SettingMenuController>();

        // Mock LeaderBoardPage and Text Components
        leaderBoardPage = new GameObject("LeaderBoardPage");
        settingMenuController.LeaderBoardPage = leaderBoardPage;

        // Initialize and assign mock Text components for names and scores
        nameTexts = new List<TMP_Text>();
        scoreTexts = new List<TMP_Text>();
        for (int i = 1; i <= 5; i++)
        {
            var nameText = new GameObject($"Name{i}").AddComponent<TMP_Text>();
            var scoreText = new GameObject($"Score{i}").AddComponent<TMP_Text>();

            nameTexts.Add(nameText);
            scoreTexts.Add(scoreText);
        }
        settingMenuController.name1 = nameTexts[0];
        settingMenuController.name2 = nameTexts[1];
        settingMenuController.name3 = nameTexts[2];
        settingMenuController.name4 = nameTexts[3];
        settingMenuController.name5 = nameTexts[4];
        settingMenuController.score1 = scoreTexts[0];
        settingMenuController.score2 = scoreTexts[1];
        settingMenuController.score3 = scoreTexts[2];
        settingMenuController.score4 = scoreTexts[3];
        settingMenuController.score5 = scoreTexts[4];
    }

    // A Test behaves as an ordinary method
    [Test]
    public void usecase4testSimplePasses()
    {
        // Use the Assert class to test conditions
    }

    [Test]
    public void LeaderBoardButtonClicked_UpdatesLeaderBoardDisplay()
    {
        // Arrange
        // Mock leaderboard data (normally retrieved from API)
        var mockLeaderboardData = new List<APIServiceResponse.LeaderBoardInfo>
        {
            new APIServiceResponse.LeaderBoardInfo { username = "User1", score = 100 },
            new APIServiceResponse.LeaderBoardInfo { username = "User2", score = 90 },
        };

        // Act
        // Simulate LeaderBoardButtonClicked() with mock data
        settingMenuController.LeaderBoardButtonClicked();

        // Assert
        Assert.AreEqual("User1", settingMenuController.name1.text, "Name1 should display User1");
        Assert.AreEqual("100", settingMenuController.score1.text, "Score1 should display 100");
        
    }

    // A UnityTest behaves like a coroutine in Play Mode. In Edit Mode you can use
    // `yield return null;` to skip a frame.
    [UnityTest]
    public IEnumerator usecase4testWithEnumeratorPasses()
    {
        // Use the Assert class to test conditions.
        // Use yield to skip a frame.
        yield return null;
    }
}
