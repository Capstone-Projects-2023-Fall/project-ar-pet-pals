using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class HeartBarController : MonoBehaviour
{
    public GameObject heartPrefab;
    public SettingMenuController petHealth;
    List<HealthHeart> hearts = new List<HealthHeart>();

    // private void OnEnable()
    // {
    //     petHealth.SetCurrentHeart() += DrawHeart();
    // }
    //
    // private void OnDisable()
    // {
    //     petHealth.Ontrigger -=DrawHeart();
    // }

    private void Start()
    {
        DrawHeart();
    }

    public void CreatedEmptyHeart()
    {
        GameObject newHeart = Instantiate(heartPrefab);
        newHeart.transform.SetParent(transform);

        HealthHeart heartComponent = newHeart.GetComponent<HealthHeart>();
        heartComponent.SetHeartImage(HealthStatus.Empty);
        hearts.Add(heartComponent);
    }

    public void DrawHeart()
    {
        ClearHearts();
        
        //Detemine how many hearts to make total
        //Based off the max health
        float maxHealthRemainder = petHealth.maxHealth % 2;
        int heartsToMake = (int)((petHealth.maxHealth / 2) + maxHealthRemainder);
        //Make 5 heart
        for (int i = 0; i < heartsToMake; i++)
        {
            CreatedEmptyHeart();
        }

        for (int i = 0; i < hearts.Count; i++)
        {
            
            int heartStatusRemainder = (int)Mathf.Clamp(petHealth.health- (i*2),0,2);
            hearts[i].SetHeartImage((HealthStatus)heartStatusRemainder);
        }
    }
    
    public void ClearHearts()
    {
        foreach (Transform t in transform)
        {
            Destroy(t.gameObject);
        }

        hearts = new List<HealthHeart>();
        
    }
}

