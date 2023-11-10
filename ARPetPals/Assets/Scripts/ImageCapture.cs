using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ImageCapture : MonoBehaviour
{
    public void takePhoto() {
        // Setup camera and take photo
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
        bytes[] bytes = image.EncodeToPNG();
        string imageString = Convert.ToBase64String(bytes);

        Console.WriteLine(imageString);

        // Send image string to backend server

        // Cleanup
        Destroy(rt);
        Destroy(image);
    }
}
