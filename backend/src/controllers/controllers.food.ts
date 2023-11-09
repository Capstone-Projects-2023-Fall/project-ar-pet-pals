
import { decode } from "https://deno.land/x/djwt@v2.4/mod.ts";
import db from "../database/database.connection.ts";
import {PetSchema} from "../schema/schema.pet.ts";
import { ClarifaiStub, grpc } from "https://deno.land/x/clarifai_grpc_nodejs/clarifai-nodejs-grpc.stub.js";
// import { decode as base64Decode } from "https://deno.land/std/encoding/base64.ts";

import { getUserIdFromHeaders, displayNumber, calculateTimeDifferentInMinutes } from "../utils/utils.utils.ts";
const Pets = db.collection<PetSchema>("pets");
const MAX_HEALTH = 100;
const MAX_MOOD = 100;
enum RESET_TYPE {
    ALL = 0,
    HEALTH,
    MOOD
}

// route functions --

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
    processImage(imageString);

    // return top 5 choices in response.body
    
    response.body = {
        "message": "pet name updated successfully"
    }
}

// eat food

// ---

// Helper functions --

const PAT = "cc7efd10868f4d2882da065a31558673";
const USER_ID = "clarifai";
const APP_ID = "main";
const MODEL_ID = "food-item-recognition";
const MODEL_VERSION_ID = "1d5fd481e0cf4826aa72ec3ff049e044";

const stub = ClarifaiStub.grpc();

function processImage(imageBase64: string): void {
    const metadata = new grpc.Metadata();
    metadata.set("authorization", `Key ${PAT}`);
  
    stub.PostModelOutputs(
      {
        user_app_id: {
          user_id: USER_ID,
          app_id: APP_ID
        },
        model_id: MODEL_ID,
        version_id: MODEL_VERSION_ID,
        inputs: [
          { data: { image: { base64: imageBase64 } } }
        ]
      },
      metadata,
      (err, response) => {
        if (err) {
          console.error(err);
          return;
        }
  
        if (!response || response.status.code !== 10000) { // Check if the response code is SUCCESS
          console.error("Error: " + response?.status?.description);
          return;
        }
  
        // Process the response
        if (response) {
          const outputs = response.outputs;
          outputs.forEach((output: any) => {
            const concepts = output.data.concepts;
  
            let topConceptName = "";
            let topConceptValue = 0;
  
            concepts.forEach((concept: any) => {
              const name = concept.name;
              const value = concept.value;
  
              if (value > topConceptValue) {
                topConceptName = name;
                topConceptValue = value;
              }
            });
  
            // Output the top concept name
            console.log(topConceptName);
  
            // TODO: if the distance between concepts is too small, print "unknown"
          });
        } else {
          console.log("No response");
        }
      }
    );
  }

