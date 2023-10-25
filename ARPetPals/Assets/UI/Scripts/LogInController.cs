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
                    SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex + 2);
                }
            });

            
        }
    }

    public void registerButtonClicked()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex +1);
    }
    
}
