using System.Collections;
using System.Collections.Generic;
using ARPetPals;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class NewBehaviourScript : MonoBehaviour
{
    public GameObject gameObject;
    public string usernameInput = "" ;
    public string passwordInput = "";
    public string confirmPasswordInput = "";
    public TMP_Text editText;
    public string errormessage = "";
    public TMP_InputField usernameField;
    public TMP_InputField passwordField;
    public TMP_InputField confirmPasswordField;

    // public void getUsername(string s)
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
    //
    // public void getConfirmPassword(string s)
    // {
    //     confirmPasswordInput = s;
    //     Debug.Log("confirm password input: " + confirmPasswordInput);
    // }

    public void registerButtonClicked()
    {
        usernameInput = usernameField.text;
        passwordInput = passwordField.text;
        confirmPasswordInput = confirmPasswordField.text;
        
        if (usernameInput == "")
        {
            errormessage += " username\n";
        }
        if (passwordInput == "")
        {
            errormessage += "password\n";
        }
        if (confirmPasswordInput == "")
        {
            errormessage += "confirm password";
        }
        while (errormessage != "")
        {
            editText.text = $"Missing\n{errormessage}.";
            Debug.Log($"Error message {errormessage}");
        }
        
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
                }
                else
                {
                    Debug.Log("Signup Success: " + errMessage);
                    SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex + 1);
                }
            });


        }
    }

}
