using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using ARPetPals;
using static ARPetPals.APIServiceResponse;

public class FoodRecognition : MonoBehaviour
{
    public GameObject gameObject;
    [SerializeField] public TMP_Text foodGuesses;
    
    // TODO: Refactor this function
    public void recognizeFood()
    {
        // Capture image
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

        // Send image string to backend server for recognition
        gameObject.GetComponent<APIService>().RecognizeFood(imageString, (response) => {


            ErrorMessageResponse error = JsonUtility.FromJson<ErrorMessageResponse>(response);
            if (error != null && !string.IsNullOrEmpty(error.message))
            {
                Debug.Log("Food Recognition Error: " + error.message);
                return;
            }

            RecognizeFoodResponse parsedResponse = JsonUtility.FromJson<RecognizeFoodResponse>(response);
            DisplayFoodGuesses(parsedResponse);
        });
    }

    private void DisplayFoodGuesses(RecognizeFoodResponse response)
    {
        List<Guess> guesses = response.topMatches;
        foreach (Guess guess in guesses)
        {
            Debug.Log(guess.name + ", " + guess.rank);
            foodGuesses.text = foodGuesses.text + guess.name + ", " + guess.rank + " ";
        }
    }

    // TODO: Add function to select food from list of guesses
}
