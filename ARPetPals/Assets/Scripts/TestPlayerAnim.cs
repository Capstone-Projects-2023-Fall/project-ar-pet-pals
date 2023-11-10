using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TestPlayerAnim : MonoBehaviour {

    Animator anim;

    public GameObject pet;

    private void Awake() {
        anim = pet.GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update() {

        //Debug.Log("Update called"); // Check if this is consistently called every frame

        // Check if there is at least one touch
        if (Input.touchCount > 0) {
            // Get the first touch
            Touch touch = Input.GetTouch(0);

            // Check if the touch phase is "Began" (the moment the screen is touched)
            if (touch.phase == TouchPhase.Began) {
                Debug.Log("Screen touched");

                // Set the bool parameter in the Animator to true
                anim.SetBool("isMoving", true);
            }
        }
        else {
            // If there is no touch, set the bool parameter to false
            anim.SetBool("isMoving", false);
        }
    }

}