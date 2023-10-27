import { verify } from "https://deno.land/x/djwt@v2.4/mod.ts";
import  key  from "../utils/utils.apiKey.ts";


export const verifyToken = async ({request, response}:{request:any;response:any}) => {
    const { token } = await request.body().value;

    if(!token){
        response.body = {
            message: "No token provided"
        }
        response.status = 400
        return
    }
    try{
        const payload = await verify(token, key )

        response.status = 200
        response.body = {
            isValid: true
        }
        return
    }catch(e){
        console.log("ERROR "+ e)
        response.status = 400
        response.body = {
            isValid: false
        }
    }
    

  
    
}