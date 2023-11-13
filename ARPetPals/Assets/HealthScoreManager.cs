using UnityEngine;
using UnityEngine.Networking;
using System.Collections;

public class HealthScoreManager : MonoBehaviour
{
    private const string BaseUrl = "http://localhost:8000"; //replace http://localhost:8000 with 
    //actual address where Deno server (server.ts) is running. This approach lets u to keep 
    //TypeScript and C# codebases separate and communicate over HTTP

    public static IEnumerator GetHealthScore(string recognizedFood, System.Action<int> onHealthScoreReceived)
    
    {
        string apiUrl = $"{BaseUrl}/api/health/getHealthRating";

        JSONObject requestData = new JSONObject();
        requestData.Add("recognizedFood", recognizedFood);

        using (UnityWebRequest request = new UnityWebRequest(apiUrl, "POST"))
        {
            byte[] bodyRaw = System.Text.Encoding.UTF8.GetBytes(requestData.ToString());
            request.uploadHandler = new UploadHandlerRaw(bodyRaw);
            request.downloadHandler = new DownloadHandlerBuffer();
            request.SetRequestHeader("Content-Type", "application/json");

            yield return request.SendWebRequest();

            if (request.isNetworkError || request.isHttpError)
            {
                Debug.LogError($"Error fetching health score: {request.error}");
                onHealthScoreReceived?.Invoke(0);
            }
            else
            {
                JSONObject response = new JSONObject(request.downloadHandler.text);
                int healthScore = (int)response.GetField("healthRating").n;
                onHealthScoreReceived?.Invoke(healthScore);
            }
        }
    }
}
