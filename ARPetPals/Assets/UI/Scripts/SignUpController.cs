using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class NewBehaviourScript : MonoBehaviour
{
    public GameObject gameObject;
    public string username;
    public string password;
    public string confirmPassword;
    public TMP_Text editText;

    public void usernameInput(string s)
    {
        username = s;
        Debug.Log("username: " + username);
    }

    public void passwordInput(string s)
    {
        password = s;
        Debug.Log("username: " + password);
    }

    public void confirmPassInput(string s)
    {
        confirmPassword = s;
        Debug.Log("username: " + confirmPassword);
    }

    public void registerButtonClicked()
    {
        editText.text = password.Equals(confirmPassword) ? "Password correct" : "Password incorrect";
        Debug.Log("register clicked");
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex +1);
    }

}
