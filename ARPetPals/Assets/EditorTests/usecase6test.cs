using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using TMPro;
using UnityEngine.SceneManagement;

public class usecase6test
{
    private LogInController logInController;
    private TMP_InputField userNameField;
    private TMP_InputField passwordField;
    private TMP_Text editText;
    private GameObject userError;
    private GameObject passwordError;
    private SettingMenuController settingMenuController;

    [SetUp]
    public void SetUp()
    {
        // Instantiate the LogInController and relevant UI elements
        logInController = new GameObject().AddComponent<LogInController>();

        // Mock TMP input fields, text components, and error indicators
        userNameField = new GameObject().AddComponent<TMP_InputField>();
        passwordField = new GameObject().AddComponent<TMP_InputField>();
        editText = new GameObject().AddComponent<TMP_Text>();
        userError = new GameObject("UserError");
        passwordError = new GameObject("PasswordError");

        // Assign mock components to the LogInController
        logInController.userNameField = userNameField;
        logInController.passwordField = passwordField;
        logInController.editText = editText;
        logInController.userError = userError;
        logInController.passwordError = passwordError;

        // Instantiate the SettingMenuController
        settingMenuController = new GameObject().AddComponent<SettingMenuController>();

        // Setup PlayerPrefs for testing
        PlayerPrefs.SetString("TestKey", "TestValue");
    }

    // A Test behaves as an ordinary method
    [Test]
    public void usecase6testSimplePasses()
    {
        // Use the Assert class to test conditions
    }

    [Test]
    public void LoginButtonClicked_WithEmptyUsername_ShowsUsernameError()
    {
        // Arrange
        logInController.userNameField.text = "";
        logInController.passwordField.text = "password";

        // Act
        logInController.loginButtonClicked();

        // Assert
        Assert.IsTrue(logInController.userError.activeSelf, "Username error should be active when username is empty");
    }

    [Test]
    public void LoginButtonClicked_WithEmptyPassword_ShowsPasswordError()
    {
        // Arrange
        logInController.userNameField.text = "user";
        logInController.passwordField.text = "";

        // Act
        logInController.loginButtonClicked();

        // Assert
        Assert.IsTrue(logInController.passwordError.activeSelf, "Password error should be active when password is empty");
    }

    [Test]
    public void ExitButtonClicked_ClearsPlayerPrefs()
    {
        // Preconditions
        Assert.IsTrue(PlayerPrefs.HasKey("TestKey"), "Precondition: PlayerPrefs should have 'TestKey' before ExitButtonClicked is called.");

        // Act
        settingMenuController.ExitButtonClicked();

        // Assert
        Assert.IsFalse(PlayerPrefs.HasKey("TestKey"), "PlayerPrefs should be cleared when ExitButtonClicked is called.");
    }

    [TearDown]
    public void TearDown()
    {
        // Cleanup PlayerPrefs
        PlayerPrefs.DeleteAll();
    }

}
