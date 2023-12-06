using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using System.Linq;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using ARPetPals;
using static ARPetPals.APIServiceResponse;

public class FoodRecognition : MonoBehaviour
{
    private GameObject gameObject;

    public FoodRecognition(GameObject gameObject)
    {
        this.gameObject = gameObject;
    }
    
    public async Task<Dictionary<int, string>> RecognizeFood()
    {
        string imageString = CaptureImage();
        var tcs = new TaskCompletionSource<Dictionary<int, string>>();

        gameObject.GetComponent<APIService>().RecognizeFood(imageString, (response) =>
        {
            ErrorMessageResponse error = JsonUtility.FromJson<ErrorMessageResponse>(response);
            if (error != null && !string.IsNullOrEmpty(error.message))
            {   
                Debug.Log("Food Recognition Error: " + error.message);
                tcs.SetResult(null);
            }
            else
            {
                RecognizeFoodResponse parsedResponse = JsonUtility.FromJson<RecognizeFoodResponse>(response);
                Dictionary<int, string> topMatches = parsedResponse.topMatches.ToDictionary(g => g.rank, g => g.name);
                tcs.SetResult(topMatches);
            }
        });

        return await tcs.Task;
    }

    private string CaptureImage()
    {
        Camera camera = Camera.main;
        int width = Screen.width;
        int height = Screen.height;
        RenderTexture rt = new RenderTexture(width, height, 24);
        camera.targetTexture = rt;
        
        var currentRT = RenderTexture.active;
        RenderTexture.active = rt;

        camera.Render();

        Texture2D image = new Texture2D(width, height);
        image.ReadPixels(new Rect(0, 0, width, height), 0, 0);
        image.Apply();

        camera.targetTexture = null;
        RenderTexture.active = currentRT;

        // Save image as bytestring
        byte[] bytes = image.EncodeToPNG();
        string imageString = Convert.ToBase64String(bytes);

        // Cleanup image capturing mechanism
        Destroy(rt);
        Destroy(image);

        return imageString;
    }

    public async Task<List<string>> ListFoodOptions()
    {
        var tcs = new TaskCompletionSource<List<string>>();

        gameObject.GetComponent<APIService>().ListFoodOptions((response) =>
        {
            ErrorMessageResponse error = JsonUtility.FromJson<ErrorMessageResponse>(response);
            if (error != null && !string.IsNullOrEmpty(error.message))
            {   
                Debug.Log("List Food Options Error: " + error.message);
                tcs.SetResult(null);
            }
            else
            {
                ListFoodOptionsResponse parsedResponse = JsonUtility.FromJson<ListFoodOptionsResponse>(response);
                tcs.SetResult(parsedResponse.foodOptions);
            }                    
        });

        return await tcs.Task;
    }
    
    public async Task<Dictionary<string, string>> GetNutritionInfo(string food)
    {
        var tcs = new TaskCompletionSource<Dictionary<string, string>>();

        gameObject.GetComponent<APIService>().GetNutritionInfo(food, (response) =>
        {
            ErrorMessageResponse error = JsonUtility.FromJson<ErrorMessageResponse>(response);
            if (error != null && !string.IsNullOrEmpty(error.message))
            {   
                Debug.Log("Get Nutrition Info Error: " + error.message);
                tcs.SetResult(null);
            }
            else
            {
                GetNutritionInfoResponse parsedResponse = JsonUtility.FromJson<GetNutritionInfoResponse>(response);
                
                var nutritionInfo = new Dictionary<string, string>();
                foreach (var field in parsedResponse.nutritionInfo.GetType().GetFields())
                {
                    nutritionInfo.Add(field.Name, field.GetValue(parsedResponse.nutritionInfo)?.ToString());
                }

                tcs.SetResult(nutritionInfo);
            }                         
        });

        return await tcs.Task;
    }
}
