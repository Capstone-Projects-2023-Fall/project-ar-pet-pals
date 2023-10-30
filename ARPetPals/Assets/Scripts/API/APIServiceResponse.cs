
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

        [System.Serializable]
        public class SetPetNameResponse {
            public string message;
        }

        [System.Serializable]
        public class GetPetNameResponse {
            public string message;
        }

        [System.Serializable]
        public class SetPetChoiceResponse {
            public string message;
        }

        [System.Serializable]
        public class GetPetChoiceResponse {
            public string message;
        }

        [System.Serializable]
        public class PetInfo {
            public string id;
            public string name;
        }

        [System.Serializable]
        public class CreatePetResponse {
            public string message;
            public PetInfo petInfo = new PetInfo();
        }
    }
}

