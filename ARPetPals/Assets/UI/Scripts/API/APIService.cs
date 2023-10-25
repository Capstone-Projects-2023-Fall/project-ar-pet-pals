using UnityEngine;
using UnityEngine.Networking;
using System.Collections;
using System.Collections.Generic;
using static ARPetPals.APIServiceResponse;
using Newtonsoft.Json;
using System;
using UnityEngine.UI;
using TMPro;

namespace ARPetPals
{
    public class APIService : MonoBehaviour
    {

        public TMP_InputField usernameInput;
        public TMP_InputField passwordInput;
        public TMP_InputField responseInput;

        private const string URL = "https://arpetpals.store/api";
        private const string CONTENT_TYPE = "application/json";

        private const string KEY_TOKEN = "token";
        private const string KEY_USER_NAME = "username";

        private const string DEFAULT_TEST_USERNAME = "test";
        private const string DEFAULT_TEST_PASSWORD = "test";

        private (string, string) _GetInput()
        {
            string username = DEFAULT_TEST_USERNAME;
            string password = DEFAULT_TEST_PASSWORD;
            if (usernameInput && passwordInput &&
                !usernameInput.text.Equals("") && !passwordInput.text.Equals(""))
            {
                Debug.Log("_GetInput: Use username and password from input field");
                username = usernameInput.text;
                password = passwordInput.text;
            }
            return (username, password);
        }

        public void SignIn(string username, string password, Action<string> callback)
        {
            StartCoroutine(_SendSignInRequest(username, password, callback));
        }

        public void SignIn(Action<string> callback)
        {
            string username, password;
            (username, password) = _GetInput();
            StartCoroutine(_SendSignInRequest(username, password, callback));
        }

        public void SignUp(string username, string password, Action<string> callback)
        {
            StartCoroutine(_SendSignUpRequest(username, password, callback));
        }

        public void SignUp(Action<string> callback)
        {
            string username, password;
            (username, password) = _GetInput();
            StartCoroutine(_SendSignUpRequest(username, password, callback));
        }

        private IEnumerator _SendSignInRequest(string username, string password, Action<string> callback)
        {
            string url = URL + "/signin";

            Dictionary<string, string> body = new Dictionary<string, string>
            {
                { "username", username },
                { "password", password }
            };

            using (UnityWebRequest request = UnityWebRequest.Post(url, JsonConvert.SerializeObject(body), CONTENT_TYPE))
            {
                yield return request.SendWebRequest();

                // parse response
                string responseJson = request.downloadHandler.text;

                if (request.result != UnityWebRequest.Result.Success)
                {
                    Debug.LogError("Sign-in failed: " + request.downloadHandler.text);
                    ErrorMessageResponse responseData = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(responseData.message);
                }
                // Signin successful
                else
                {
                    // Deserialize the JSON response and access the data
                    SignInResponse responseData = JsonUtility.FromJson<SignInResponse>(responseJson);
                    Debug.Log("Response: " + JsonUtility.ToJson(responseData, true));

                    // Store the token for later use
                    PlayerPrefs.SetString(KEY_TOKEN, responseData.token);
                    PlayerPrefs.SetString(KEY_USER_NAME, responseData.userInfo.name);
                    callback(JsonUtility.ToJson(responseData, true));
                }
                
            }
        }

        private IEnumerator _SendSignUpRequest(string username, string password, Action<string> callback)
        {
            string url = URL + "/signup";
            Dictionary<string, string> body = new Dictionary<string, string>
            {
                { "username", username },
                { "password", password }
            };


            using (UnityWebRequest request = UnityWebRequest.Post(url, JsonConvert.SerializeObject(body), CONTENT_TYPE))
            {
                yield return request.SendWebRequest();

                // parse response
                string responseJson = request.downloadHandler.text;

                if (request.result != UnityWebRequest.Result.Success)
                {
                    Debug.LogError("Sign-up failed: " + request.downloadHandler.text);
                    ErrorMessageResponse responseData = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(responseData.message);
                }
                // Signup successful
                else
                {
                    // Deserialize the JSON response and access the data
                    SignUpResponse responseData = JsonUtility.FromJson<SignUpResponse>(responseJson);
                    Debug.Log("Response: " + JsonUtility.ToJson(responseData, true));
                    callback(JsonUtility.ToJson(responseData, true));
                }
            }
        }

        public void SignInTest()
        {
            SignIn((str) => {
                if (responseInput)
                    responseInput.text = str;
                else
                    Debug.Log("Sign-in no response input");
            });
        }

        public void SignUpTest()
        {
            SignUp((str) => {
                if (responseInput)
                    responseInput.text = str;
                else
                    Debug.Log("Sign-up no response input");
            });
        }

        public void UserTest()
        {
            Debug.Log(usernameInput.text);
            Debug.Log(passwordInput.text);
        }

        public string GetStoredToken()
        {
            return PlayerPrefs.GetString(KEY_TOKEN, "");
        }

        public string GetStoredUserName()
        {
            return PlayerPrefs.GetString(KEY_USER_NAME, "");
        }


    }
}



