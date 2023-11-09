
import { decode } from "https://deno.land/x/djwt@v2.4/mod.ts";
import db from "../database/database.connection.ts";
import {PetSchema} from "../schema/schema.pet.ts";

import { getUserIdFromHeaders, displayNumber, calculateTimeDifferentInMinutes } from "../utils/utils.utils.ts";
const Pets = db.collection<PetSchema>("pets");
const MAX_HEALTH = 100;
const MAX_MOOD = 100;
enum RESET_TYPE {
    ALL = 0,
    HEALTH,
    MOOD
}

export const recognizeFood = async ( { request, response }: { request: any; response: any } ) => {
    const { imageString } = await request.body().value;

    if(!imageString){
        response.body = {
            "message": "Image not provided"
        }
        response.status = 400
        return
    }

    // send image string to "processImage" function

    // return top 5 choices in response.body
    
    response.body = {
        "message": "pet name updated successfully"
    }
}

// eat food

// ...