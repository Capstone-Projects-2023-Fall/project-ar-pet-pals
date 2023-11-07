using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;
using UnityEngine.InputSystem;


[RequireComponent(typeof(ARRaycastManager))]
public class PlaceOnPlane : PressInputBase {

    //The object to move
    [SerializeField] GameObject objectToMove;

    // If there is any touch input.
    bool isPressed;

    ARRaycastManager aRRaycastManager;
    List<ARRaycastHit> hits = new List<ARRaycastHit>();

    protected override void Awake() {
        base.Awake();
        aRRaycastManager = GetComponent<ARRaycastManager>();
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

            // Move the object to the touch position.
            objectToMove.transform.position = hitPose.position;
            objectToMove.transform.rotation = hitPose.rotation;

            // To make the object always look at the camera. Delete if not needed.
            
            Vector3 lookPos = Camera.main.transform.position - objectToMove.transform.position;
            lookPos.y = 0;
            objectToMove.transform.rotation = Quaternion.LookRotation(-lookPos);
            
        }
    }

    protected override void OnPress(Vector3 position) => isPressed = true;

    protected override void OnPressCancel() => isPressed = false;
}
