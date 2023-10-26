using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using TMPro;

public class CharacterSelection : MonoBehaviour
{
    private GameObject[] characterList;

    [SerializeField] private GameObject confirmationMenu;
    [SerializeField] private GameObject petNameUI;

    private int index = 0;

    private string customName;

    [SerializeField] private TMP_InputField nameInputField;

    private string petChoice;

    private void Start() {

        confirmationMenu.SetActive(false);
        petNameUI.SetActive(false);

        characterList = new GameObject[transform.childCount];

        //fill array with our egg models
        for(int i = 0; i < transform.childCount; i++) {
            characterList[i] = transform.GetChild(i).gameObject;
        }

        //toggle off their render
        foreach(GameObject go in characterList) {
            go.SetActive(false);
        }

        if (characterList[0]) {
            characterList[0].SetActive(true);
        }
    }

    public void ToggleLeft() {

        //Toggle off current model
        characterList[index].SetActive(false);

        index--;
        if(index < 0) {
            index = characterList.Length - 1;
        }

        //toggle on new model
        characterList[index].SetActive(true);
    }

    public void ToggleRight() {

        //Toggle off current model
        characterList[index].SetActive(false);

        index++;
        if (index == characterList.Length) {
            index = 0;
        }

        //toggle on new model
        characterList[index].SetActive(true);
    }

    //open and close the confirmation ui
    public void OpenConfirmation() {
        confirmationMenu.SetActive(true);
    }

    public void CloseConfirmation() {
        confirmationMenu.SetActive(false);
    }

    // Add this method to set the petChoice variable and close the confirmation menu
    public void ConfirmSelection() {
        //Set petChoice based on the selected character.
        switch (index) {
            case 0:
                petChoice = "Red Dragon";
                break;
            case 1:
                petChoice = "Orange Dragon";
                break;
            case 2:
                petChoice = "Green Dragon";
                break;
            case 3:
                petChoice = "Blue Dragon";
                break;
            default:
                petChoice = "Unknown";
                break;
        }

        Debug.Log(petChoice);

        //send petChoice to database

        // Close the confirmation menu
        confirmationMenu.SetActive(false);
        //Open the pet name ui
        petNameUI.SetActive(true);

    }

    public void ConfirmName() {
        // Check if the user has entered a name
        customName = nameInputField.text;

        if (string.IsNullOrEmpty(customName.Trim())) {
            // The user entered no name; you can display an error message or take other action.
            Debug.Log("Please enter a valid name.");
            return; // Exit the method without saving the selection.
        }

        Debug.Log("Name is: " + customName);

        //send customName to database

        SceneManager.LoadScene(1);

    }
}
