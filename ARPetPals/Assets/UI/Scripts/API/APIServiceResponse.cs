
namespace ARPetPals
{
    public class APIServiceResponse
    {
        [System.Serializable]
        public class UserInfoResponse
        {
            public string id;
            public string name;
        }

        [System.Serializable]
        public class SignInResponse
        {
            public string token;
            public UserInfoResponse userInfo = new UserInfoResponse();
        }

        [System.Serializable]
        public class SignUpResponse
        {
            public string message;
            public string token;
            public UserInfoResponse userInfo = new UserInfoResponse();
        }

        [System.Serializable]
        public class ErrorMessageResponse
        {
            public string message;
        }
    }
}

