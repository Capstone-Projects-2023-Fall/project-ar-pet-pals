using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using ARPetPals;

//This script use for control sign in scene.
public class LogInController : MonoBehaviour
{
    [SerializeField] public TMP_InputField userNameField;
    [SerializeField] public TMP_InputField passwordField;
    [SerializeField] public TMP_Text editText;
    public string usernameInput = "";
    public string passwordInput = "";
    public GameObject gameObject;

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

    public void loginButtonClicked()
    {
        usernameInput = userNameField.text;
        passwordInput = passwordField.text;
        if (usernameInput == "" && passwordInput == "")
        {
            editText.text = "Missing username and password";
            editText.color =  Color.red;
        }
        else if (usernameInput == "")
        {
            editText.text = "Missing username";
            editText.color =  Color.red;
        }
        else if (passwordInput == "")
        {
            editText.text = "Missing password";
            editText.color =  Color.red;
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
                }
                else
                {
                    Debug.Log("Login Success: " + errMessage);

                    retrievePetName();

                    //StartCoroutine(WaitForOneSecond());

                    //retrievePetChoice();
                    //SceneManager.LoadScene(3); //Scene 3 is MainGameScene (see Build Settings --> Scenes in Build)

                    StartCoroutine(WaitForDataRetrievalAndLoadScene());

                }
            });
        }
    }

    public void registerButtonClicked()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex +1);
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
        SceneManager.LoadScene(3); //Scene 3 is MainGameScene (see Build Settings --> Scenes in Build)
    }

    private IEnumerator WaitForOneSecond() {
        yield return new WaitForSeconds(1.0f); // Wait for 1 second
        // Code to be executed after waiting
        Debug.Log("One second has passed!");
    }
}
