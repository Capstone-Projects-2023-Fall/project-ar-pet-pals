
namespace ARPetPals
{
    public class APIServiceResponse
    {
        [System.Serializable]
        public class UserInfo
        {
            public string id;
            public string name;
        }

        [System.Serializable]
        public class SignInResponse
        {
            public string token;
            public UserInfo userInfo = new UserInfo();
        }

        [System.Serializable]
        public class SignUpResponse
        {
            public string message;
            public string token;
            public UserInfo userInfo = new UserInfo();
        }

        [System.Serializable]
        public class ErrorMessageResponse
        {
            public string message;
        }

        [System.Serializable]
        public class UserInfoResponse
        {
            public UserInfo userInfo = new UserInfo();
        }
    }
}

