import { Router } from "https://deno.land/x/oak/mod.ts";
import {signin, signup, getUserName, getUserInfo, updateUser } from "../controllers/controllers.users.ts";
import {setPetName, getPetName, setPetStatus, getPetStatus, resetPetStatus, createPet, setPetChoice, getPetChoice, } from "../controllers/controllers.pets.ts";
import { recognizeFood } from "../controllers/controllers.food.ts";
import {authourized} from "../middlewares/middlewares.isAuthorized.ts"
import { verifyToken } from "../controllers/controllers.token.ts";
import {getHealthRating } from "../controllers/controllers.health.ts";
import { updateStepCount, checkStepGoal, updateStepGoal } from "../controllers/controllers.steps.ts";
import { leaderboardList } from "../controllers/controllers.leaderboard.ts";


const home = async({request, response}:{request:any;response:any}) => {
   response.body = { message: "go to https://capstone-projects-2023-fall.github.io/project-ar-pet-pals/docs/api-specification/api for documentation"}
      
};
const router = new Router();

//UNAUTHORIZED ROUTES
router.get("/", home)
router.post("/api/signup", signup )
router.post("/api/signin",signin)

// AUTHORIZED ROUTES

//createPet
router.post("/api/pet/create", authourized, createPet  )

//name
router.post("/api/pet/name", authourized, setPetName  )
router.get("/api/pet/name", authourized, getPetName  )

//status
router.post("/api/pet/status", authourized, setPetStatus  )
router.get("/api/pet/status", authourized, getPetStatus  )
router.post("/api/pet/status/reset", authourized, resetPetStatus  )


//username
router.get("/api/user/name", authourized, getUserName  )
router.post("/api/user/update", authourized, updateUser  )


//pet-choice
router.post("/api/pet/choice", authourized, setPetChoice  )
router.get("/api/pet/choice", authourized, getPetChoice )


//userInfo
router.get("/api/user", authourized, getUserInfo  )

// Update Step Goal
router.put("/api/user/step-goal", authourized, updateStepGoal);

// Update Step Count
router.put("/api/user/step-count", authourized, updateStepCount);

// Check Step Goal
router.get("/api/user/check-step-goal", authourized, checkStepGoal);

//verifies a token
router.post("/api/token/verify", verifyToken)

// food-related routes --

// recognize food in image
router.post("/api/food/recognize", authourized, recognizeFood)

// get nutrition info for food
router.post("/api/food/healthRating", authourized, getHealthRating);


// get user list 
router.get("/api/leaderboard/list", leaderboardList)

export default router;
