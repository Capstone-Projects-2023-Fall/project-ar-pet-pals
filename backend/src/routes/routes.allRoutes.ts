import { Router } from "https://deno.land/x/oak/mod.ts";
import {signin, signup, getUserName, getUserInfo, updateUser, deleteUser, saveBirthday } from "../controllers/controllers.users.ts";
import {setPetName, getPetName, setPetStatus, getPetStatus, resetPetStatus, createPet, setPetChoice, getPetChoice, } from "../controllers/controllers.pets.ts";
import {setPetName, getPetName, setPetStatus, getPetStatus, resetPetStatus, createPet, setPetChoice, getPetChoice, increasePetMood, resetPetActivities } from "../controllers/controllers.pets.ts";
import { recognizeFood, getHealthRating, getNutritionInfo, listFoodOptions } from "../controllers/controllers.food.ts";
import {authourized} from "../middlewares/middlewares.isAuthorized.ts"
import { verifyToken } from "../controllers/controllers.token.ts";
import { updateStepCount, checkStepGoal,getStepCount, updateStepGoal, resetDailyStepCountForAllUsers, resetWeeklyStepCountForAllUsers } from "../controllers/controllers.steps.ts";
import { leaderboardList } from "../controllers/controllers.leaderboard.ts";
import { checkAccountActivity } from "../controllers//controllers.pets.ts";


const home = async({request, response}:{request:any;response:any}) => {
   response.body = { message: "go to https://capstone-projects-2023-fall.github.io/project-ar-pet-pals/docs/api-specification/api for documentation"}
      
};
const router = new Router();

//UNAUTHORIZED ROUTES
router.get("/", home)

// AUTHORIZED ROUTES

// -- User --

// Login and Registration
router.post("/api/signup", signup)
router.post("/api/signin", signin)
router.post("/api/token/verify", verifyToken)

// User Management
router.get("/api/user/name", authourized, getUserName)
router.put("/api/user", authourized, updateUser)
router.delete("/api/user", authourized, deleteUser)
router.get("/api/user", authourized, getUserInfo)

// Update Step Goal
router.put("/api/user/step-goal", authourized, updateStepGoal);

// Update Step Count
router.put("/api/user/step-count", authourized, updateStepCount);

// get step count
router.get("/api/user/step-count", authourized, getStepCount);

// Check Step Goal
router.get("/api/user/check-step-goal", authourized, checkStepGoal);

router.get("/api/user/reset-daily-step-count",authourized, resetDailyStepCountForAllUsers )
router.get("/api/user/reset-weekly-step-count", authourized, resetWeeklyStepCountForAllUsers )
// -- Pet --

// Create
router.post("/api/pet/create", authourized, createPet  )


//check account activity
router.get("/api/checkAccountActivity", authourized, checkAccountActivity);

//name
router.post("/api/pet/name", authourized, setPetName  )
router.get("/api/pet/name", authourized, getPetName  )

// Status
router.post("/api/pet/status", authourized, setPetStatus  )
router.get("/api/pet/status", authourized, getPetStatus  )
router.post("/api/pet/status/reset", authourized, resetPetStatus  )
router.put("/api/pet/status/increaseMood", authourized, increasePetMood  )
router.put("/api/pet/activities/reset", authourized, resetPetActivities  )

// Choice
router.post("/api/pet/choice", authourized, setPetChoice  )
router.get("/api/pet/choice", authourized, getPetChoice )

// -- Food --

// Recognize
router.post("/api/food/recognize", authourized, recognizeFood)


//user birthday
router.post("/api/savebirthday", authourized,saveBirthday) 

// Update Step Goal
router.put("/api/user/step-goal", authourized, updateStepGoal);

// Nutrition Info
router.post("/api/food/healthRating", authourized, getHealthRating);
router.post("/api/food/nutritionInfo", authourized, getNutritionInfo);


// List Possible Foods
router.get("/api/food/listFoodOptions", authourized, listFoodOptions);

// -- Leaderboard --

// get leaderboard user list 
router.get("/api/leaderboard/list", authourized, leaderboardList)


// food-related routes --


export default router;
