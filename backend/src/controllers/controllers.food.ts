
// import { decode } from "https://deno.land/x/djwt@v2.4/mod.ts";
import db from "../database/database.connection.ts";
// import {PetSchema} from "../schema/schema.pet.ts";
// import { ClarifaiStub, grpc } from "https://deno.land/x/clarifai_grpc_nodejs/clarifai-nodejs-grpc.stub.js";
// import Clarifai from 'https://cdn.skypack.dev/clarifai-nodejs-grpc';

// import { decode as base64Decode } from "https://deno.land/std/encoding/base64.ts";

// import { getUserIdFromHeaders, displayNumber, calculateTimeDifferentInMinutes } from "../utils/utils.utils.ts";
// const Pets = db.collection<PetSchema>("pets");
// const MAX_HEALTH = 100;
// const MAX_MOOD = 100;
// enum RESET_TYPE {
//     ALL = 0,
//     HEALTH,
//     MOOD
// }

// route functions --

export const recognizeFood = async ( { request, response }: { request: any; response: any } ) => {
    const { image64String } = await request.body().value;

    if(!image64String){
        response.body = {
            "message": "Image not provided"
        }
        response.status = 400
        return
    }

    let results = await processImage(image64String);
	results = JSON.parse(results);
	
	// Return top 3 food matches
	const matches = results.outputs[0].data.concepts;
	let topMatches = matches.sort((a, b) => b.value - a.value);
	topMatches = topMatches.splice(0, 3);
	topMatches = topMatches.map((match, index) => ({
		name: match.name,
		rank: index + 1
	}));
	topMatches = JSON.stringify(topMatches, null, 2);
	topMatches = JSON.parse(topMatches);
	
    response.body = {
        "message": "food recognized",
		topMatches
    }
}

// eat food

// ---

// Helper functions --

const PAT = 'cc7efd10868f4d2882da065a31558673';
const USER_ID = 'clarifai';       
const APP_ID = 'main';
const MODEL_ID = 'food-item-recognition';
const MODEL_VERSION_ID = '1d5fd481e0cf4826aa72ec3ff049e044';    
const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

async function processImage(image64String) {
  const raw = JSON.stringify({
      "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "base64": image64String
                  }
              }
          }
      ]
  });

  const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
      },
      body: raw
  };
	  
  const response = await fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions);
  if (!response.ok) throw new Error(`Error, status: ${response.status}`);

  return response.text();
}