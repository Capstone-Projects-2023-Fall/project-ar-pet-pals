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

        [System.Serializable]
        public class ListFoodOptionsResponse
        {
            public List<string> foodOptions;
        }

        [System.Serializable]
        public class GetNutritionInfoResponse
        {
            public string food;
            public NutritionInfo nutritionInfo;
        }

        [System.Serializable]
        public class NutritionInfo
        {
            public double calories;
            public double serving_size_g;
            public double fat_total_g;
            public double fat_saturated_g;
            public double protein_g;
            public double sodium_mg;
            public double potassium_mg;
            public double cholesterol_mg;
            public double carbohydrates_total_g;
            public double fiber_g;
            public double sugar_g;
        }

        [System.Serializable]
        public class GetFoodCategoryResponse {
            public string category;
        }

        [System.Serializable]
        public class UpdateUserResponse
        {
            public string message;
        }

        [System.Serializable]
        public class DeleteUserResponse
        {
            public string message;
        }
        
        [System.Serializable]
        public class LeaderBoardInfo
        {
            public string username;
            public int score;
        }

        [System.Serializable]
        public class GetLeaderBoardResponse
        {
            public List<LeaderBoardInfo> leaderboardList;
        }


        [System.Serializable]
        public class SendNotificationResponse
        {
            public string message;
        }
        [System.Serializable]
        public class SaveBirthdayResponse
        {
            public string message;
        }
        [System.Serializable]
        public class CheckAccountActivityResponse
        {
            public string message;
        }
        [System.Serializable]
        public class DeletePetResponse
        {
            public string message;
        }
    }
}

