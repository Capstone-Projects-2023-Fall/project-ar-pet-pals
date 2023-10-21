using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
//This script use for control sign in scene.
public class LogInController : MonoBehaviour
{
    public string usernameInput;
    public string passwordInput;
    public GameObject gameObject;
    [SerializeField] 
    public TMP_Text EditText;
    
    public void getUserName(string s)
    {
        usernameInput = s;
        Debug.Log("username: " + usernameInput);
    }

    public void getPassword(string s)
    {
        passwordInput = s;
        Debug.Log("password: " + passwordInput);
    }

    public void loginButtonClicked()
    {
        EditText.text = "get user name and password: " + usernameInput + " " + passwordInput;
        Debug.Log("Log in Clicked");
        // if (passwordInput != null && usernameInput != null)
        // {
        //     EditText.text = "get user name and password: " + usernameInput + " " + passwordInput;
        //     Debug.Log("Log in Clicked");
        // }
    }

    public void registerButtonClicked()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex +2);
    }
    
}
