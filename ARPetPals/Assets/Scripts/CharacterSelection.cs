using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;


public class CharacterSelection : MonoBehaviour
{
    private GameObject[] characterList;

    [SerializeField] public GameObject confirmationMenu;

    private int index = 0;

    public string customName;

    public InputField nameInputField;


   
    private void Start() {

        confirmationMenu.SetActive(false);

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

    public void OpenConfirmation() {
        confirmationMenu.SetActive(true);
    }

    public void CloseConfirmation() {
        confirmationMenu.SetActive(false);
    }
}
