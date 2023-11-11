using System;
using System.Collections;
using System.Collections.Generic;
using ARPetPals;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class NewBehaviourScript : MonoBehaviour
{
    [SerializeField] public TMP_Text editText;
    [SerializeField] public TMP_InputField usernameField;
    [SerializeField] public TMP_InputField passwordField;
    [SerializeField] public TMP_InputField confirmPasswordField;
    [SerializeField] public GameObject userNameError;
    [SerializeField] public GameObject passWordError;
    [SerializeField] public GameObject confirmPasswordError;
    
    
    public GameObject gameObject;
    public string usernameInput = "";
    public string passwordInput = "";
    public string confirmPasswordInput = "";
    public string errormessage = "";

    public void Start()
    {
        userNameError.SetActive(false);
        passWordError.SetActive(false);
        confirmPasswordError.SetActive(false);
        
    }
    public void onSelected()
    {
        userNameError.SetActive(false);
        passWordError.SetActive(false);
        confirmPasswordError.SetActive(false);
    }

    public void BackButtonClicked()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex - 1);
    }

    public void RegisterButtonClicked()
    {
        usernameInput = usernameField.text;
        passwordInput = passwordField.text;
        confirmPasswordInput = confirmPasswordField.text;
        
        if (usernameInput == "")
        {
            userNameError.SetActive(true);
        }
        if (passwordInput == "")
        {
            passWordError.SetActive(true);
        }
        if (confirmPasswordInput == "")
        {
           confirmPasswordError.SetActive(true);
        }

        if (passwordInput != confirmPasswordInput)
        {
            errormessage += "Confirm Password is not correct";
        }

        if (errormessage != "")
        {
            editText.text = $"{errormessage}.";
            
        }
        
        errormessage = "";
        Debug.Log($"Error message {errormessage}");
        
        Debug.Log("register clicked");
        Debug.Log($"Sign up Clicked username: {usernameInput} password: {passwordInput} confirm password: {confirmPasswordInput}");
        if (usernameInput != "" && passwordInput != "" && confirmPasswordInput != "" &&
            passwordInput.Equals(confirmPasswordInput))
        {
            gameObject.GetComponent<APIService>().SignUp(usernameInput, passwordInput, (errMessage) =>
            {
                if (errMessage != "")
                {
                    Debug.Log("Signup Fail: " + errMessage);
                    editText.text = errMessage;
                    editText.color =  Color.red;
                }
                else
                {
                    Debug.Log("Signup Success: " + errMessage);
                    SceneManager.LoadScene(2);
                }
            });


        }
    }

}
