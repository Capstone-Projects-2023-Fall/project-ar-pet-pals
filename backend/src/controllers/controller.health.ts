import { Router } from "https://deno.land/x/oak/mod.ts";
import { decode } from "https://deno.land/x/djwt@v2.4/mod.ts";
import db from "../database/database.connection.ts";
{ ObjectId } from "https://deno.land/x/mongo@v0.32.0/bson.ts";
import { getUserIdFromHeaders, displayNumber, calculateTimeDifferentInMinutes } from "../utils/utils.utils.ts";

//assuming the Health Rating is associated with the recognized food in the healthScores array
export const getHealthRating = async ({ request, response }: { request: any; response: any }) => {
    try {
        //get recognized food from the request
        const recognizedFood = (await request.body().value)?.recognizedFood;

        if (!recognizedFood) {
            response.status = 400;
            response.body = { error: 'Recognized food not provided' };
            return;
        }

        //fetch healthScores from the database 
        const healthScores = await db.collection("healthScores").find().toArray();

        //find the health score based on the recognized food
        const matchingHealthScore = healthScores.find((score) => score.Food === recognizedFood);

        //get health rating if match is found, otherwise set to null
        const healthRating = matchingHealthScore ? matchingHealthScore["Health Rating"] : null;

        //send response
        response.status = 200;
        response.body = {
            "recognizedFood": recognizedFood,
            "healthRating": healthRating,
        };
    } catch (error) {
        console.error('Error processing health for recognized food:', error);
        response.status = 500;
        response.body = { error: 'Internal Server Error' };
    }
};






















/*
import fetch from 'node-fetch';
import { getUserIdFromHeaders } from "../utils/utils.utils.ts";
import { HealthScoreSchema } from "../schema/schema.health.ts";
import { recognizeFood } from "./controller.food.ts";

const apiUrl = 'https://existing-api-service-url'; //replace with actual URL of existing API service

export const processHealthForRecognizedFood = async ({ request, response }: { request: any; response: any }) => {
    const headers: Headers = request.headers;
    let userId = getUserIdFromHeaders(headers);

    try {
        //call the recognizeFood function to get the recognized food string
        const recognizedFoodResponse = await recognizeFood({ request, response });

        //assuming the output of recognizeFood is available in recognizedFoodResponse.body.topMatches
        const topMatches = recognizedFoodResponse.body.topMatches;

        //fetch corresponding Health Rating from the "Food/health score" collection in MongoDB
        const healthScoreResponse = await fetch(`${apiUrl}/health-scores/${userId}?food=${encodeURIComponent(topMatches[0].name)}`);
        if (!healthScoreResponse.ok) {
            response.body = {
                "message": `Could not find health score for the recognized food: ${topMatches[0].name}`
            }
            response.status = 400;
            return;
        }

        const healthScores: HealthScoreSchema[] = await healthScoreResponse.json();

        //assuming the Health Rating is available in the first document of the healthScores array
        const healthRating = healthScores.length > 0 ? healthScores[0]["Health Rating"] : null;

        response.status = 200;
        response.body = {
            "recognizedFood": topMatches[0].name,
            "healthRating": healthRating,
        };
    } catch (error) {
        console.error('Error processing health for recognized food:', error);
        response.status = 500;
        response.body = { error: 'Internal Server Error' };
    }
}
 assumes that the health score for a particular food item is stored in an array of 
 documents with the property name "Food" in the collection, and the health rating is stored
  in the property "Health Rating"
*/
