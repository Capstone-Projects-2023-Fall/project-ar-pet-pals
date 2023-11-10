using System;
using System.Collections;
using System.Collections.Generic;
using ARPetPals;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class LoadingSceneController : MonoBehaviour
{
    [Header("Menu screens")]
    [SerializeField] private GameObject loadingSrceen;
    [SerializeField] private GameObject mainMenu;

    [Header("Slider")]
    [SerializeField] private Slider loadingSlider;
    public String levelToLoad;

    private void Awake()
    {
        String Check_token = PlayerPrefs.GetString("key_token");
        if (Check_token != "")
        {
            levelToLoad = "MainGameScene";
        }
        else
        {
            levelToLoad = "SignInScene";
        }
    }

    private void Start()
    {
     StartCoroutine(LoadLevelAsync(levelToLoad));
    }

   

    IEnumerator LoadLevelAsync(string levelToLoad)
    {
       
        AsyncOperation loadOperation = SceneManager.LoadSceneAsync(levelToLoad);
        while (!loadOperation.isDone)
        {
            float progressValue = Mathf.Clamp01(loadOperation.progress / 0.9f);
            loadingSlider.value = progressValue;
            yield return null;
        }

        
    }
}
