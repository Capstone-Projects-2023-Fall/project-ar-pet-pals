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

        private const string KEY_TOKEN = "key_token";
        private const string KEY_USER_NAME = "key_username";

        private (string, string) _GetInput()
        {
            string username = "", password = "";
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

            if (username == "" || password == "")
            {
                string msg = "Username or password should not be empty";
                callback(msg);
                _ShowReponse(msg);
                return;
            }

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

            if (username == "" || password == "")
            {
                string msg = "Username or password should not be empty";
                callback(msg);
                _ShowReponse(msg);
                return;
            }

            StartCoroutine(_SendSignUpRequest(username, password, callback));
        }

        public void GetUser(Action<string> callback)
        {
            StartCoroutine(_SendGetUserRequest(callback));
        }

        private IEnumerator _SendGetUserRequest(Action<string> callback)
        {
            string token = GetStoredToken();
            if (token == "")
            {
                callback("Invalid token");
            }
            else
            {
                string url = URL + "/user";

                UnityWebRequest request = UnityWebRequest.Get(url);
                request.SetRequestHeader("Authorization", "Bearer " + token);

                yield return request.SendWebRequest();

                // parse response
                string responseJson = request.downloadHandler.text;

                if (request.result != UnityWebRequest.Result.Success)
                {
                    Debug.LogError("_SendGetUserRequest failed: " + request.downloadHandler.text);
                    ErrorMessageResponse responseData = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(responseData.message);
                    _ShowReponse(responseData.message);
                }
                else
                {
                    // Deserialize the JSON response
                    UserInfoResponse responseData = JsonUtility.FromJson<UserInfoResponse>(responseJson);
                    Debug.Log("_SendGetUserRequest response: " + JsonUtility.ToJson(responseData, true));

                    // Store data locally
                    PlayerPrefs.SetString(KEY_USER_NAME, responseData.userInfo.name);

                    _ShowReponse(JsonUtility.ToJson(responseData, true));
                    callback("");

                }
            }
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
                    Debug.LogError("_SendSignInRequest failed: " + request.downloadHandler.text);
                    ErrorMessageResponse responseData = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(responseData.message);
                    _ShowReponse(responseData.message);
                }
                // Signin successful
                else
                {
                    // Deserialize the JSON response
                    SignInResponse responseData = JsonUtility.FromJson<SignInResponse>(responseJson);
                    Debug.Log("_SendSignInRequest response: " + JsonUtility.ToJson(responseData, true));

                    // Store data locally
                    PlayerPrefs.SetString(KEY_TOKEN, responseData.token);
                    PlayerPrefs.SetString(KEY_USER_NAME, responseData.userInfo.name);

                    _ShowReponse(JsonUtility.ToJson(responseData, true));
                    callback("");
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
                    Debug.LogError("_SendSignUpRequest failed: " + request.downloadHandler.text);
                    ErrorMessageResponse responseData = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(responseData.message);
                    _ShowReponse(responseData.message);
                }
                // Signup successful
                else
                {
                    // Deserialize the JSON response
                    SignUpResponse responseData = JsonUtility.FromJson<SignUpResponse>(responseJson);
                    Debug.Log("_SendSignUpRequest response: " + JsonUtility.ToJson(responseData, true));

                    // Store data locally
                    PlayerPrefs.SetString(KEY_TOKEN, responseData.token);
                    PlayerPrefs.SetString(KEY_USER_NAME, responseData.userInfo.name);

                    _ShowReponse(JsonUtility.ToJson(responseData, true));
                    callback("");
                }
            }
        }

        private void _ShowReponse(string response)
        {
            if (responseInput)
                responseInput.text = response;
        }

        public void SignInTest()
        {
            SignIn((str) => {});
        }

        public void SignUpTest()
        {
            SignUp((str) => {});
        }

        public void UserTest()
        {
            GetUser((str) => {});
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



