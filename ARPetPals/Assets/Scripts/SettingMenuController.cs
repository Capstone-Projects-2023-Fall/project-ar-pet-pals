using System;
using System.Collections;
using System.Collections.Generic;
using ARPetPals;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using UnityEngine.Audio;

public class SettingMenuController : MonoBehaviour
{
    [Header("Pages")]
    [SerializeField] public GameObject menuPage;
    [SerializeField] public GameObject settingPage;
    [SerializeField] public GameObject ListPage;
    [SerializeField] public GameObject menuButton;
    [Header("Input Field")]
    [SerializeField] public TMP_InputField changePetNameField;
    [SerializeField] public TMP_InputField changeUserNameField;
    [SerializeField] public TMP_InputField changePasswordField;
    [SerializeField] public Button MenuButton;
    //Text game object of Food List menu
    [Header("Menu List")]
    [SerializeField] public TMP_Text itemText1;
    [SerializeField] public TMP_Text itemText2;
    [SerializeField] public TMP_Text itemText3;
    
    
    public AudioMixer mixer;

    public float health, maxHealth;
    [Header("Happiness Bar")]
    public Slider happinessSlider;
    public Gradient gradient;
    public Image happinessFill;
    public int maxHappiness = 100;
    public int currentHappniness;
    // [SerializeField] public
    // [SerializeField] public 
    
    public string changePetName;
    public string changeUserName;
    public string changePassword;

    private void Awake()
    {
        menuPage.SetActive(false);
        settingPage.SetActive(false);
        ListPage.SetActive(false);
        // health = 5;
        // currentHappniness = maxHappiness;
        // SetMaxHappiness(maxHappiness);
        // SetHappiness(currentHappniness);
        //Get Pet Status Api .
        gameObject.GetComponent<APIService>().GetPetStatus((errMessage) =>
        {
            
            if (errMessage != "")
            {
                Debug.Log($"Hy/errorMessage {errMessage}");
            }
            else {
                APIServiceResponse.GetPetStatusResponse responseData = JsonUtility.FromJson<APIServiceResponse.GetPetStatusResponse>(gameObject.GetComponent<APIService>().GetStoredPetStatus());
                currentHappniness  = (int)float.Parse(responseData.mood);
                health = float.Parse(responseData.health)/10;
                Debug.Log($"Hy/Current Happiness from Api: {currentHappniness}");
                Debug.Log($"Hy/Current Health from Api: {health}");
                SetMaxHappiness(maxHappiness);
                SetHappiness(currentHappniness);
                
            }
        });
        
        Debug.Log($"Hy/start Happiness {currentHappniness}");
        Debug.Log($"Hy/start Happiness {health}");
        Debug.Log($"Hy/Max Happiness {maxHappiness}");
        
    }

    // public void  SetAudioLevel(float sliderValue)
    // {
    //     mixer.SetFloat("MusicVol", Mathf.Log10(sliderValue)*20);
    // }
    
    //Function For Menu Button
    
    //Function for Menu button when it was clicked.
    public void MenuButtonClicked()
    {
        menuPage.SetActive(true);
        menuButton.SetActive(false);
       
    }
    //Function for Cancel Menu page.
    public void MenuCancelButtonClicked()
    {
        menuPage.SetActive(false);
        menuButton.SetActive(true);
    }
    //Function when click the setting button.
    public void SettingButtonClicked()
    {
        menuPage.SetActive(false);
        settingPage.SetActive(true);
    }
 
    public void LogoutButtonClicked()
    {
        PlayerPrefs.DeleteAll();
        SceneManager.LoadScene("SignInScene");
    }

    public void PetStatButtonClicked()
    {
        //DoSomething
    }
    
    //Fucntion For setting Button
    public void SettingCancelButtonClicked()
    {
        menuPage.SetActive(true);
        settingPage.SetActive(false);
    }
    //Saving all change from setting page.
    public void SaveButtonClicked()
    {
        changePetName = changePetNameField.text;
        changeUserName = changeUserNameField.text;
        changePassword = changePasswordField.text;
        
        //Do something
        // if (changePetName != null)
        // {
        //     
        // } 
        menuPage.SetActive(true);
        settingPage.SetActive(false);
    }
    
    //Food list menu. All the feature of OR process here. 
    
    //Scan button to scan the object. 
    public void ScanButtonClicked()
    {
        //Process take picture in here.
        
        //Enable FoodList
        ListPage.SetActive(true);
        //Update List by changing Text in button. This is example, Modify value under here.
        itemText1.text = "la di da";
        itemText2.text = "apple";
        itemText3.text = "banana";
    }

    public void CloseScannedFoodMenu() {
        ListPage.SetActive(false);
    }

    public void ChangeHappinessButtonClicked()
    {
        currentHappniness -= 10;
        Debug.Log($"Hy/CurrentHappy {currentHappniness}");
        SetHappiness(currentHappniness); 
    }

    public void ChangeHealthButtonClicked()
    {
        health += 1f;
        
    }
    


    //Setting Happiness bar
    public void SetMaxHappiness(int happy)
    {
        happinessSlider.maxValue = happy;
        happinessSlider.value = happy;
       
        happinessFill.color =  gradient.Evaluate(1f);
        
    }
    public void SetHappiness(int happy)
    {
        happinessSlider.value = happy;
        happinessFill.color = gradient.Evaluate(happinessSlider.normalizedValue);
    }
}


