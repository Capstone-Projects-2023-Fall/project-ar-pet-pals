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

    //adjusts the speed at which the object moves
    private float moveSpeed = 5.0f;

    private Animator animator;

    protected override void Awake() {
        base.Awake();
        aRRaycastManager = GetComponent<ARRaycastManager>();
        //animator = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update() {
        // Check if there is any pointer device connected to the system.
        // Or if there is existing touch input.
        if (Pointer.current == null || isPressed == false)
            return;

        // Store the current touch position.
        var touchPosition = Pointer.current.position.ReadValue();

        // Check if the raycast hit any trackables.
        if (aRRaycastManager.Raycast(touchPosition, hits, TrackableType.PlaneWithinPolygon)) {
            // Raycast hits are sorted by distance, so the first hit means the closest.
            var hitPose = hits[0].pose;

            // To make the object always look at the camera. Delete if not needed.
            
            Vector3 lookPos = Camera.main.transform.position - objectToMove.transform.position;
            lookPos.y = 0;
            objectToMove.transform.rotation = Quaternion.LookRotation(-lookPos);
           
            // Set the target position for smooth movement.
            targetPosition = hitPose.position;
        }

        //animator.SetBool("isMoving", true);
        // Smoothly move the object towards the target position.
        objectToMove.transform.position = Vector3.Lerp(objectToMove.transform.position, targetPosition, Time.deltaTime * moveSpeed);

        //animator.SetBool("isMoving", false);

    }

    protected override void OnPress(Vector3 position) => isPressed = true;

    protected override void OnPressCancel() => isPressed = false;
}
