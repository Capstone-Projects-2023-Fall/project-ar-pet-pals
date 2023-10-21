
namespace ARPet
{
    public class APIServiceResponse
    {
        [System.Serializable]
        public class UserInfo
        {
            public string userId;
            public string userName;
        }

        [System.Serializable]
        public class SignInResponse
        {
            public string token;
            public UserInfo user = new UserInfo();
        }

        [System.Serializable]
        public class SignUpResponse
        {
            public string message;
            public string token;
            public UserInfo user = new UserInfo();
        }
    }
}

