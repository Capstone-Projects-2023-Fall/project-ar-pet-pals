using UnityEngine;

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
