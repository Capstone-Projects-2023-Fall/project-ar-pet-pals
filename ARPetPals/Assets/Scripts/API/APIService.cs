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
//send notifications, from mobilenotifications.cs
 public static IEnumerator SendNotificationRequest(string userId, string notificationType, Action<string> callback)
        {
            string url = $"{URL}/sendNotification";
            var requestData = new { userId, notificationType };

            using (UnityWebRequest www = UnityWebRequest.Post(url, JsonUtility.ToJson(requestData)))
            {
                www.SetRequestHeader("Content-Type", CONTENT_TYPE);

                yield return www.SendWebRequest();

                if (www.result == UnityWebRequest.Result.ConnectionError || www.result == UnityWebRequest.Result.ProtocolError)
                {
                    Debug.LogError($"Error: {www.error}");
                }
                else
                {
                    // Deserialize the response using your response class
                    APIServiceResponse response = JsonUtility.FromJson<APIServiceResponse>(www.downloadHandler.text);

                    // Invoke the callback with the response
                    callback?.Invoke(response.Message);
                }
            }
        }
 public void GetLeaderboard(Action<GetLeaderboardResponse> callback)
    {
        StartCoroutine(_GetLeaderboard(callback));
    }

    private IEnumerator _GetLeaderboard(Action<GetLeaderboardResponse> callback)
    {
         string apiUrl = $"{URL}/api/leaderboard/list"; // leaderboard endpoint
        using (UnityWebRequest request = new UnityWebRequest(apiUrl, "GET"))
        {
            request.downloadHandler = new DownloadHandlerBuffer();
            request.SetRequestHeader("Content-Type", CONTENT_TYPE);

            yield return request.SendWebRequest();

            if (request.isNetworkError || request.isHttpError)
            {
                Debug.LogError($"Error fetching leaderboard: {request.error}");
                callback?.Invoke(null);
            }
            else
            {
                GetLeaderboardResponse response = JsonUtility.FromJson<GetLeaderboardResponse>(request.downloadHandler.text);
                callback?.Invoke(response);
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


        //create pet


        public void CreatePet(Action<string> callback) {
            StartCoroutine(_SendCreatePetRequest(callback));
        }

        private IEnumerator _SendCreatePetRequest(Action<string> callback) {

            string token = GetStoredToken();

            if (string.IsNullOrEmpty(token)) {
                callback("Invalid token");
                yield break; // Exit the coroutine
            }

            string url = URL + "/pet/create";

            /*
            Dictionary<string, string> body = new Dictionary<string, string>
            {
                { "name", petName }
            };*/

            using (UnityWebRequest request = UnityWebRequest.PostWwwForm(url, CONTENT_TYPE)) {
                request.SetRequestHeader("Authorization", "Bearer " + token); // Add the authorization header

                yield return request.SendWebRequest();

                // parse response
                string responseJson = request.downloadHandler.text;

                if (request.result != UnityWebRequest.Result.Success) {
                    Debug.LogError("_SendCreatePetRequest failed: " + request.downloadHandler.text);
                    ErrorMessageResponse responseData = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(responseData.message);
                    _ShowReponse(responseData.message);
                }
                // Create pet name successful
                else {

                    // Deserialize the JSON response
                    CreatePetResponse responseData = JsonUtility.FromJson<CreatePetResponse>(responseJson);
                    Debug.Log("_SendCreatePetRequest response: " + JsonUtility.ToJson(responseData, true));

                    _ShowReponse(JsonUtility.ToJson(responseData, true));
                    callback("");

                }
            }
        }







        //Set pet name
        public void SetPetName(string petName, Action<string> callback) {
            StartCoroutine(_SendSetPetNameRequest(petName, callback));
        }

        private IEnumerator _SendSetPetNameRequest(string petName, Action<string> callback) {

            string token = GetStoredToken();

            if (string.IsNullOrEmpty(token)) {
                callback("Invalid token");
                yield break; // Exit the coroutine
            }

            string url = URL + "/pet/name";
            Dictionary<string, string> body = new Dictionary<string, string>
            {
                { "name", petName }
            };

            using (UnityWebRequest request = UnityWebRequest.Post(url, JsonConvert.SerializeObject(body), CONTENT_TYPE)) {
                request.SetRequestHeader("Authorization", "Bearer " + token); // Add the authorization header

                yield return request.SendWebRequest();

                // parse response
                string responseJson = request.downloadHandler.text;

                if (request.result != UnityWebRequest.Result.Success) {
                    Debug.LogError("_SendSetPetNameRequest failed: " + request.downloadHandler.text);
                    ErrorMessageResponse responseData = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(responseData.message);
                    _ShowReponse(responseData.message);
                }
                // Set pet name successful
                else {

                    // Deserialize the JSON response
                    SetPetNameResponse responseData = JsonUtility.FromJson<SetPetNameResponse>(responseJson);
                    Debug.Log("_SendSetPetNameRequest response: " + JsonUtility.ToJson(responseData, true));

                    _ShowReponse(JsonUtility.ToJson(responseData, true));
                    callback("");
                    
                }
            }
        }

        //Set pet choice
        public void SetPetChoice(string petChoice, Action<string> callback) {
            StartCoroutine(_SendSetPetChoiceRequest(petChoice, callback));
        }

        private IEnumerator _SendSetPetChoiceRequest(string petChoice, Action<string> callback) {

            string token = GetStoredToken();

            if (string.IsNullOrEmpty(token)) {
                callback("Invalid token");
                yield break; // Exit the coroutine
            }

            string url = URL + "/pet/choice";
            Dictionary<string, string> body = new Dictionary<string, string>
            {
                { "choice", petChoice }
            };

            using (UnityWebRequest request = UnityWebRequest.Post(url, JsonConvert.SerializeObject(body), CONTENT_TYPE)) {
                request.SetRequestHeader("Authorization", "Bearer " + token); // Add the authorization header

                yield return request.SendWebRequest();

                // parse response
                string responseJson = request.downloadHandler.text;

                if (request.result != UnityWebRequest.Result.Success) {
                    Debug.LogError("_SendSetPetChoiceRequest failed: " + request.downloadHandler.text);
                    ErrorMessageResponse responseData = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(responseData.message);
                    _ShowReponse(responseData.message);
                }
                // Set pet name successful
                else {

                    // Deserialize the JSON response
                    SetPetChoiceResponse responseData = JsonUtility.FromJson<SetPetChoiceResponse>(responseJson);
                    Debug.Log("_SendSetPetChoiceRequest response: " + JsonUtility.ToJson(responseData, true));

                    _ShowReponse(JsonUtility.ToJson(responseData, true));
                    callback("");

                }
            }
        }

        //Get pet name
        public void GetPetName(Action<string> callback) {
            StartCoroutine(_SendGetPetNameRequest(callback));
        }

        private IEnumerator _SendGetPetNameRequest(Action<string> callback) {
            string token = GetStoredToken();
            if (token == "") {
                callback("Invalid token");
            }
            else {
                string url = URL + "/pet/name";

                UnityWebRequest request = UnityWebRequest.Get(url);
                request.SetRequestHeader("Authorization", "Bearer " + token);

                yield return request.SendWebRequest();

                // parse response
                string responseJson = request.downloadHandler.text;

                if (request.result != UnityWebRequest.Result.Success) {
                    Debug.LogError("_SendGetPetNameRequest failed: " + request.downloadHandler.text);
                    ErrorMessageResponse responseData = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(responseData.message);
                    _ShowReponse(responseData.message);
                }
                else {
                    // Deserialize the JSON response
                    GetPetNameResponse responseData = JsonUtility.FromJson<GetPetNameResponse>(responseJson);
                    Debug.Log("_SendGetPetNameRequest response: " + JsonUtility.ToJson(responseData, true));


                    Debug.Log("Pet name retrieved is: " + responseData.name);
                    // Store data locally
                    PlayerPrefs.SetString("CustomName", responseData.name);

                    _ShowReponse(JsonUtility.ToJson(responseData, true));
                    callback("");
                }
            }
        }

        //Get pet choice
        public void GetPetChoice(Action<string> callback) {
            StartCoroutine(_SendGetPetChoiceRequest(callback));
        }

        private IEnumerator _SendGetPetChoiceRequest(Action<string> callback) {

            string token = GetStoredToken();
            if (token == "") {
                callback("Invalid token");
            }

            else {

                string url = URL + "/pet/choice";

                UnityWebRequest request = UnityWebRequest.Get(url);
                request.SetRequestHeader("Authorization", "Bearer " + token);

                yield return request.SendWebRequest();

                // parse response
                string responseJson = request.downloadHandler.text;

                if (request.result != UnityWebRequest.Result.Success) {
                    Debug.LogError("_SendGetPetChoiceRequest failed: " + request.downloadHandler.text);
                    ErrorMessageResponse responseData = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(responseData.message);
                    _ShowReponse(responseData.message);
                }
                else {
                    // Deserialize the JSON response
                    GetPetChoiceResponse responseData = JsonUtility.FromJson<GetPetChoiceResponse>(responseJson);
                    Debug.Log("_SendGetPetChoiceRequest response: " + JsonUtility.ToJson(responseData, true));

                    int index = 0;
                    // Store data locally
                    switch (responseData.choice) {
                        case "Orange Dragon":
                            index = 0;
                            break;
                        case "Red Dragon":
                            index = 1;
                            break;
                        case "Green Dragon":
                            index = 2;
                            break;
                        case "Blue Dragon":
                            index = 3;
                            break;
                        default:
                            index = 0;
                            break;
                    }

                    Debug.Log("Pet choice index retrieved is: " + index);
                    PlayerPrefs.SetInt("SelectedPet", index);

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



