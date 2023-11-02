using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;



public class MainSceneController : MonoBehaviour
{

    private GameObject[] characterList;

    private int characterChoiceIndex;

    [SerializeField] private TMP_Text petNameDisplay;

    // Start is called before the first frame update
    void Start()
    {
        characterChoiceIndex = PlayerPrefs.GetInt("SelectedPet");

        Debug.Log("Pet choosen to load is: "+ characterChoiceIndex);

        characterList = new GameObject[transform.childCount];

        //fill array with our egg models
        for (int i = 0; i < transform.childCount; i++) {
            characterList[i] = transform.GetChild(i).gameObject;
        }

        //toggle off their render
        foreach (GameObject go in characterList) {
            go.SetActive(false);
        }

        if (characterList[characterChoiceIndex]) {
            characterList[characterChoiceIndex].SetActive(true);
        }

        petNameDisplay.text = PlayerPrefs.GetString("CustomName");
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
