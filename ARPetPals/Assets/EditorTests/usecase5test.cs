using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using ARPetPals;
using TMPro;

public class usecase5test
{
    private SettingMenuController settingMenuController;
    private APIService apiService;

    [SetUp]
    public void SetUp()
    {
        GameObject gameObject = new GameObject();
        settingMenuController = gameObject.AddComponent<SettingMenuController>();
        apiService = gameObject.AddComponent<APIService>(); // Add a real APIService component

        // Set up necessary UI components
        settingMenuController.changePetNameField = new GameObject().AddComponent<TMP_InputField>();
        settingMenuController.petNameDisplay = new GameObject().AddComponent<TMP_Text>();

    }

    [Test]
    public void SaveButtonClicked_UpdatesPetName()
    {
        // Arrange
        string expectedPetName = "Fluffy";
        settingMenuController.changePetNameField.text = expectedPetName;

        // Act
        settingMenuController.SaveButtonClicked();

        // Assert
        // This assumes there's a way to retrieve the updated pet name from apiService or another component
        string actualPetName = apiService.GetPetName(); // Replace with the actual method to get the pet name
        Assert.AreEqual(expectedPetName, actualPetName, "Pet name should be updated to the new value");
    }

    // A Test behaves as an ordinary method
    [Test]
    public void usecase5testSimplePasses()
    {
        // Use the Assert class to test conditions
    }

    // A UnityTest behaves like a coroutine in Play Mode. In Edit Mode you can use
    // `yield return null;` to skip a frame.
    [UnityTest]
    public IEnumerator usecase5testWithEnumeratorPasses()
    {
        // Use the Assert class to test conditions.
        // Use yield to skip a frame.
        yield return null;
    }

    [TearDown]
    public void TearDown()
    {
        PlayerPrefs.DeleteAll(); // Clean up PlayerPrefs to avoid side effects
    }
}
