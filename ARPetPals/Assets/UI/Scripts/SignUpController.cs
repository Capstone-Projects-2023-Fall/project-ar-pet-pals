using System.Collections;
using System.Collections.Generic;
using ARPetPals;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class NewBehaviourScript : MonoBehaviour
{
    public GameObject gameObject;
    public string usernameInput;
    public string passwordInput;
    public string confirmPasswordInput;
    public TMP_Text editText;

    public void getUsername(string s)
    {
        usernameInput = s;
        Debug.Log("username: " + usernameInput);
    }

    public void getPassword(string s)
    {
        passwordInput = s;
        Debug.Log("password: " + passwordInput);
    }

    public void getConfirmPassword(string s)
    {
        confirmPasswordInput = s;
        Debug.Log("confirma password input: " + confirmPasswordInput);
    }

    public void registerButtonClicked()
    {
        editText.text = passwordInput.Equals(confirmPasswordInput) ? "Password correct" : "Password incorrect";
        Debug.Log("register clicked");
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
