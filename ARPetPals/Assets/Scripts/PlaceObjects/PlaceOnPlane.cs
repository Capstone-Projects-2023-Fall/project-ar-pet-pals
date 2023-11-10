using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;
using UnityEngine.InputSystem;

//make sure there is ARRaycastManager
[RequireComponent(typeof(ARRaycastManager))]
public class PlaceOnPlane : PressInputBase {

    //The object to move
    [SerializeField] GameObject objectToMove;

    // If there is any touch input.
    private bool isPressed;

    //vector where the user taps
    private Vector3 targetPosition;

    ARRaycastManager aRRaycastManager;
    List<ARRaycastHit> hits = new List<ARRaycastHit>();

    Animator animator;

    private bool isObjectMoving = false;

    //adjusts the speed at which the object moves
    private float moveSpeed = 1.0f;

    protected override void Awake() {
        base.Awake();
        aRRaycastManager = GetComponent<ARRaycastManager>();
        //animator = GetComponent<Animator>();
        animator = objectToMove.GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update() {
        // Check if there is any pointer device connected to the system.
        // Or if there is existing touch input.

        if (Pointer.current == null || isPressed == false) {
            isObjectMoving = false;
            animator.SetBool("isMoving", isObjectMoving);
            return;
        }

        // Store the current touch position.
        var touchPosition = Pointer.current.position.ReadValue();

        // Check if the raycast hit any trackables.
        if (aRRaycastManager.Raycast(touchPosition, hits, TrackableType.PlaneWithinPolygon)) {
            // Raycast hits are sorted by distance, so the first hit means the closest.
            var hitPose = hits[0].pose;

            // Set the target position for smooth movement.
            targetPosition = hitPose.position;

            // Calculate the direction vector between current position and target position.
            Vector3 direction = targetPosition - objectToMove.transform.position;
            direction.y = 0;

            // Set the rotation based on the direction vector.
            if (direction != Vector3.zero) {
                objectToMove.transform.rotation = Quaternion.LookRotation(direction);
            }

            isObjectMoving = true;

            // Smoothly move the object towards the target position.
            objectToMove.transform.position = Vector3.Lerp(objectToMove.transform.position, targetPosition, Time.deltaTime * moveSpeed);

        }

        else {
            isObjectMoving = false;
        }

        animator.SetBool("isMoving", isObjectMoving);
    }

    protected override void OnPress(Vector3 position) => isPressed = true;

    protected override void OnPressCancel() => isPressed = false;
}
