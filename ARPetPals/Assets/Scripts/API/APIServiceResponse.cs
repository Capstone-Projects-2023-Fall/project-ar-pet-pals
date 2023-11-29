using System.Collections.Generic;

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
            public string name;
        }

        [System.Serializable]
        public class SetPetChoiceResponse {
            public string message;
        }

        [System.Serializable]
        public class GetPetChoiceResponse {
            public string choice;
        }

        [System.Serializable]
        public class PetInfo {
            public string id;
            public string name;
            public GetPetStatusResponse status;
        }

        [System.Serializable]
        public class CreatePetResponse {
            public string message;
            public PetInfo petInfo = new PetInfo();
        }

        [System.Serializable]
        public class PetStatusExtraResponse
        {
            public string minutes_since_last_feeding;
            public string minutes_since_last_activity;
        }

        [System.Serializable]
        public class SetPetStatusResponse
        {
            public string message;
        }

        public class GetPetStatusResponse
        {
            public string health;
            public string mood;
            public PetStatusExtraResponse extra;
        }

        [System.Serializable]
        public class ResetPetStatusResponse
        {
            public string message;
        }

        [System.Serializable]
        public class IncreasePetMoodResponse
        {
            public string message;
            public string mood;
        }

        [System.Serializable]
        public class Guess
        {
            public string name;
            public int rank;
        }

        [System.Serializable]
        public class RecognizeFoodResponse
        {
            public List<Guess> topMatches;
        }

    }
}

