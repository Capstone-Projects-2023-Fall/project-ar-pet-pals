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

        stepSlider.maxValue = maxSteps;
    }


    void Update() {
        // Access accelerometer data
        Vector3 acceleration = Input.acceleration;

        if (isTracking) {

            if (acceleration.magnitude > 1.25f) {
                // Increment step count
                stepCount++;
                // Update UI
                //stepText.text = "Steps: " + stepCount;
                stepText.text = "Steps remaining until reward: " + (maxSteps - stepCount);

            }

            // Check if the user reached 1000 steps
            if (stepCount >= maxSteps) {
                isTracking = false; // Stop tracking when 1000 steps are reached
                Debug.Log("Congratulations! You reached 1000 steps.");
                //add health to pet

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
