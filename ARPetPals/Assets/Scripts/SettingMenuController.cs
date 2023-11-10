using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using UnityEngine.Audio;

public class SettingMenuController : MonoBehaviour
{
    [SerializeField] public GameObject menuPage;
    [SerializeField] public GameObject settingPage;
    [SerializeField] public GameObject menuButton;
    [SerializeField] public TMP_InputField changePetNameField;
    [SerializeField] public TMP_InputField changeUserNameField;
    [SerializeField] public TMP_InputField changePasswordField;
    
    public AudioMixer mixer;

    public float health, maxHealth;
    
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
    public void Start()
    {
        menuPage.SetActive(false);
        settingPage.SetActive(false);
        
        SetMaxHappiness(maxHappiness);
        currentHappniness = maxHappiness;
        SetHappiness(currentHappniness);
        Debug.Log($"start Happiness {currentHappniness}");
        
        // SetMaxHealth(maxHealth);
        // currentHealth = maxHealth;
        // SetHealth(currentHealth);
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
    
    //PetStats function
    public void ScanButtonClicked()
    {
        currentHappniness -= 10;
        Debug.Log($"CurrentHappy {currentHappniness}");
        SetHappiness(currentHappniness);
    }

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

    public void CurrentHealth(float amount)
    {
        health = amount;
        
    }
    
}


