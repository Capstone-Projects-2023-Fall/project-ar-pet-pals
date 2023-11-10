using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
// Setting prefab for Heart
public class HealthHeart : MonoBehaviour
{
    private Image heartImage;
    //Adding sprite for each status of heart
    public Sprite fullHeart;
    public Sprite halfHeart;
    public Sprite emptyHeart;
    private void Awake()
    {
        heartImage = GetComponent<Image>();
    }
//Checking heart status
    public void SetHeartImage(HealthStatus status)
    {
        switch (status)
        {
            case HealthStatus.Empty:
                heartImage.sprite = emptyHeart;
                break;
            case HealthStatus.Half:
                heartImage.sprite = halfHeart;
                break;
            case HealthStatus.Full:
                heartImage.sprite = fullHeart;
                break;
        }
    }
}
//Setup heart status
public enum HealthStatus
{
    Empty = 0,
    Half = 1,
    Full = 2
}
