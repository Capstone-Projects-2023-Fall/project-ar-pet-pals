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
    
    public GameObject gameObject;
    public string usernameInput = "";
    public string passwordInput = "";
    public string confirmPasswordInput = "";
    public string birthdateInput = "";  // Added birthdate input
    public string errormessage = "";

    public void BackButtonClicked()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex - 1);
    }

    public void RegisterButtonClicked()
    {
        usernameInput = usernameField.text;
        passwordInput = passwordField.text;
        confirmPasswordInput = confirmPasswordField.text;
        birthdateInput = birthdateField.text;  // Get birthdate input
        
        if (usernameInput == "")
        {
            errormessage += " username";
        }
        if (passwordInput == "")
        {
            if (errormessage != "")
            {
                errormessage += " and";
            }
            errormessage += " password";
        }
        if (confirmPasswordInput == "")
        {
            if (errormessage != "")
            {
                errormessage += " and";
            }
            errormessage += " confirm password";
        }
        if (birthdateInput == "") //asking birthdate 
        {
            if (errormessage != "")
            {
                errormessage += " and";
            }
            errormessage += " birthdate";
        }

        if (errormessage != "")
        {
            editText.text = $"Missing{errormessage}.";
            editText.color = Color.red;
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
                }
                else
                {
                    Debug.Log("Signup Success: " + errMessage);
                    // Schedule birthday notification after successful registration
                    BirthdayNotificationManager.ScheduleBirthdayNotification(usernameInput, System.DateTime.Parse(birthdateInput));
                    SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex + 1);
                }
            });
        }
    }
}
