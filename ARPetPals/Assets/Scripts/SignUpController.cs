using System;
using System.Collections;
using System.Collections.Generic;
using ARPetPals;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SignUpController : MonoBehaviour
{
    [SerializeField] public TMP_Text editText;
    [SerializeField] public TMP_InputField usernameField;
    [SerializeField] public TMP_InputField passwordField;
    [SerializeField] public TMP_InputField confirmPasswordField;
    [SerializeField] public TMP_InputField birthdateField;  // Added birthdate field
    
    [SerializeField] public GameObject userNameError;
    [SerializeField] public GameObject passWordError;
    [SerializeField] public GameObject confirmPasswordError;
    [SerializeField] public GameObject BirthdayError;

    public string usernameInput = "";
    public string passwordInput = "";
    public string confirmPasswordInput = "";
    public string birthdateInput = "";  // Added birthdate input
    public string errormessage = "";

    public void Start()
    {
        userNameError.SetActive(false);
        passWordError.SetActive(false);
        confirmPasswordError.SetActive(false);
        BirthdayError.SetActive(false);
    }

    public void onSelected()
    {
        userNameError.SetActive(false);
        passWordError.SetActive(false);
        confirmPasswordError.SetActive(false);
        editText.text = "";
    }

    public void BackButtonClicked()
    {
        SceneManager.LoadScene("SignInScene");
    }

    public void RegisterButtonClicked()
    {
        usernameInput = usernameField.text;
        passwordInput = passwordField.text;
        confirmPasswordInput = confirmPasswordField.text;
        birthdateInput = birthdateField.text;  // Get birthdate input

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
        if (birthdateInput == "") //asking birthdate 
        {
            BirthdayError.SetActive(true);
        }

        if (errormessage != "")
        {
            editText.text = $"{errormessage}.";
        }

        errormessage = "";
        Debug.Log($"Error message {errormessage}");

        Debug.Log("register clicked");
        Debug.Log($"Sign up Clicked username: {usernameInput} password: {passwordInput} confirm password: {confirmPasswordInput} birthdate: {birthdateInput}");
        //added birthdate part to function

        if (usernameInput != "" && passwordInput != "" && confirmPasswordInput != "" && birthdateInput != "" &&
            passwordInput.Equals(confirmPasswordInput))
        {
            gameObject.GetComponent<APIService>().SignUp(usernameInput, passwordInput, birthdateInput, (errMessage) =>
            {
                if (errMessage != "")
                {
                    Debug.Log("Signup Fail: " + errMessage);
                    editText.text = errMessage;
                    editText.color = Color.red;
                }
                else
                {
                    Debug.Log("Signup Success: " + errMessage);
                    // Schedule birthday notification after successful registration
                    // BirthdayNotificationManager.ScheduleBirthdayNotification(usernameInput, System.DateTime.Parse(birthdateInput));
                    SceneManager.LoadScene("PetChoiceScene");
                }
            });
        }
    }
}
