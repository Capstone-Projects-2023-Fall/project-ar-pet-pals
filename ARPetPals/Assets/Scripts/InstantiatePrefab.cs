using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class InstantiatePrefab : MonoBehaviour
{
    [SerializeField] private GameObject prefabToInstantiate; // Reference to the prefab you want to instantiate

    private string chosenPet;

    void Start() {

        chosenPet = PlayerPrefs.GetString("SelectedPet");
        Debug.Log("The chosen pet is... " + chosenPet);

        if (prefabToInstantiate != null) {
            // Instantiate the specified prefab
            GameObject newObject = Instantiate(prefabToInstantiate);
            // You can set the new object's position, rotation, and scale if needed.
            newObject.transform.position = new Vector3(0, 0, 0);
        }
        else {
            Debug.LogError("Prefab not assigned. Please assign the prefab in the Inspector.");
        }
    }
}
