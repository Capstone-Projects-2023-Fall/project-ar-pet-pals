using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using ARPetPals;
using UnityEngine.XR.ARFoundation;


//This script use for control sign in scene.
public class LogInController : MonoBehaviour
{
    [SerializeField] public TMP_InputField userNameField;
    [SerializeField] public TMP_InputField passwordField;
    [SerializeField] public TMP_Text editText;
    [SerializeField] public GameObject userError;
    [SerializeField] public GameObject passwordError;

    public string usernameInput = "";
    public string passwordInput = "";

    private bool dataRetrieved = false; // Flag to track if data has been retrieved


    // public void getUserName(string s)
    // {
    //     usernameInput = s;
    //     Debug.Log("username: " + usernameInput);
    // }
    //
    // public void getPassword(string s)
    // {
    //     passwordInput = s;
    //     Debug.Log("password: " + passwordInput);
    // }

    public void Start()
    {
        userError.SetActive(false);
        passwordError.SetActive(false);
    }

    public void Update()
    {
      
        
    }

    public void onSelected()
    {
        userError.SetActive(false);
        passwordError.SetActive(false);
    }

    public void loginButtonClicked()
    {
        usernameInput = userNameField.text;
        passwordInput = passwordField.text;
        // if (usernameInput == "" && passwordInput == "")
        // {
        //     editText.text = "Missing username and password";
        //     editText.color =  Color.red;
        // }
        if (usernameInput == "")
        {
            userError.SetActive(true);
        }
        if (passwordInput == "")
        {
            passwordError.SetActive(true);
        }
        Debug.Log($"Log in Clicked username: {usernameInput} password: {passwordInput}");
        if (passwordInput != "" && usernameInput != "")
        {
            gameObject.GetComponent<APIService>().SignIn(usernameInput, passwordInput, (errMessage) =>
            {
                if (errMessage != "")
                {
                    Debug.Log("Login Fail: " + errMessage);
                    editText.text = errMessage;
                    editText.color =  Color.red;
                }
                else
                {
                    PlayerPrefs.SetString("usernameInput",usernameInput);
                    PlayerPrefs.SetString("passwordInput",passwordInput);
                    Debug.Log($"Hy/Login Success-Token: {PlayerPrefs.GetString(APIService.KEY_TOKEN)}");
                    gameObject.GetComponent<APIService>().IncreasePetHappiness(APIService.ACTIVITY_TYPE_LOGIN, s => {});
                    retrievePetName();
                    StartCoroutine(WaitForDataRetrievalAndLoadScene());
                    // SceneManager.LoadScene("MainGameScene");
                    

                    //StartCoroutine(WaitForOneSecond());

                    //retrievePetChoice();
                    //SceneManager.LoadScene(3); //Scene 3 is MainGameScene (see Build Settings --> Scenes in Build)

                    
                    
                }
            });
        }
    }

    public void registerButtonClicked()
    {
        
        SceneManager.LoadScene("SignUpScene");
    }

    //set pet name to PlayerPrefs
    private void retrievePetName() {
        gameObject.GetComponent<APIService>().GetPetName((errMessage) =>
        {
            if (errMessage != "") {
                Debug.Log("Get Pet Name Fail: " + errMessage);
                editText.text = errMessage;
            }
            else {
                Debug.Log("Get Pet Name Success: " + errMessage);
                dataRetrieved = true; // Set the flag to indicate data has been retrieved

            }
        });
    }

    //set pet choice to PlayerPrefs
    private void retrievePetChoice() {
        gameObject.GetComponent<APIService>().GetPetChoice((errMessage) => {
            if (errMessage != "") {
                Debug.Log("Get Pet Choice Fail: " + errMessage);
                editText.text = errMessage;
            }
            else {
                Debug.Log("Get Pet Choice Success: " + errMessage);
                //dataRetrieved = true; // Set the flag to indicate data has been retrieved
            }
        });
    }

    private IEnumerator WaitForDataRetrievalAndLoadScene() {
        while (!dataRetrieved) // Use a flag to track if data has been retrieved
        {
            yield return null; // Wait for the next frame
        }

        // Now that data has been retrieved, you can proceed to retrievePetChoice and load the scene
        retrievePetChoice();
        LoaderUtility.Initialize();
        SceneManager.LoadScene("MainGameScene",LoadSceneMode.Single); //Scene 3 is MainGameScene (see Build Settings --> Scenes in Build)
        
        
    }

    private IEnumerator WaitForOneSecond() {
        yield return new WaitForSeconds(1.0f); // Wait for 1 second
        // Code to be executed after waiting
        Debug.Log("One second has passed!");
    }
}
