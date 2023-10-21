using UnityEngine;
using UnityEngine.Networking;
using System.Collections;
using System.Collections.Generic;
using static ARPet.APIServiceResponse;

namespace ARPet
{
    public class APIService : MonoBehaviour
    {
        private const string URL = "http://146.190.68.152/api";
        private const string CONTENT_TYPE = "application/json";

        private const string KEY_TOKEN = "token";
        private const string KEY_USER_NAME = "username";



        public void SignIn(string username, string password)
        {
            StartCoroutine(SendSignInRequest(username, password));
        }

        public void SignUp(string username, string password)
        {
            StartCoroutine(SendSignUpRequest(username, password));
        }

        private IEnumerator SendSignInRequest(string username, string password)
        {
            string url = URL + "/signin";
            Dictionary<string, string> parameters = new Dictionary<string, string>
        {
            { "username", username },
            { "password", password }
        };

            using (UnityWebRequest request = UnityWebRequest.Post(url, parameters))
            {
                yield return request.SendWebRequest();

                if (request.result != UnityWebRequest.Result.Success)
                {
                    Debug.LogError("Sign-in failed: " + request.error);
                }
                // Signin successful
                else
                {
                    // parse and use the response
                    string responseJson = request.downloadHandler.text;
                    // Deserialize the JSON response and access the data
                    SignInResponse responseData = JsonUtility.FromJson<SignInResponse>(responseJson);
                    Debug.Log("User ID: " + responseData.user.userId);
                    Debug.Log("User: " + responseData.user.userName);

                    // Store the token for later use
                    PlayerPrefs.SetString(KEY_TOKEN, responseData.token);
                    PlayerPrefs.SetString(KEY_USER_NAME, responseData.user.userName);
                }
            }
        }

        private IEnumerator SendSignUpRequest(string username, string password)
        {
            string url = URL + "/signup";
            Dictionary<string, string> parameters = new Dictionary<string, string>
        {
            { "username", username },
            { "password", password }
        };

            using (UnityWebRequest request = UnityWebRequest.Post(url, parameters))
            {
                yield return request.SendWebRequest();

                if (request.result != UnityWebRequest.Result.Success)
                {
                    Debug.LogError("Sign-up failed: " + request.error);
                }
                // Signup successful
                else
                {
                    // parse and use the response
                    string responseJson = request.downloadHandler.text;
                    // Deserialize the JSON response and access the data
                    SignUpResponse responseData = JsonUtility.FromJson<SignUpResponse>(responseJson);
                    Debug.Log("Message: " + responseData.message);
                    Debug.Log("User ID: " + responseData.user.userId);
                    Debug.Log("User: " + responseData.user.userName);
                    Debug.Log("Token: " + responseData.token);
                }
            }
        }

        public void SignInTest()
        {
            SignIn("son", "son");
        }

        public void SignUpTest()
        {
            SignUp("son", "son");
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



