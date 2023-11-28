
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

// health decrease per hour = -1
const HEALTH_DECREASE_PER_MIN = 0.0167; // 1 / 60
const MOOD_DECREASE_PER_MIN = 0.0167;


export const setPetName =async ({request, response}:{request:any;response:any}) => {
    const { name } = await request.body().value;

    if(!name){
        response.body = {
            "message": "Name not provided"
        }
        response.status = 400
        return
    }
   
    const headers: Headers = request.headers
    let userId = getUserIdFromHeaders(headers);

    const pet = await Pets.findOne({ user_id: userId });

    if(!pet){
        response.body = {
            "message": "Could not find a pet for your user's id"
        }
        response.status = 400
        return
    }


    await Pets.updateOne({ _id: pet._id}, { $set: { name: name}})
    

    response.body = {
        "message": "pet name updated successfully"
    }
}

export const getPetName =async ({request, response}:{request:any;response:any}) => {
    const headers: Headers = request.headers
    let userId = getUserIdFromHeaders(headers);

    const pet = await Pets.findOne({ user_id: userId });

    if(!pet){
        response.body = {
            "message": "Could not find a pet for your user's id"
        }
        response.status = 400
        return
    }

    response.status = 200
    response.body = {
        "name": pet.name
    }
}


export const createPet =async ({request, response}:{request:any;response:any}) => {
    
    const headers: Headers = request.headers
    let userId = getUserIdFromHeaders(headers);

    const pet_exist = await Pets.findOne({ user_id: userId });

    if(pet_exist){
        response.body = {
            "message": "Pet already exists"
        }
        response.status = 400
        return
    }

    const pet: PetSchema = {
        user_id: userId,
        name: "default_name", // is this a default name for all pet? alex: yeah
        choice: "default_choice",
        status: {
            lastActivity: Date.now(),
            lastFeeding: Date.now(),
            lastCalculatedHealth: Date.now(),
            lastCalculatedMood: Date.now(),
            health: MAX_HEALTH,
            mood: MAX_MOOD
        }
    } 

    await Pets.insertOne(pet)

    
    response.body = {
        "message": "pet created successfully",
        "petInfo": {
            id: pet._id,
            name: pet.name,
            status: {
                health: displayNumber(pet.status.health),
                mood: displayNumber(pet.status.mood)
            },
        }
    }
}



export const setPetChoice =async ({request, response}:{request:any;response:any}) => {
    //get user id
    //find pet status
    // update pet status

    const { choice } = await request.body().value;

    if(!choice){
        response.body = {
            "message": "No choice provided"
        }
        response.status = 400
        return
    }

    const headers: Headers = request.headers
    let userId = getUserIdFromHeaders(headers);

    const pet = await Pets.findOne({ user_id: userId });

    if(!pet){
        response.body = {
            "message": "Could not find a pet for your user's id"
        }
        response.status = 400
        return
    }

   
    await Pets.updateOne({ _id: pet._id}, { $set: { choice: choice }})
    

    response.body = {
        "message": "pet choice updated successfuly"
    }
}

export const getPetChoice =async ({request, response}:{request:any;response:any}) => {
    
    const headers: Headers = request.headers
    let userId = getUserIdFromHeaders(headers);

    const pet = await Pets.findOne({ user_id: userId });

    if(!pet){
        response.body = {
            "message": "Could not find a pet for your user's id"
        }
        response.status = 400
        return
    }

    response.status = 200
    response.body = {
        "choice": pet.choice
    }
}
export const setPetStatus =async ({request, response}:{request:any;response:any}) => {
    //get user id
    //find pet status
    // update pet status

    const { health, mood } = await request.body().value;

    if(!health && !mood){
        response.body = {
            "message": "No status provided"
        }
        response.status = 400
        return
    }

    const headers: Headers = request.headers
    let userId = getUserIdFromHeaders(headers);

    const pet = await Pets.findOne({ user_id: userId });

    if(!pet){
        response.body = {
            "message": "Could not find a pet for your user's id"
        }
        response.status = 400
        return
    }

    pet.status.health = Math.max(Math.min(health || pet.status.health, MAX_HEALTH), 0);
    pet.status.mood = Math.max(Math.min(mood || pet.status.mood, MAX_MOOD), 0);


    await Pets.updateOne({ _id: pet._id}, { 
        $set: { 
            status: pet.status 
        }
    });
    
    response.body = {
        "message": "pet status updated successfuly",
    }
}

export const getPetStatus =async ({request, response}:{request:any;response:any}) => {
    
    // Update pet's health and mood before returning the pet status
    // Testing: Pet's health will decrease 1 hp / hour, If users didn't feed the pet for 1 day, pet's health will decrease 24 hp. The same apply to mood
    // Based on lastActivity (for mood) and lastFeeding (for health) compared to the current time.
    // The fields lastCalculatedHealth and lastCalculatedMood are  updated to the current time after calculating
    

    const headers: Headers = request.headers
    let userId = getUserIdFromHeaders(headers);

    const pet = await Pets.findOne({ user_id: userId });

    if(!pet){
        response.body = {
            "message": "Could not find a pet for your user's id"
        }
        response.status = 400
        return
    }

    // Calculating pet's health and mood here
    
    let minutesSinceLastFeeding = calculateTimeDifferentInMinutes(pet.status.lastCalculatedHealth);
    let minutesSinceLastActivity = calculateTimeDifferentInMinutes(pet.status.lastCalculatedMood);
    if (minutesSinceLastFeeding >= 1) {
        pet.status.health = Math.max(0, pet.status.health - HEALTH_DECREASE_PER_MIN * minutesSinceLastFeeding);
        pet.status.lastCalculatedHealth = Date.now();
    }
    if (minutesSinceLastActivity >= 1) {
        pet.status.mood = Math.max(0, pet.status.mood - MOOD_DECREASE_PER_MIN * minutesSinceLastActivity);
        pet.status.lastCalculatedMood = Date.now();
    }

    // Update
    await Pets.updateOne({ _id: pet._id}, { 
        $set: { 
            status: pet.status 
        }
    });

    response.status = 200
    response.body = {
        health: displayNumber(pet.status.health),
        mood: displayNumber(pet.status.mood),
        // Additional info: not sure if notification logic needs them
        extra: {
            minutes_since_last_feeding: displayNumber(calculateTimeDifferentInMinutes(pet.status.lastFeeding)),
            minutes_since_last_activity: displayNumber(calculateTimeDifferentInMinutes(pet.status.lastActivity))
        }
        
    }
}

// Reset pet status
// input: reset_type (0: all, 1: health, 2: mood)
export const resetPetStatus =async ({request, response}:{request:any;response:any}) => {
    
    const headers: Headers = request.headers
    let userId = getUserIdFromHeaders(headers);

    const pet = await Pets.findOne({ user_id: userId });

    if(!pet){
        response.body = {
            "message": "Could not find a pet for your user's id"
        }
        response.status = 400
        return
    }

    // Reset
    const { reset_type } = await request.body().value;
    if (reset_type == RESET_TYPE.ALL) {
        pet.status = {
            lastActivity: Date.now(),
            lastFeeding: Date.now(),
            lastCalculatedHealth: Date.now(),
            lastCalculatedMood: Date.now(),
            health: MAX_HEALTH,
            mood: MAX_MOOD
        }
    }
    else if (reset_type == RESET_TYPE.HEALTH) {
        pet.status = {
            lastFeeding: Date.now(),
            lastCalculatedHealth: Date.now(),
            health: MAX_HEALTH,
        }
    }
    else {
        pet.status = {
            lastActivity: Date.now(),
            lastCalculatedMood: Date.now(),
            mood: MAX_MOOD
        }
    }

    await Pets.updateOne({ _id: pet._id}, { 
        $set: { 
            status: pet.status 
        }
    });
    response.body = {
        "message": "pet status updated successfuly",
    }
}

