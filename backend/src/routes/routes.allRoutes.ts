import { Router } from "https://deno.land/x/oak/mod.ts";
import {signin, signup, setUserName, getUserName} from "../controllers/controllers.users.ts";
import {setPetName, getPetName, setPetStatus, getPetStatus} from "../controllers/controllers.pets.ts";
import {authourized} from "../middlewares/middlewares.isAuthorized.ts"

const home = async({request, response}:{request:any;response:any}) => {
   response.body = { message: "Hello"}
      
};
const router = new Router();

//UNAUTHORIZED ROUTES
router.get("/", home)
router.post("/api/signup", signup )
router.post("/api/signin",signin)

// AUTHORIZED ROUTES
router.post("/api/pet/name", authourized, setPetName  )
router.get("/api/pet/name", authourized, getPetName  )

router.post("/api/pet/status", authourized, setPetStatus  )
router.get("/api/pet/status", authourized, getPetStatus  )

router.post("/api/user/name", authourized, setUserName  )
router.get("/api/user/name", authourized, getUserName  )
export default router;
