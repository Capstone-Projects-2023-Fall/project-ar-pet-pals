using JetBrains.Annotations;
using System.Collections;
using UnityEngine;

public class RandomIdleAnimation : MonoBehaviour {
    private Animator animator;

    private float minDelay = 10f;
    private float maxDelay = 20f;

    // Array to store the names of the random animations
    private string[] randomAnimations;

    public bool randomAnimPlaying = false;

    private void Awake() {
        animator = GetComponent<Animator>();
    }

    void Start() {
        // Call RandomAnimation after a random delay
        Invoke("RandomAnimation", Random.Range(minDelay, maxDelay));
    }

    private void RandomAnimation() {
        string[] randomAnimations = new string[5] { "Dig", "Yaw", "Talk", "Sneeze", "Smell" };

        if (animator.GetCurrentAnimatorStateInfo(0).IsName("Idle")) {

            // Randomly select an animation from the array
            string randomAnimation = randomAnimations[Random.Range(0, randomAnimations.Length - 1)];
            //string randomAnimation = randomAnimations[0];

            // Activate the trigger with the randomly selected animation name
            animator.SetTrigger(randomAnimation);
            randomAnimPlaying = true;
     
        }

        // Invoke the next random animation after a random delay
        Invoke("RandomAnimation", Random.Range(minDelay, maxDelay));
    }

    private void ReturnToIdle() {
        animator.SetTrigger("Idle");
        randomAnimPlaying = false;
    }
}
