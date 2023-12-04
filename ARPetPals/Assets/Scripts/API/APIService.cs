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

        public const string URL = "https://arpetpals.store/api";
        public const string CONTENT_TYPE = "application/json";

        public const string KEY_TOKEN = "key_token";
        public const string KEY_USER_NAME = "key_username";
        public const string KEY_PET_STATUS = "key_pet_status";

        public const string ACTIVITY_TYPE_LOGIN = "login";
        public const string ACTIVITY_TYPE_DOUBLETAP = "double_tap";
        public const string ACTIVITY_TYPE_STEPTRACKING = "step_tracking";

        enum RESET_STATUS_TYPE
        {
            ALL = 0,
            HEALTH,
            MOOD
        }

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
                yield break; // Exit the coroutine

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

    public void SaveBirthday(string username, string birthday, Action<string> callback)
{
    StartCoroutine(_SendSaveBirthdayRequest(username, birthday, callback));
}

private IEnumerator _SendSaveBirthdayRequest(string username, string birthday, Action<string> callback)
{
    string token = GetStoredToken();
    if (token == "")
    {
        callback("Invalid token");
    }
    else
    {
        string url = URL + "/api/savebirthday"; // birthday endpoint
        // Create the request payload
        Dictionary<string, string> requestData = new Dictionary<string, string>
        {
            { "username", username },
            { "birthday", birthday }
        };

        string jsonData = JsonConvert.SerializeObject(requestData);

        UnityWebRequest request = new UnityWebRequest(url, "POST");
        byte[] bodyRaw = System.Text.Encoding.UTF8.GetBytes(jsonData);
        request.uploadHandler = (UploadHandler)new UploadHandlerRaw(bodyRaw);
        request.downloadHandler = (DownloadHandler)new DownloadHandlerBuffer();

        request.SetRequestHeader("Content-Type", CONTENT_TYPE);
        request.SetRequestHeader("Authorization", "Bearer " + token);

        yield return request.SendWebRequest();

        // parse response
        string responseJson = request.downloadHandler.text;

        if (request.result != UnityWebRequest.Result.Success)
        {
            Debug.LogError("_SendSaveBirthdayRequest failed: " + request.downloadHandler.text);
            ErrorMessageResponse responseData = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
            callback(responseData.message);
            _ShowReponse(responseData.message);
        }
        else
        {
            // Handle the success response if needed
            // ...

            // Birthday saved successfully, schedule the notification
            System.DateTime birthdayDate = System.DateTime.Parse(birthday);
            BirthdayNotificationManager.ScheduleBirthdayNotification(username, birthdayDate);

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

 public void CheckAccountActivityAndSendNotifications()
        {
            StartCoroutine(_CheckAccountActivityAndSendNotifications());
        }

        private IEnumerator _CheckAccountActivityAndSendNotifications()
{
    string apiUrl = $"{URL}/api/checkAccountActivity";

    using (UnityWebRequest request = new UnityWebRequest(apiUrl, "GET"))
    {
        request.downloadHandler = new DownloadHandlerBuffer();
        request.SetRequestHeader("Content-Type", CONTENT_TYPE);

        yield return request.SendWebRequest();

        if (request.isNetworkError || request.isHttpError)
        {
            Debug.LogError($"Error checking account activity: {request.error}");
        }
        else
        {
            // Parse the response as needed
            CheckAccountActivityResponse response = JsonUtility.FromJson<CheckAccountActivityResponse>(request.downloadHandler.text);

            // Handle the response based on its structure
            if (response != null)
            {
                Debug.Log($"Server Response: {response.message}");
                // You might want to check other fields in the response
                // For example: if (response.success) { /* handle success */ }
            }
            else
            {
                Debug.LogError("Failed to parse server response.");
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
                // Create pet successful
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
                yield break; // Exit the coroutine
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
                yield break; // Exit the coroutine
            }

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
                    case "Yellow Dragon":
                        index = 4;
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

        //Set pet status
        public void SetPetStatus(float health, float mood, Action<string> callback)
        {
            StartCoroutine(_SendSetPetStatusRequest(health, mood, callback));
        }

        private IEnumerator _SendSetPetStatusRequest(float health, float mood, Action<string> callback)
        {

            string token = GetStoredToken();

            if (string.IsNullOrEmpty(token))
            {
                callback("Invalid token");
                yield break; // Exit the coroutine
            }

            string url = URL + "/pet/status";
            Dictionary<string, float> body = new Dictionary<string, float>
            {
                { "health", health },
                { "mood", mood },
            };

            using (UnityWebRequest request = UnityWebRequest.Post(url, JsonConvert.SerializeObject(body), CONTENT_TYPE))
            {
                request.SetRequestHeader("Authorization", "Bearer " + token); // Add the authorization header

                yield return request.SendWebRequest();

                // parse response
                string responseJson = request.downloadHandler.text;

                if (request.result != UnityWebRequest.Result.Success)
                {
                    Debug.LogError("_SendSetPetStatusRequest failed: " + request.downloadHandler.text);
                    ErrorMessageResponse responseData = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(responseData.message);
                    _ShowReponse(responseData.message);
                }
                // Set pet status successful
                else
                {

                    // Deserialize the JSON response
                    SetPetStatusResponse responseData = JsonUtility.FromJson<SetPetStatusResponse>(responseJson);
                    Debug.Log("_SendSetPetStatusRequest response: " + JsonUtility.ToJson(responseData, true));

                    _ShowReponse(JsonUtility.ToJson(responseData, true));
                    callback("");

                }
            }
        }

        //Get pet status
        public void GetPetStatus(Action<string> callback)
        {
            StartCoroutine(_SendGetPetStatusRequest(callback));
        }

        private IEnumerator _SendGetPetStatusRequest(Action<string> callback)
        {
            string token = GetStoredToken();
            if (token == "")
            {
                callback("Invalid token");
                yield break; // Exit the coroutine
            }
            else
            {
                string url = URL + "/pet/status";

                UnityWebRequest request = UnityWebRequest.Get(url);
                request.SetRequestHeader("Authorization", "Bearer " + token);

                yield return request.SendWebRequest();

                // parse response
                string responseJson = request.downloadHandler.text;

                if (request.result != UnityWebRequest.Result.Success)
                {
                    Debug.LogError("_SendGetPetStatusRequest failed: " + request.downloadHandler.text);
                    ErrorMessageResponse responseData = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(responseData.message);
                    _ShowReponse(responseData.message);
                }
                else
                {
                    // Deserialize the JSON response
                    GetPetStatusResponse responseData = JsonUtility.FromJson<GetPetStatusResponse>(responseJson);
                    Debug.Log("_SendGetPetStatusRequest response: " + JsonUtility.ToJson(responseData, true));


                    // Store data locally
                    PlayerPrefs.SetString(KEY_PET_STATUS, responseJson);
                    _ShowReponse(JsonUtility.ToJson(responseData, true));
                    callback("");
                }
            }
        }

        //Reset pet status
        public void ResetPetStatus(int type, Action<string> callback)
        {
            StartCoroutine(_SendResetPetStatusRequest(type, callback));
        }

        private IEnumerator _SendResetPetStatusRequest(int type, Action<string> callback)
        {

            string token = GetStoredToken();

            if (string.IsNullOrEmpty(token))
            {
                callback("Invalid token");
                yield break; // Exit the coroutine
            }

            string url = URL + "/pet/status/reset";
            Dictionary<string, float> body = new Dictionary<string, float>
            {
                { "reset_type", type },
            };

            using (UnityWebRequest request = UnityWebRequest.Post(url, JsonConvert.SerializeObject(body), CONTENT_TYPE))
            {
                request.SetRequestHeader("Authorization", "Bearer " + token); // Add the authorization header

                yield return request.SendWebRequest();

                // parse response
                string responseJson = request.downloadHandler.text;

                if (request.result != UnityWebRequest.Result.Success)
                {
                    Debug.LogError("_SendResetPetStatusRequest failed: " + request.downloadHandler.text);
                    ErrorMessageResponse responseData = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(responseData.message);
                    _ShowReponse(responseData.message);
                }
                // Reset pet status successful
                else
                {

                    // Deserialize the JSON response
                    ResetPetStatusResponse responseData = JsonUtility.FromJson<ResetPetStatusResponse>(responseJson);
                    Debug.Log("_SendResetPetStatusRequest response: " + JsonUtility.ToJson(responseData, true));

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

        public void CreatePetTest()
        {
            CreatePet((str) => { });
        }

        public void SetPetStatusTest()
        {
            float health = UnityEngine.Random.Range(10, 100);
            float mood = UnityEngine.Random.Range(10, 100);
            SetPetStatus(health, mood, (str) => { });
        }

        public void GetPetStatusTest()
        {
            GetPetStatus((str) => {
                // Deserialize the stored JSON
                GetPetStatusResponse responseData = JsonUtility.FromJson<GetPetStatusResponse>(GetStoredPetStatus());
                Debug.Log("GetPetStatusTest health: " + responseData.health);
                Debug.Log("GetPetStatusTest mood: " + responseData.mood);
            });
        }

        public void ResetPetStatusTest()
        {
            int type = (int) RESET_STATUS_TYPE.ALL;
            ResetPetStatus(type, (str) => { });
        }

        public string GetStoredToken()
        {
            return PlayerPrefs.GetString(KEY_TOKEN, "");
        }

        public string GetStoredUserName()
        {
            return PlayerPrefs.GetString(KEY_USER_NAME, "");
        }

        public string GetStoredPetStatus()
        {
            return PlayerPrefs.GetString(KEY_PET_STATUS, "");
        }

        // -- START FOOD --

        public void RecognizeFood(string image64String, Action<string> callback)
        {
            StartCoroutine(_SendRecognizeFoodRequest(image64String, callback));
        }

        private IEnumerator _SendRecognizeFoodRequest(string image64String, Action<string> callback)
        {
            string token = GetStoredToken();
            if (string.IsNullOrEmpty(token))
            {
                callback("Invalid token");
                yield break;
            }

            string url = URL + "/food/recognize";
            Dictionary<string, string> body = new Dictionary<string, string>
            {
                { "image64String", image64String }
            };

            using (UnityWebRequest request = UnityWebRequest.Post(url, JsonConvert.SerializeObject(body), CONTENT_TYPE)) {
                request.SetRequestHeader("Authorization", "Bearer " + token);

                yield return request.SendWebRequest();

                string responseJson = request.downloadHandler.text;

                if (request.result != UnityWebRequest.Result.Success) {
                    Debug.LogError("_RecognizeFoodRequest failed: " + request.downloadHandler.text);
                    ErrorMessageResponse errorResponse = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(errorResponse.message);
                    _ShowReponse(errorResponse.message);
                    yield break;
                }

                // Deserialize the JSON response
                RecognizeFoodResponse responseData = JsonUtility.FromJson<RecognizeFoodResponse>(responseJson);
                Debug.Log("_RecognizeFoodRequest response: " + JsonUtility.ToJson(responseData, true));

                _ShowReponse(JsonUtility.ToJson(responseData, true));
                callback(JsonUtility.ToJson(responseData, true));
            }
        }

        public void ListFoodOptions(Action<string> callback)
        {
            StartCoroutine(_SendListFoodOptionsRequest(callback));
        }

        private IEnumerator _SendListFoodOptionsRequest(Action<string> callback)
        {
            string token = GetStoredToken();
            if (string.IsNullOrEmpty(token))
            {
                callback("Invalid token");
                yield break;
            }

            string url = URL + "/food/listFoodOptions";            

            using (UnityWebRequest request = UnityWebRequest.Get(url)) {
                request.SetRequestHeader("Authorization", "Bearer " + token);

                yield return request.SendWebRequest();

                string responseJson = request.downloadHandler.text;

                if (request.result != UnityWebRequest.Result.Success) {
                    Debug.LogError("_SendListFoodOptionsRequest failed: " + request.downloadHandler.text);
                    ErrorMessageResponse errorResponse = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(errorResponse.message);
                    _ShowReponse(errorResponse.message);
                    yield break;
                }

                // Deserialize the JSON response
                ListFoodOptionsResponse responseData = JsonUtility.FromJson<ListFoodOptionsResponse>(responseJson);
                Debug.Log("_SendListFoodOptionsRequest response: " + JsonUtility.ToJson(responseData, true));

                _ShowReponse(JsonUtility.ToJson(responseData, true));
                callback(JsonUtility.ToJson(responseData, true));
            }
        }

        public void GetNutritionInfo(string food, Action<string> callback)
        {
            StartCoroutine(_SendGetNutritionInfoRequest(food, callback));
        }

        private IEnumerator _SendGetNutritionInfoRequest(string food, Action<string> callback)
        {
            string token = GetStoredToken();
            if (string.IsNullOrEmpty(token))
            {
                callback("Invalid token");
                yield break;
            }

            string url = URL + "/food/nutritionInfo";
            Dictionary<string, string> body = new Dictionary<string, string>
            {
                { "food", food }
            };                     

            using (UnityWebRequest request = UnityWebRequest.Post(url, JsonConvert.SerializeObject(body), CONTENT_TYPE)) {
                request.SetRequestHeader("Authorization", "Bearer " + token);

                yield return request.SendWebRequest();

                string responseJson = request.downloadHandler.text;

                if (request.result != UnityWebRequest.Result.Success) {
                    Debug.LogError("_GetNutritionInfoRequest failed: " + request.downloadHandler.text);
                    ErrorMessageResponse errorResponse = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(errorResponse.message);
                    _ShowReponse(errorResponse.message);
                    yield break;
                }

                // Deserialize the JSON response
                GetNutritionInfoResponse responseData = JsonUtility.FromJson<GetNutritionInfoResponse>(responseJson);
                Debug.Log("_GetNutritionInfoRequest response: " + JsonUtility.ToJson(responseData, true));

                _ShowReponse(JsonUtility.ToJson(responseData, true));
                callback(JsonUtility.ToJson(responseData, true));
            }
        }
        
        // -- END FOOD --

        public void IncreasePetHappiness(string type, Action<string> callback)
        {
            StartCoroutine(_IncreasePetHappiness(type, callback));
        }

        private IEnumerator _IncreasePetHappiness(string type, Action<string> callback)
        {

            string token = GetStoredToken();

            if (string.IsNullOrEmpty(token))
            {
                callback("Invalid token");
                yield break; // Exit the coroutine
            }

            string url = URL + "/pet/status/increaseMood";
            Dictionary<string, string> body = new Dictionary<string, string>
            {
                { "type", type }
                
            };

            using (UnityWebRequest request = UnityWebRequest.Put(url, JsonConvert.SerializeObject(body)))
            {
                request.SetRequestHeader("Authorization", "Bearer " + token); // Add the authorization header
                request.SetRequestHeader("Content-Type", CONTENT_TYPE);

                yield return request.SendWebRequest();

                // parse response
                string responseJson = request.downloadHandler.text;

                if (request.result != UnityWebRequest.Result.Success)
                {
                    
                    Debug.LogError("_IncreasePetHappiness failed: " + request.downloadHandler.text);
                    ErrorMessageResponse responseData = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(responseData.message);
                    _ShowReponse(responseData.message);
                }
                else
                {

                    // Deserialize the JSON response
                    IncreasePetMoodResponse responseData = JsonUtility.FromJson<IncreasePetMoodResponse>(responseJson);
                    Debug.Log("_IncreasePetHappiness response: " + JsonUtility.ToJson(responseData, true));

                    _ShowReponse(JsonUtility.ToJson(responseData, true));
                    callback("");

                }
            }
        }

        public void IncreasePetHappinessTest()
        {
            string type = ACTIVITY_TYPE_LOGIN;
            IncreasePetHappiness(type, (str) => { });
        }

        public void UpdateUser(string username, string password, Action<string> callback)
        {
            StartCoroutine(_UpdateUser(username, password, callback));
        }

        private IEnumerator _UpdateUser(string username, string password, Action<string> callback)
        {

            string token = GetStoredToken();

            if (string.IsNullOrEmpty(token))
            {
                callback("Invalid token");
                yield break; // Exit the coroutine
            }

            string url = URL + "/user";
            Dictionary<string, string> body = new Dictionary<string, string>
            {
                { "username", username },
                { "password", password }

            };

            using (UnityWebRequest request = UnityWebRequest.Put(url, JsonConvert.SerializeObject(body)))
            {
                request.SetRequestHeader("Authorization", "Bearer " + token); // Add the authorization header
                request.SetRequestHeader("Content-Type", CONTENT_TYPE);

                yield return request.SendWebRequest();

                // parse response
                string responseJson = request.downloadHandler.text;

                if (request.result != UnityWebRequest.Result.Success)
                {

                    Debug.LogError("_UpdateUser failed: " + request.downloadHandler.text);
                    ErrorMessageResponse responseData = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(responseData.message);
                    _ShowReponse(responseData.message);
                }
                else
                {

                    // Deserialize the JSON response
                    UpdateUserResponse responseData = JsonUtility.FromJson<UpdateUserResponse>(responseJson);
                    Debug.Log("_UpdateUser response: " + JsonUtility.ToJson(responseData, true));

                    _ShowReponse(JsonUtility.ToJson(responseData, true));
                    callback("");

                }
            }
        }

        public void UpdateUserTest()
        {
            string username = "son9";
            string password = "son9";
            UpdateUser(username, password, (str) => { });
        }
        

        public void LeaderBoardTest()
        {
            GetLeaderBoardList((str) => { });
        }

        public void DeleteUser(Action<string> callback)
        {
            StartCoroutine(_DeleteUser(callback));
        }

        private IEnumerator _DeleteUser(Action<string> callback)
        {

            string token = GetStoredToken();

            if (string.IsNullOrEmpty(token))
            {
                callback("Invalid token");
                yield break; // Exit the coroutine
            }

            string url = URL + "/user";

            using (UnityWebRequest request = UnityWebRequest.Delete(url))
            {
                request.SetRequestHeader("Authorization", "Bearer " + token); // Add the authorization header
                request.SetRequestHeader("Content-Type", CONTENT_TYPE);
                // Add downloadHandler - there is no downloadHandler for DELETE method
                request.downloadHandler = new DownloadHandlerBuffer();

                yield return request.SendWebRequest();

                // parse response
                string responseJson = request.downloadHandler.text;

                if (request.result != UnityWebRequest.Result.Success)
                {

                    Debug.LogError("_DeleteUser failed: " + request.downloadHandler.text);
                    ErrorMessageResponse responseData = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(responseData.message);
                    _ShowReponse(responseData.message);
                }
                else
                {

                    // Deserialize the JSON response
                    DeleteUserResponse responseData = JsonUtility.FromJson<DeleteUserResponse>(responseJson);
                    Debug.Log("_DeleteUser response: " + JsonUtility.ToJson(responseData, true));

                    _ShowReponse(JsonUtility.ToJson(responseData, true));
                    callback("");

                }
            }
        }

        public void DeleteUserTest()
        {
            DeleteUser((str) => { });
        }
        
        
        public void GetLeaderBoardList(Action<string> callback)
        {
            StartCoroutine( _GetLeaderBoardList(callback));
        }

        private IEnumerator _GetLeaderBoardList(Action<string> callback)
        {
            string token = "";
            string url = URL + "/leaderboard/list";
            
            using (UnityWebRequest request = UnityWebRequest.Get(url)){
                request.SetRequestHeader("Authorization", "Bearer " + token);

                yield return request.SendWebRequest();

                string responseJson = request.downloadHandler.text;

                if (request.result != UnityWebRequest.Result.Success) {
                    Debug.LogError("_LeaderBoardRequest failed: " + request.downloadHandler.text);
                    ErrorMessageResponse errorResponse = JsonUtility.FromJson<ErrorMessageResponse>(responseJson);
                    callback(errorResponse.message);
                    _ShowReponse(errorResponse.message);
                    yield break;
                }

                // Deserialize the JSON response
                GetLeaderBoardResponse responseData = JsonUtility.FromJson<GetLeaderBoardResponse>(responseJson);
                Debug.Log("_LeaderBoardRequest response: " + JsonUtility.ToJson(responseData, true));
                _ShowReponse(JsonUtility.ToJson(responseData, true));
                callback(JsonUtility.ToJson(responseData, true));
            }
        }

    }
}



