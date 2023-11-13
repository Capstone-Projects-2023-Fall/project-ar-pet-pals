const fs = require('fs');
const parse = require('csv-parse/lib/sync');


const csvFilePath = './health_score.csv';

exports.recognizeHealth = async ({ request, response }) => {
  try {
    //read CSV file
    const csvData = fs.readFileSync(csvFilePath, 'utf-8');

    //parse CSV data
    const records = parse(csvData, { columns: true, skip_empty_lines: true });

    //extract recognized food from the request body (assuming it's there)
    const { recognizedFood } = await request.body().value;

    //find the corresponding health rating in the CSV data
    const healthScore = records.find(record => record.Food === recognizedFood);

    if (healthScore) {
      response.status = 200;
      response.body = {
        recognizedFood,
        healthRating: parseInt(healthScore['Health Rating']),
      };
    } else {
      response.status = 404;
      response.body = { error: 'Health information not found for the recognized food.' };
    }
  } catch (error) {
    console.error('Error processing health for recognized food:', error);
    response.status = 500;
    response.body = { error: 'Internal Server Error' };
  }
}
