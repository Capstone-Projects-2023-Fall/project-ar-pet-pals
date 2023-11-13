using System.Collections;
using System.Collections.Generic;
using ARPetPals;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using ARPetPals.Notifications; //import Notifications namespace
//public class NewBehaviourScript : MonoBehaviour
public class SignUpController : MonoBehaviour  //updated class name
{
    [SerializeField] public TMP_Text editText;
    [SerializeField] public TMP_InputField usernameField;
    [SerializeField] public TMP_InputField passwordField;
    [SerializeField] public TMP_InputField confirmPasswordField;
    
    public GameObject gameObject;
    public string usernameInput = "";
    public string passwordInput = "";
    public string confirmPasswordInput = "";
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

        if (errormessage != "")
        {
            editText.text = $"Missing{errormessage}.";
            editText.color =  Color.red;
        }
        
        errormessage = "";
        Debug.Log($"Error message {errormessage}");
        
        Debug.Log("register clicked");
        Debug.Log($"Sign up Clicked username: {usernameInput} password: {passwordInput} confirm password: {confirmPasswordInput}");
        if (usernameInput != "" && passwordInput != "" && confirmPasswordInput != "" &&
            passwordInput.Equals(confirmPasswordInput))
        {
            // Check if it's the initial registration
            bool isInitialRegistration = NotificationScheduler.shouldSendInitialNotification(usernameInput);
            // Register the user and handle notifications
            gameObject.GetComponent<APIService>().SignUp(usernameInput, passwordInput, (errMessage) =>
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

                    //only schedule the initial notification if it's their first registration
                    if (isInitialRegistration)
                    {
                        //schedule initial notification
                        NotificationScheduler.ScheduleInitialNotification(usernameInput);
                    }

                    SceneManager.LoadScene("PetChoiceScene");
                }
            });
        }
    }
}
        
