
import { decode } from "https://deno.land/x/djwt@v2.4/mod.ts";
import db from "../database/database.connection.ts";
import {PetSchema} from "../schema/schema.pet.ts";
import {StatusSchema} from "../schema/schema.status.ts";

import { getUserIdFromHeaders } from "../utils/utils.utils.ts";
const Pets = db.collection<PetSchema>("pets");
const PetStatus = db.collection<StatusSchema>("pets_status");
const MAX_HEALTH = 100;
const MAX_MOOD = 100;
enum RESET_TYPE {
    ALL = 0,
    HEALTH,
    MOOD
}



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

    const status_id = await PetStatus.insertOne({
        lastActivity: Date.now(),
        lastFeeding: Date.now(),
        lastCalculatedHealth: Date.now(),
        lastCalculatedMood: Date.now(),
        health: MAX_HEALTH,
        mood: MAX_MOOD
    });
    const pet_status = await PetStatus.findOne({_id: status_id});

    const pet: PetSchema = {
        user_id: userId,
        name: "default_name", // is this a default name for all pet? alex: yeah
        choice: "default_choice",
        status: pet_status
    } 

    await Pets.insertOne(pet)

    
    response.body = {
        "message": "pet created successfully",
        "petInfo": {
            id: pet._id,
            name: pet.name,
            status: {
                id: pet_status._id,
                health: pet_status.health,
                mood: pet_status.mood
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

    const { status } = await request.body().value;

    if(!status){
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

   
    await Pets.updateOne({ _id: pet._id}, { $set: { status: status }})
    

    response.body = {
        "message": "pet status updated successfuly"
    }
}

export const getPetStatus =async ({request, response}:{request:any;response:any}) => {
    
    // Update pet's health and mood before returning the pet status
    // 1 hour = -1 hp, If the pet didn't eat in 24 hours, health -= 24 hp
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

    response.status = 200
    response.body = {
        "status": pet.status
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
    }
    else if (reset_type == RESET_TYPE.HEALTH) {

    }
    else {

    }


    response.status = 200
    response.body = {
        "status": pet.status
    }
}
