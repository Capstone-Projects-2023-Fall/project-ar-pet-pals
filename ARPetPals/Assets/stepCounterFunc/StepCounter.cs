using UnityEngine;
//script assumes that each step generates a distinct motion in the accelerometer data.

public class StepCounter : MonoBehaviour
{
    private const int StepThreshold = 10; // Adjust this threshold based on your testing

    private bool isStepDetected = false;
    private int stepCount = 0;

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
}

//This script uses the Input.acceleration property to get the accelerometer data and checks 
//if the square magnitude of the acceleration is above a certain threshold (StepThreshold). 
//This threshold might need adjustment based on testing. When a step is detected, it
//increments the stepCount variable.
