using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PetDeath : MonoBehaviour
{
    Animator animator;

    [SerializeField] private GameObject canvas;
    [SerializeField] private GameObject TigerDrago;
    [SerializeField] private GameObject CG;
    [SerializeField] private GameObject tombStone;

    // Start is called before the first frame update
    void Start()
    {
        animator = GetComponent<Animator>();

        float health = PlayerPrefs.GetFloat("health");
        if (health <= 0) {
            deathSequence();
        }

    }
    private void Update() {
        float health = PlayerPrefs.GetFloat("health");
        if (health <= 0) {
            deathSequence();
        }
    }

    private void deathSequence() {

        //disable all canvas elements
        canvas.SetActive(false);

        //play animation
        animator.SetTrigger("Death");

        //turn off game object when animation ends

        //turn on tomb stone

        //delete account
        deleteAccount();

        //drop down or pop up "Oh no! You neglected your pet to the point of death... yikes. Your account will now be deleted, please register a new account

        //click red button return to main menu
    }

    public void enableTombStone() {
        TigerDrago.SetActive(false);
        CG.SetActive(false);
        tombStone.SetActive(true);
    }

    public void deleteAccount() {

    }

    public void returnToRegister() {

    }
}
