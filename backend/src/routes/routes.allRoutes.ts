import { Router } from "https://deno.land/x/oak/mod.ts";
import {signin, signup} from "../controllers/controllers.users.ts";
import protectedResource from "../controllers/controllers.protectedResources.ts";
import {authourized} from "../middlewares/middlewares.isAuthorized.ts"

const lol = async({request, response}:{request:any;response:any}) => {
   response.body = { message: "Hello"}
      
};
const router = new Router();

router.get("/", lol)
router.post("/api/signup", signup )
      .post("/api/signin",signin)
router.get("/test", authourized,  protectedResource)
export default router;