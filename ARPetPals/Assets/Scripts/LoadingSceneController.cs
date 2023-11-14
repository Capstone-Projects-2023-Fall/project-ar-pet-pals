using System;
using System.Collections;
using System.Collections.Generic;
using ARPetPals;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using static ARPetPals.APIService;

public class LoadingSceneController : MonoBehaviour
{
    private float progress = 0f;
    [Header("Menu screens")]
    [SerializeField] private GameObject loadingSrceen;
    [SerializeField] private GameObject mainMenu;

    [Header("Slider")]
    [SerializeField] private Slider loadingSlider;
    public String levelToLoad;

    private void Awake()
    {
        String Check_token = PlayerPrefs.GetString(KEY_TOKEN);
        if (Check_token != "")
        {
            levelToLoad = "MainGameScene";
            Debug.Log($"Hy/Loading success-token: {Check_token}");
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
        loadOperation.allowSceneActivation = false;
        while (progress <= 1f)
        {
            loadingSlider.value = progress;
            float progressValue = Mathf.Clamp01(loadOperation.progress);
            loadingSlider.value = progressValue;
            progress += 0.01f;
            yield return new WaitForSeconds(0.01f);
            
        }
        while (!loadOperation.isDone && progress >=1f)
        {
            loadOperation.allowSceneActivation = true;
            yield return null;
        }
        
    }
}
