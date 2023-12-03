using UnityEngine;
using ARPetPals;
//script assumes that each step generates a distinct motion in the accelerometer data.

public class StepCounter : MonoBehaviour

{
/*
 private bool isStepDetected = false;
 private int stepCount = 0;
 
#if UNITY_ANDROID
   private const float StepThreshold = 0.2f;
#endif

#if UNITY_IOS
   private const float StepThreshold = 0.25f;
#endif

  //  private const int StepThreshold = 10; // Adjust this threshold based on your testing, this code is for android only

    void Update()
    {
        // Check if the device is shaking based on accelerometer data
        if (Input.acceleration.sqrMagnitude >= StepThreshold)
        {
            if (!isStepDetected)
            {
                // Step detected
                stepCount++;
                isStepDetected = true;
                Debug.Log("Step Count: " + stepCount);
            }
        }
        else
        {
            isStepDetected = false;
        }
    }
*/
}

//This script uses the Input.acceleration property to get the accelerometer data and checks 
//if the square magnitude of the acceleration is above a certain threshold (StepThreshold). 
//This threshold might need adjustment based on testing. When a step is detected, it
//increments the stepCount variable.
