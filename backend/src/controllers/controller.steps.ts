import { Users } from "../database/database.connection.ts";
import { ObjectId } from "https://deno.land/x/mongo@v0.30.0/mod.ts";

export const updateStepCount = async (userId: ObjectId, steps: number) => {
  const user = await Users.findOne({ _id: userId });

  // Update daily step count
  user.dailyStepCount += steps;

  // Update total step count
  user.totalStepCount += steps;

  // Update weekly step count (you may want to implement logic for a rolling week)

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
