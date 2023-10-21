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
    public string usernameInput;
    public string passwordInput;
    public GameObject gameObject;
    [SerializeField] 
    public TMP_Text editText;
    
    
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
