import db from "../database/database.connection.ts";

// Route Functions --

export const recognizeFood = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const { image64String } = await request.body().value;

  if (!image64String) {
    response.status = 400;
		response.body = {
      message: "Image not provided",
    };
    return;
  }

  let results = await processImage(image64String);
	results = JSON.parse(results);
	
	if (results.status == 400) {
		response.status = results.status;
		response.body = {
			message: `Image Recognition Error: ${results.message}`,
			image64String: image64String
		};
		return;
	}

  
  // Return top 3 food matches
  const matches = results.outputs[0].data.concepts;
  let topMatches = matches.sort((a, b) => b.value - a.value);
  topMatches = topMatches.splice(0, 3);
  topMatches = topMatches.map((match, index) => ({
    name: match.name,
    rank: index + 1,
  }));
  topMatches = JSON.stringify(topMatches, null, 2);
  topMatches = JSON.parse(topMatches);

  response.status = 200;
	response.body = {
    topMatches,
  };


};

export const getHealthRating = async ({ request, response }: { request: any; response: any }) => {
    try {
				const { food } = await request.body().value;

        if (!food) {
            response.status = 400;
            response.body = { message: 'No food provided.' };
            return;
        }
				
				// query food's health rating from database
				const collection = await db.collection("healthScore");
				const query = { Food: food };
				const result = await collection.find(query).toArray();
				const healthRating = result[0]["Health Rating"];

        response.status = 200;
        response.body = {
            "food": food,
            "healthRating": healthRating
        };
				
				
    } catch (error) {
        response.status = 400;
        response.body = {
					message: 'Could not process health rating.',
					error: error.message
				};
    }
};

export const getNutritionInfo = async ({ request, response }: { request: any; response: any }) => {
    try {
				const { food } = await request.body().value;

        if (!food) {
            response.status = 400;
            response.body = { message: 'No food provided.' };
            return;
        }
				
				const collection = await db.collection("nutrition_info");
				const query = { name: food };
				const result = await collection.find(query).toArray();
				const { _id, name, ...info }  = result[0];
				
				response.status = 200;
        response.body = {
            "food": name,
						"nutritionInfo": info
        };

    } catch (error) {
        response.status = 400;
        response.body = {
					message: 'Could not process nutrition info.',
					error: error.message
				};
    }
};

export const listFoodOptions = async ({ response }: { response: any }) => {
    try {				
				// query all available foods in the database
				const collection = await db.collection("healthScore");
				const projection = { Food: 1, _id: 0 };
				const result = await collection.find({}, { projection }).toArray();
				
				const foodOptions: string[] = result.map(option => option.Food);

        response.status = 200;
        response.body = {
            "foodOptions": foodOptions
        };
				
				
    } catch (error) {
        response.status = 400;
        response.body = {
					message: 'Could not process nutrition info.',
					error: error.message,
				};
    }
};

export const getCategoryInfo = async (context) => {

    try {
      const { food } = context.params;
      if (!food) {
        context.response.status = 400;
        context.response.body = { message: 'No food provided.' };
        return;
      }

        // query category info from the database
      const collection = await db.collection("healthScore");
      const query = { Food: food };
      const result = await collection.find(query).toArray();
      const categoryInfo = result[0]["Category"];

      context.response.status = 200;
      context.response.body = {
        food: food,
        categoryInfo: categoryInfo
      };
    } catch (error) {
      context.response.status = 400;
      context.response.body = {
        message: 'Could not process category information.',
        error: error.message,
      }; 

    }
};

// Helper functions --

const PAT = "cc7efd10868f4d2882da065a31558673";
const USER_ID = "clarifai";
const APP_ID = "main";
const MODEL_ID = "food-item-recognition";
const MODEL_VERSION_ID = "1d5fd481e0cf4826aa72ec3ff049e044";
const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";

async function processImage(image64String) {
  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            base64: image64String,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  const response = await fetch(
    "https://api.clarifai.com/v2/models/" +
      MODEL_ID +
      "/versions/" +
      MODEL_VERSION_ID +
      "/outputs",
    requestOptions
  );
	
	if (!response.ok) {
		const error = {
			status: response.status,
			message: response.statusText
		};
		
		return JSON.stringify(error);
	}

  return response.text();
}
