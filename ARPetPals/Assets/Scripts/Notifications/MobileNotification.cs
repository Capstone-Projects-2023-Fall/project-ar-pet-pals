// using UnityEngine;
// public class MobileNotification : MonoBehaviour
// {
//     [SerializeField]
//     private AndroidNotificationsController androidNotificationsController;
//     [SerializeField]
//     private IosNotificationController iosNotificationController;
//     private void Start()
//     {
//         #if UNITY_ANDROID
//         androidNotificationsController.RequestAuthorization();
//         androidNotificationsController.RegisterNotificationChannel();
//         androidNotificationsController.SendNotification("ARPetPals: Come Check on your pet!","Your pet misses you! Open the app and play with them!", 15 );
//
//         #elif UNITY_IOS
//         StartCoroutine(iosNotificationController.RequestAuthorization());
//         iosNotificationController.SendNotification("ARPetPals: Come Check on your pet!","Your pet misses you! Open the app and play with them!", 15);
//         #endif
// // above function exists only in unity ios, if doesnt work check preprocesser docs
//     }
// }
//     
//
// //if this doesnt work, make sure object is created in unity called "NativeNotificationsController" , and the scripts mobilenotification and the ios one should b created from that in unity
