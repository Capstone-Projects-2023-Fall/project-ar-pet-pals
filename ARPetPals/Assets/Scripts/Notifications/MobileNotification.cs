using UnityEngine;
public class MobileNotification : MonoBehaviour
{
    [SerializeField]
    private AndroidNotificationsController androidNotificationsController;
    [SerializeField]
    private IosNotificationController iosNotificationController;
    private void Start()
    {
        #if UNITY_ANDROID
        androidNotificationsController.RequestAuthorization();
        androidNotificationsController.RegisterNotificationChannel();
        // Son fix Unity compilation error - 3 args, not 2
        androidNotificationsController.SendNotification("Notification!", "ARPetPals: Have you met your step goal today? Open the app and give your pet a walk!", 15 );

        #elif UNITY_IOS
        StartCoroutine(iosNotificationController.RequestAuthorization());
        iosNotificationController.SendNotification("ARPetPals: Have you met your step goal today? Open the app and give your pet a walk!", 15);
        #endif
// above function exists only in unity ios, if doesnt work check preprocesser docs
    }
}
    

//if this doesnt work, make sure object is created in unity called "NativeNotificationsController" , and the scripts mobilenotification and the ios one should b created from that in unity
