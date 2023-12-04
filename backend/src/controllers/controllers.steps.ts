//import { Users } from "../database/database.connection.ts";
import Users from "../database/database.connection.ts";
import { ObjectId } from "https://deno.land/x/mongo/mod.ts"; 

// Define StepType interface or use 'any'
interface StepType {
  timestamp: Date;
  steps: number;
  healthScore: number;
  total: number;
  // Add other properties as needed
}
export const updateStepCount = async ({ request, response,}: { request: any; response: any;}) => {
  try {
      const { userId, stepCount } = await request.body().value;

      // Fetch the user from the database based on userId
      const user = await Users.findOne({ _id: userId });

      if (!user) {
          response.status = 404;
          response.body = {
              success: false,
              message: "User not found",
          };
          return;
      }

      // Update user's step count
      user.dailyStepCount += stepCount;
      user.totalStepCount += stepCount;

      // Update weekly step count (assuming steps have timestamps)
      const today = new Date();
      const sevenDaysAgo = new Date(today);
      sevenDaysAgo.setDate(today.getDate() - 7);

      // Filter steps within the past seven days
      const stepsWithinWeek = user.steps.filter(
          (step) => step.timestamp >= sevenDaysAgo
      );

      // Calculate the total steps within the past seven days
      user.weeklyStepCount = stepsWithinWeek.reduce(
          (total, step) => total + step.steps,
          0
      );

      // Save the updated user data
      const result = await Users.updateOne({ _id: userId }, { $set: user });

      response.status = 200;
      response.body = {
          success: true,
          message: "Step count updated successfully",
          data: result, // Include any additional data you want to send back
      };
  } catch (error) {
      response.status = 500;
      response.body = {
          success: false,
          message: "Internal server error",
      };
  }
};

export const checkStepGoal = async (userId: ObjectId) => {
  const user = await Users.findOne({ _id: userId });

  if (user.dailyStepCount >= user.dailyStepGoal) {
    // User met the daily step goal
    return true;
  } else {
    // User did not meet the daily step goal
    return false;
  }
};

export const calculateAverageHealthScore = async (userId: ObjectId) => {
  const user = await Users.findOne({ _id: userId });

  // Calculate the weekly step count
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  // Filter steps within the past seven days
  const stepsWithinWeek = user.steps.filter(
    (steps) => steps.timestamp >= sevenDaysAgo
  );

  // Calculate the total steps and health score within the past seven days
  const totalSteps: number = stepsWithinWeek.reduce((total: number, step: StepType) => total + step.steps, 0);
  const totalHealthScore: number = stepsWithinWeek.reduce((total: number, step: StepType) => total + step.healthScore, 0);

  // Calculate the average health score
  const averageHealthScore: number = totalHealthScore / (totalSteps / 1000); // Specify the type as number

  return averageHealthScore;
  };
// New function to update step goal
export const updateStepGoal = async (userId: ObjectId, newStepGoal: number) => {
  const user = await Users.findOne({ _id: userId });

  // Update user's step goal
  user.dailyStepGoal = newStepGoal;

  // Save the updated user data
  const result = await Users.updateOne({ _id: userId }, { $set: user });

  return result;
};
