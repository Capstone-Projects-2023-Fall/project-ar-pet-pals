using ARPetPals;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class StepCounter : MonoBehaviour {
    public TMP_Text stepText;
    public int maxSteps = 1000;
    private int stepCount = 0;
    private bool isTracking = false;

    public Slider stepSlider;
    //public Slider happinessSlider;
    public Gradient gradient;
    //public Image happinessFill;
    public Image stepFill;

    [SerializeField] GameObject stepUI;
    [SerializeField] GameObject confirmationUI;
    [SerializeField] GameObject isWalkingUI;
    [SerializeField] GameObject pauseButton;
    [SerializeField] GameObject resumeButton;


    void Start () {
        stepUI.SetActive(false);
        isWalkingUI.SetActive(false);
        stepText.text = $"Steps remaining until reward: {maxSteps}";
        stepSlider.maxValue = maxSteps;
    }


    void Update() {
        // Access accelerometer data
        Vector3 acceleration = Input.acceleration;

        if (isTracking) {
            
            if (acceleration.magnitude > 1.25f) {
                // Increment step count
                stepCount++;
                stepText.text = "Steps remaining until reward: " + (maxSteps - stepCount);
                // Update UI
                //stepText.text = "Steps: " + stepCount;
                

            }

            // Check if the user reached 1000 steps
            if (stepCount >= maxSteps) {
                isTracking = false; // Stop tracking when 1000 steps are reached
                stepText.text = $"Congratulations! You reached {maxSteps} steps.";
                Debug.Log("Congratulations! You reached 1000 steps.");
                //add happiness to pet
                //Calling API to update happiness on server.
                gameObject.GetComponent<APIService>().IncreasePetHappiness(APIService.ACTIVITY_TYPE_STEPTRACKING, s => {});
                //reset count to zero
                stepCount = 0;
                //Show congrats ui
            }

            // Update UI
            UpdateSlider();
        }

    }

    void UpdateSlider() {
        /*
        if (stepSlider != null) {
            stepSlider.value = stepCount;
        }*/
        stepSlider.value = stepCount;
        stepFill.color = gradient.Evaluate(stepSlider.normalizedValue);
    }

    //open steps ui
    public void openStepsUI() {
        isTracking = true;
        stepUI.SetActive(true);
    }

    public void closeStepUI() {
        stepUI.SetActive(false);
    }

    //start walking when button is pressed
    public void startWalking() {
        isTracking = true;
        confirmationUI.SetActive(false);
        isWalkingUI.SetActive(true);
        //show pause button
        pauseButton.SetActive(true);
        resumeButton.SetActive(false);
    }

    public void pauseWalking() {
        isTracking = false;
        //show play button
        resumeButton.SetActive(true);
        pauseButton.SetActive(false);
    }

    public void resumeWalking() {
        isTracking = true;
        //show pause button
        pauseButton.SetActive(true);
        resumeButton.SetActive(false);
    }
}
