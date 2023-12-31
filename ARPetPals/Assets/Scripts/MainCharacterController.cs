using System;
using JetBrains.Annotations;
using System.Collections;
using System.Collections.Generic;
using ARPetPals;
using TMPro;
using UnityEngine;

public class MainCharacterController : MonoBehaviour
{
    [SerializeField] private TMP_Text petNameDisplay;

    public GameObject basePetObject;

    public GameObject food, drink, meat, vegetable, fruit, dessert, fish, pizza, hotdog;

    public Material orangeMat, redMat, greenMat, blueMat, yellowMat;

    Renderer m_Renderer;

    Animator animator;

    int happiness;

    float health;

    void Start()
    {
        changeMat();
        petNameDisplay.text = PlayerPrefs.GetString("CustomName");  
        animator = GetComponent<Animator>();
        DeactivateAllGameObjects();
    }

    private void Update() {
        happiness = PlayerPrefs.GetInt("happiness");
        health = PlayerPrefs.GetFloat("health");

        if (happiness < 30 || health < 3) {
            startSadAnimation();
        }
        else {
            endSadAnimation();
        }
    }

    private void DeactivateAllGameObjects() {

        // Deactivate all game objects
        food.SetActive(false);
        drink.SetActive(false);
        meat.SetActive(false);
        vegetable.SetActive(false);
        fruit.SetActive(false);
        dessert.SetActive(false);
        fish.SetActive(false);
        pizza.SetActive(false);
        hotdog.SetActive(false);
    }

    private void changeMat() {
        //Fetch the Renderer from the GameObject
        m_Renderer = basePetObject.GetComponent<Renderer>();
        int petChoice = PlayerPrefs.GetInt("SelectedPet");
        Debug.Log($"Hy/PetChoice at Main:  {petChoice}");
        
        switch (petChoice) {
            case 0:
                m_Renderer.material = orangeMat;
                break;
            case 1:
                m_Renderer.material = redMat;
                break;
            case 2:
                m_Renderer.material = greenMat;
                break;
            case 3:
                m_Renderer.material = blueMat;
                break;
            case 4:
                m_Renderer.material = yellowMat;
                break;
            default:
                Debug.LogWarning("Invalid PlayerPrefs value");
                m_Renderer.material = orangeMat;
                break;
        }
    }

    public void startEatFoodAnimation(string foodCategory) {
        animator.SetInteger("eatCount", 3);
        animator.SetBool("isEating", true);
        //AudioManager.Instance.PlaySfx("EatingLong");
        ActivateGameObject(foodCategory);        
    }
    public void endEatFoodAnimation() {
        /*
        animator.SetBool("isEating", false);
        DeactivateAllGameObjects();
        Debug.Log("Done eating food should be gone");
        */
        // Decrement the eatCount
        int eatCount = animator.GetInteger("eatCount");
        eatCount--;

        // Check if there are more eating cycles left
        if (eatCount == 0) {
            // Trigger the animation to end
            animator.SetBool("isEating", false);
            DeactivateAllGameObjects();
            Debug.Log("Done eating food should be gone");
        }

        // Update the eatCount in the animator
        animator.SetInteger("eatCount", eatCount);
    }

    public void startSadAnimation() {
        animator.SetBool("lowHealth", true);
    }

    public void endSadAnimation() {
        animator.SetBool("lowHealth", false);
    }

    public void PLaySound()
    {
        AudioManager.Instance.PlaySfx("Fly");
    }

    public void ActivateGameObject(string foodCategory) {
        switch (foodCategory.ToLower()) // Convert to lowercase to handle case-insensitivity
        {
            case "food":
                ActivateGameObjectByName(food);
                break;
            case "drink":
                ActivateGameObjectByName(drink);
                break;
            case "meat":
                ActivateGameObjectByName(meat);
                break;
            case "vegetable":
                ActivateGameObjectByName(vegetable);
                break;
            case "fruit":
                ActivateGameObjectByName(fruit);
                break;
            case "dessert":
                ActivateGameObjectByName(dessert);
                break;
            case "fish":
                ActivateGameObjectByName(fish);
                break;
            case "pizza":
                ActivateGameObjectByName(pizza);
                break;
            case "hotdog":
                ActivateGameObjectByName(hotdog);
                break;
            default:
                ActivateGameObjectByName(food);
                break;
        }
    }

    private void ActivateGameObjectByName(GameObject obj) {
        obj.SetActive(true);        
    }
}
