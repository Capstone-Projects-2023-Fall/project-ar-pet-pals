using UnityEngine;

public class UpdateStepGoal : MonoBehaviour
{
    // Function for updating the user's step goal
    public void UpdateStepGoal(int newStepGoal)
    {
        // TODO: Handle the logic for updating the step goal
        // This might include updating the UI and sending the new value to a server

        // Example: Update the UI
        UpdateUI(newStepGoal);

        // Example: Send the new step goal to the server
        SendStepGoalToServer(newStepGoal);
    }

    private void UpdateUI(int newStepGoal)
    {
        // TODO: Implement UI update logic
        Debug.Log($"UI Updated - New Step Goal: {newStepGoal}");
    }

    private void SendStepGoalToServer(int newStepGoal)
    {
        // Example: Use APIService to send the new step goal to the server
        StartCoroutine(APIService.UpdateStepGoal(newStepGoal, OnUpdateStepGoalResponse));
    }

    private void OnUpdateStepGoalResponse(bool success, string message)
    {
        if (success)
        {
            Debug.Log("Step goal updated successfully");
        }
        else
        {
            Debug.LogError($"Failed to update step goal. Error: {message}");
        }
    }
}