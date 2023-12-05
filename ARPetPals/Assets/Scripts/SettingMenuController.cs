using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ARPetPals;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.Audio;
using UnityEngine.UIElements;
using Button = UnityEngine.UI.Button;
using Image = UnityEngine.UI.Image;
using Slider = UnityEngine.UI.Slider;

public class SettingMenuController : MonoBehaviour
{
    [Header("Pages")]
    [SerializeField] public GameObject menuPage;
    [SerializeField] public GameObject settingPage;
    [SerializeField] public GameObject ListPage;
    [SerializeField] public GameObject menuButton;
    [SerializeField] public GameObject ExitPage;
    [SerializeField] public GameObject LeaderBoardPage;
    [SerializeField] public GameObject Group;
    
    
    [Header("Setting Field")]
    [SerializeField] public TMP_InputField changePetNameField;
    [SerializeField] public TMP_InputField changeUserNameField;
    [SerializeField] public TMP_InputField changePasswordField;
    [SerializeField] public Button MenuButton;
    
    [SerializeField] public TMP_Text petNameDisplay;
    
    [SerializeField] public Slider masterVolumeSlider;
    [SerializeField] public Image VolumeButton;
    public Sprite unmuteMusic;
    public Sprite muteMusic;
    [SerializeField] public Slider sfxVolumeSlider;
    [SerializeField] public Image SfxButton;
    public Sprite unmuteSfx;
    public Sprite muteSfx;
    public PlayerPrefs currentMusicVolume;
    public PlayerPrefs currentSfxVolume;
    
    
    
    // Food List Objects
    [Header("Menu List")]
    [SerializeField] public TMP_Text Match1Text;
    [SerializeField] public TMP_Text Match2Text;
    [SerializeField] public TMP_Text Match3Text;
    [SerializeField] public Button Match1;
    [SerializeField] public Button Match2;
    [SerializeField] public Button Match3;
    
    public Transform contentPanel;
    public GameObject foodOptionPrefab;
    [SerializeField] public TMP_InputField OptionInput;

    [SerializeField] public TMP_Text NutritionInfoPanel;
    [SerializeField] public TMP_Text NutritionInfoFacts;
    [SerializeField] public Button NutritionInfoHideButton;
    
    public AudioMixer mixer;
    

    public float health = 100, maxHealth;
    [Header("Happiness Bar")]
    public Slider happinessSlider;
    public Gradient gradient;
    public Image happinessFill;
    public int maxHappiness = 100;
    public int currentHappniness = 100;
    // [SerializeField] public
    // [SerializeField] public 
    
    //

    [Header("LeaderBoard Field")] 
    [SerializeField] public TMP_Text name1;
    [SerializeField] public TMP_Text name2;
    [SerializeField] public TMP_Text name3;
    [SerializeField] public TMP_Text name4;
    [SerializeField] public TMP_Text name5;
    
    [SerializeField] public TMP_Text score1;
    [SerializeField] public TMP_Text score2;
    [SerializeField] public TMP_Text score3;
    [SerializeField] public TMP_Text score4;
    [SerializeField] public TMP_Text score5;
    
    
    
    
    public string changePetName;
    public string changeUserName;
    public string changePassword;

    private void Awake()
    {
        menuPage.SetActive(false);
        settingPage.SetActive(false);
        ListPage.SetActive(false);
        ExitPage.SetActive(false);
        LeaderBoardPage.SetActive(false);
        
        //Setup saved volume when started.
        masterVolumeSlider.value = PlayerPrefs.GetFloat("MusicVolume",100f);
        sfxVolumeSlider.value = PlayerPrefs.GetFloat("SfxVolume",100f);
        
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
                // Debug.Log($"Hy/Current Happiness from Api: {currentHappniness}");
                // Debug.Log($"Hy/Current Health from Api: {health}");
                SetMaxHappiness(maxHappiness);
                SetHappiness(currentHappniness);

                //Dario
                PlayerPrefs.SetFloat("health", health);
                PlayerPrefs.SetInt("happiness", currentHappniness);
            }
        });

        // Debug.Log($"Hy/start Happiness {currentHappniness}");
        // Debug.Log($"Hy/start Happiness {health}");
        // Debug.Log($"Hy/Max Happiness {maxHappiness}");
        
    }

    public void Start()
    {
        //Call the update pet status function every 1 second to get the newest value.
        InvokeRepeating("UpdatePetStatus", 2f,1f);
        
    }
    
    //Update pet function: calling api to get the newest happiness and mood. 
    private void UpdatePetStatus()
    {
        
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
                // Debug.Log($"Hy/Current Happiness from Api: {currentHappniness}");
                // Debug.Log($"Hy/Current Health from Api: {health}");
                SetMaxHappiness(maxHappiness);
                SetHappiness(currentHappniness);

                //Dario
                PlayerPrefs.SetFloat("health", health);
                PlayerPrefs.SetInt("happiness", currentHappniness);
            }
        });
        //Debug.Log("Update status run.");
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

    public void LeaderBoardButtonClicked()
    {
        menuPage.SetActive(false);
        LeaderBoardPage.SetActive(true);
        gameObject.GetComponent<APIService>().GetLeaderBoardList((response) =>
        {
            APIServiceResponse.GetLeaderBoardResponse responseData = JsonUtility.FromJson<APIServiceResponse.GetLeaderBoardResponse>(response);
            List<APIServiceResponse.LeaderBoardInfo> boardList = responseData.leaderboardList;
                
            int index = 0;
            foreach (var VARIABLE in boardList)
            {
                string indexString = (index+1).ToString();
                GameObject.Find("Name"+indexString).GetComponent<TMP_Text>().text = boardList[index].username;
                GameObject.Find("Score"+indexString).GetComponent<TMP_Text>().text = boardList[index].score.ToString();
                index++;
            }
            
           
            // if (index ++ <= totalSize)
            // {
            //     
            //     // name1.text = boardList[index].username;
            //     // score1.text = boardList[index].score.ToString();
            // }
            // if (boardList[1] != null)
            // {
            //     name2.text = boardList[1].username;
            //     score2.text = boardList[1].score.ToString(); 
            // }
            // if (boardList[2] != null)
            // {
            //     name3.text = boardList[2].username;
            //     score3.text = boardList[2].score.ToString();
            // }
            // if (boardList[3] != null)
            // {
            //     name4.text = boardList[3].username;
            //     score4.text = boardList[3].score.ToString();
            // }
            // if (boardList[4] != null)
            // {
            //     name5.text = boardList[4].username;
            //     score5.text = boardList[4].score.ToString(); 
            // }
            //
            // if (boardList[4] == null)
            // {
            //     Debug.Log("4 is null");
            // }
        });
    }
    
    //Fucntion For setting Button
    public void SettingCancelButtonClicked()
    {
        menuPage.SetActive(true);
        settingPage.SetActive(false);
    }
    public void LeaderBoardCancelButtonClicked()
    {
        menuPage.SetActive(true);
        LeaderBoardPage.SetActive(false);
    }
    //Saving all change from setting page.
    public void SaveButtonClicked()
    {
        changePetName = changePetNameField.text;
        changeUserName = changeUserNameField.text;
        changePassword = changePasswordField.text;
        PlayerPrefs.SetFloat("MusicVolume",masterVolumeSlider.value);
        PlayerPrefs.SetFloat("SfxVolume",sfxVolumeSlider.value);
        
        //Do something
        
        if (changeUserName != "n" || changePassword !="")
        {
            gameObject.GetComponent<APIService>().UpdateUser(changeUserName,changePassword, s => { });
        }

        if (changePetName != "")
        {
            gameObject.GetComponent<APIService>().SetPetName(changePetName,s => {});
            petNameDisplay.text = changePetName;
        }
        menuPage.SetActive(true);
        settingPage.SetActive(false);
    }
    
    //Food list menu. All the feature of OR process here. 
    
    //Scan button to scan the object. 
    public async void ScanButtonClicked()
    {
        FoodRecognition foodRecognition = new FoodRecognition(gameObject);
        
        // Capture Image and Recognize It
        Dictionary<int, string> topMatches = await foodRecognition.RecognizeFood();

        // Display User Options
        if (topMatches.TryGetValue(1, out string value))
        {
            Match1Text.text = CapitalizeEachWord(value);
            Match1.onClick.AddListener(
                () => SelectFoodOption(Match1Text.text.ToLower(), foodRecognition)
            );
        }
        
        if (topMatches.TryGetValue(2, out value))
        {
            Match2Text.text = CapitalizeEachWord(value);
            Match2.onClick.AddListener(
                () => SelectFoodOption(Match2Text.text.ToLower(), foodRecognition)
            );
        }

        if (topMatches.TryGetValue(3, out value))
        {
            Match3Text.text = CapitalizeEachWord(value);
            Match3.onClick.AddListener(
                () => SelectFoodOption(Match3Text.text.ToLower(), foodRecognition)
            );
        }

        // Make Food List Visible
        NutritionInfoPanel.gameObject.SetActive(false);
        ListPage.SetActive(true);

        // Get Food Options List from BE
        List<string> foodOptions = await foodRecognition.ListFoodOptions();

        // Create Input Listener
        OptionInput.onValueChanged.AddListener((string text) => {
            // Clear out old options
            foreach (Transform optButton in contentPanel)
            {
                Destroy(optButton.gameObject);
            }

            if (!string.IsNullOrEmpty(text))
            {
                // Create sublist of options that include given text
                List<string> matchingOptions = foodOptions.Where(opt => opt.Contains(text)).ToList();

                // Generate a button for each matching option
                foreach (var option in matchingOptions)
                {
                    GameObject newOption = Instantiate(foodOptionPrefab);
                    newOption.transform.SetParent(contentPanel, false);

                    TMP_Text textComponent = newOption.GetComponentInChildren<TMP_Text>();
                    if (textComponent != null)
                    {
                        textComponent.text = CapitalizeEachWord(option);
                    }

                    Button buttonComponent = newOption.GetComponent<Button>();
                    if (buttonComponent != null)
                    {
                        buttonComponent.onClick.AddListener(
                            () => SelectFoodOption(option.ToLower(), foodRecognition)
                        );
                    }
                }
            }

        });
    }

    public async void SelectFoodOption(string food, FoodRecognition foodRecognition)
    {
        Dictionary<string, string> nutritionInfo = await foodRecognition.GetNutritionInfo(food);

        // Close Down Food List
        ListPage.SetActive(false);

        // Populate and Enable Nutrition Info Display
        NutritionInfoPanel.gameObject.SetActive(true);

        // Set Nutr Info Title and Facts
        NutritionInfoPanel.text = "-- " + food + " --\nNutrition Facts";

        nutritionInfo.TryGetValue("calories", out string calories);
        nutritionInfo.TryGetValue("serving_size_g", out string servSize);
        nutritionInfo.TryGetValue("fat_total_g", out string fat);
        nutritionInfo.TryGetValue("fat_saturated_g", out string fatSat);
        nutritionInfo.TryGetValue("protein_g", out string protein);
        nutritionInfo.TryGetValue("carbohydrates_total_g", out string carbs);
        nutritionInfo.TryGetValue("fiber_g", out string fiber);
        nutritionInfo.TryGetValue("sugar_g", out string sugar);
        nutritionInfo.TryGetValue("sodium_mg", out string sodium);
        nutritionInfo.TryGetValue("potassium_mg", out string potassium);
        nutritionInfo.TryGetValue("cholesterol_mg", out string cholesterol);

        StringBuilder facts = new StringBuilder();
        facts.AppendLine("Calories: " + calories);
        facts.AppendLine("Serving Size: " + servSize + "g");
        facts.AppendLine("Total Fat: " + fat + "g");
        facts.AppendLine("Sat. Fat: " + fatSat + "g");
        facts.AppendLine("Protein: " + protein + "g");
        facts.AppendLine("Carbs: " + carbs + "g");
        facts.AppendLine("Fiber: " + fiber + "g");
        facts.AppendLine("Sugar: " + sugar + "g");
        facts.AppendLine("Sodium: " + sodium + "g");
        facts.AppendLine("Potassium: "  + potassium + "mg");
        facts.AppendLine("Cholesterol: "  + cholesterol + "mg");
        NutritionInfoFacts.text = facts.ToString();

        NutritionInfoHideButton.onClick.AddListener(
            () => { NutritionInfoPanel.gameObject.SetActive(false); }
        );
        
    }

    public string CapitalizeEachWord(string str)
    {
        var words = str.Split(' ');
        for (int i = 0; i < words.Length; i++)
        {
            if (words[i].Length > 0)
            {
                words[i] = char.ToUpper(words[i][0]) + words[i].Substring(1).ToLower();
            }
        }

        return string.Join(" ", words);
    }

    // Log out to sign in scene
    public void ExitButtonClicked()
    {
        SceneManager.LoadScene("SignInScene");
        PlayerPrefs.DeleteAll();
    }

    public void CloseScannedFoodMenu() {
        ListPage.SetActive(false);
    }

    public void ChangeHappinessButtonClicked()
    {
        currentHappniness += 10;
        Debug.Log($"Hy/CurrentHappy {currentHappniness}");
        SetHappiness(currentHappniness);
        
        PlayerPrefs.SetInt("happiness", currentHappniness);

    }

    public void AddHappinessButtonClicked() {
        currentHappniness += 10;
        Debug.Log($"Hy/CurrentHappy {currentHappniness}");
        SetHappiness(currentHappniness);

        PlayerPrefs.SetInt("happiness", currentHappniness);

    }

    public void LoseHappinessButtonClicked() {
        currentHappniness -= 10;
        Debug.Log($"Hy/CurrentHappy {currentHappniness}");
        SetHappiness(currentHappniness);

        PlayerPrefs.SetInt("happiness", currentHappniness);

    }

    public void ChangeHealthButtonClicked()
    {
        health += 1f;
        //Dario
        PlayerPrefs.SetFloat("health", health);
        Debug.Log(health);
    }

    //Dario
    public void AddHealthButtonClicked() {
        health += 1f;
        
        PlayerPrefs.SetFloat("health", health);
    }
    public void LoseHealthButtonClicked() {
        health -= 1f;
       
        PlayerPrefs.SetFloat("health", health);

        Debug.Log(health);
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

    //implement audio manager to ui
    public void ToggleMusic()
    {
        if (VolumeButton.sprite == unmuteMusic)
        {
            VolumeButton.sprite = muteMusic;
        }
        else
        {
            VolumeButton.sprite = unmuteMusic;
        }
        
        AudioManager.Instance.ToggleMusic();
    }

    public void ToggleSfx()
    {
        if (SfxButton.sprite == unmuteSfx)
        {
            SfxButton.sprite = muteSfx;
        }
        else
        {
            SfxButton.sprite = unmuteSfx;
        }
        AudioManager.Instance.ToggleSfx();
    }
    
    //Set up Master volume and sfx volume
    public void MusicVolume()
    {
        AudioManager.Instance.MusicVolume(masterVolumeSlider.value);
    }

    public void SfxVolume()
    {
        AudioManager.Instance.SfxVolume(sfxVolumeSlider.value);
    }
}


