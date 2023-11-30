using UnityEngine;

public class CubeMovement: MonoBehaviour {
    public float rotationSpeed = 50.0f; // Speed of rotation.
    public float bobSpeed = 1.0f;     // Speed of bobbing.
    public float bobHeight = 0.5f;    // Height of the bobbing motion.

    private Vector3 originalPosition;  // Store the original position of the cube.

    void Start() {
        // Store the original position of the cube in world space.
        originalPosition = transform.position;
    }

    void Update() {
        // Rotate the cube around the Y-axis at the specified speed.
        transform.Rotate(Vector3.up * rotationSpeed * Time.deltaTime);

        // Calculate the vertical (bobbing) position in local space.
        float verticalPosition = Mathf.Sin(Time.time * bobSpeed) * bobHeight;

        // Update the cube's position in world space.
        transform.position = originalPosition + new Vector3(0, verticalPosition, 0);
    }
}
