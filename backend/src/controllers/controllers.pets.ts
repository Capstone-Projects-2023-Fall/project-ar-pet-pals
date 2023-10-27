
import { decode } from "https://deno.land/x/djwt@v2.4/mod.ts";
import db from "../database/database.connection.ts";
import {PetSchema} from "../schema/schema.pet.ts";

import { getUserIdFromHeaders } from "../utils/utils.utils.ts";
const Pets = db.collection<PetSchema>("pets");




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

        }
    } 

    await Pets.insertOne(pet)

    
    response.body = {
        "message": "pet created successfully",
        "petInfo": {
            id: pet._id,
            name: pet.name
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
        "status": pet.status
    }
}
