// controllers.steps.ts

import { Users } from "../database/database.connection.ts";
import { ObjectId } from "https://deno.land/x/mongo@v0.30.0/mod.ts";

export const updateStepCount = async (userId: ObjectId, steps: number) => {
  const user = await Users.findOne({ _id: userId });

  // Update daily step count
  user.dailyStepCount += steps;

  // Update total step count
  user.totalStepCount += steps;

  // Update weekly step count
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

  return result;
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
    (step) => step.timestamp >= sevenDaysAgo
  );

  // Calculate the total steps and health score within the past seven days
  const totalSteps = stepsWithinWeek.reduce((total, step) => total + step.steps, 0);
  const totalHealthScore = stepsWithinWeek.reduce((total, step) => total + step.healthScore, 0);

  // Calculate the average health score
  const averageHealthScore = totalHealthScore / (totalSteps / 1000); // Divide by 1000 for every 1000 steps

  return averageHealthScore;
};
