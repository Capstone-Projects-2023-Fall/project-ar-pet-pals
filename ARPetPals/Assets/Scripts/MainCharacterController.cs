using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class MainCharacterController : MonoBehaviour
{
    [SerializeField] private TMP_Text petNameDisplay;

    public GameObject basePetObject;

    public GameObject foodBowl;

    public Material orangeMat, redMat, greenMat, blueMat, yellowMat;

    Renderer m_Renderer;

    Animator animator;

    // Start is called before the first frame update
    void Start()
    {
        changeMat();
        petNameDisplay.text = PlayerPrefs.GetString("CustomName");  
        animator = GetComponent<Animator>();
        foodBowl.SetActive(false);
    }

    private void changeMat() {
        //Fetch the Renderer from the GameObject
        m_Renderer = basePetObject.GetComponent<Renderer>();

        int petChoice = PlayerPrefs.GetInt("SelectedPet");

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

    public void startEatFoodAnimation() {
        animator.SetBool("isEating", true);
        foodBowl.SetActive(true);
    }
    public void endEatFoodAnimation() {
        animator.SetBool("isEating", false);
        foodBowl.SetActive(false);
    }

    public void startSadAnimation() {
        animator.SetBool("lowHealth", true);
    }

    public void endSadAnimation() {
        animator.SetBool("lowHealth", false);
    }

}