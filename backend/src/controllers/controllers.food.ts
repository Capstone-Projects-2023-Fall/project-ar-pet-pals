// Route Functions --

// Given a string containing a base64 encoding of an image,
// return the AI models top 3 guesses of the food in the image.
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
		topMatches
    }


// TODO: Add route to return the nutrition info of a given food item
 export const getHealthRating = async ({ request, response }: { request: any; response: any }) => {
    try {
        //get recognized food from the request
        const fillerFoodString = (await request.body().value)?.fillerFoodString;

        if (!fillerFoodString) {
            response.status = 400;
            response.body = { error: 'Recognized food (filler food string) not provided' };
            return;
        }

        //fetch healthScores from the database 
        const healthScores = await db.collection("healthScores").find().toArray();

        //find the health score based on the recognized food
        const matchingHealthScore = healthScores.find((score) => score.Food === fillerFoodString);

        //get health rating if match is found, otherwise set to null
        const healthRating = matchingHealthScore ? matchingHealthScore["Health Rating"] : null;

        //send response
        response.status = 200;
        response.body = {
            "recognizedFood": fillerFoodString,
            "healthRating": healthRating,
        };
    } catch (error) {
        console.error('Error processing health for recognized food:', error);
        response.status = 500;
        response.body = { error: 'Internal Server Error' };
    }
    //export the function
//export { getHealthRating }
 }

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
}

