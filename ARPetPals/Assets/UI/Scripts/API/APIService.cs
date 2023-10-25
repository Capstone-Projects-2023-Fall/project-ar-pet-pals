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

        public TMP_Text username;
        public TMP_Text password;
        public TMP_Text response;

        private const string URL = "https://arpetpals.store/api";
        private const string CONTENT_TYPE = "application/json";

        private const string KEY_TOKEN = "token";
        private const string KEY_USER_NAME = "username";

        public void SignIn(string username, string password, Action<string> callback)
        {
            StartCoroutine(SendSignInRequest(username, password, callback));
        }

        public void SignUp(string username, string password, Action<string> callback)
        {
            StartCoroutine(SendSignUpRequest(username, password, callback));
        }

        private IEnumerator SendSignInRequest(string username, string password, Action<string> callback)
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

        private IEnumerator SendSignUpRequest(string username, string password, Action<string> callback)
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
            SignIn("son", "son", (str) => {
                
                response.SetText(str, true);
                response.ForceMeshUpdate(true);
            });
        }

        public void SignUpTest()
        {
            SignUp("son", "son", (str) => {
                response.text = str;
                response.ForceMeshUpdate(true);
            });
        }

        public void UserTest()
        {
            Debug.Log(username.text);
            Debug.Log(password.text);
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



