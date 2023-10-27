using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RotateEggs : MonoBehaviour
{

    public float rotationSpeed = 30.0f;

    void Update()
    {
        // Rotate the objects around their Y-axis
        transform.Rotate(Vector3.up * rotationSpeed * Time.deltaTime);
    }
}
