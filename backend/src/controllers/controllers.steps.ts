import { ObjectId } from "https://deno.land/x/mongo@v0.32.0/mod.ts";
import {UserSchema} from "../schema/schema.user.ts";
import db from "../database/database.connection.ts";
import { getUserIdFromHeaders } from "../utils/utils.utils.ts";

const Users = db.collection<UserSchema>("users");

export const updateStepCount = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const { steps } = await request.body().value;
  const userId = getUserIdFromHeaders(request.headers);

  const user = await Users.findOne({ _id: new ObjectId(userId) });

  if (!user) {
    response.body = {
      message: "could not find user",
    };
    response.status = 400;
    return;
  }
  // Update daily step count
  user.dailyStepCount += steps;

  // Update total step count
  user.totalStepCount += steps;

  // Update weekly step count
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  // Filter steps within the past seven days
  let stepsWithinWeek: any[] = [];

  if (user.steps) {
    stepsWithinWeek = user.steps.filter(
      (step) => step.timestamp >= sevenDaysAgo
    );
  }

  // Calculate the total steps within the past seven days
  user.weeklyStepCount = stepsWithinWeek.reduce(
    (total, step) => total + step.steps,
    0
  );

  // Save the updated user data
  const result = await Users.updateOne({ _id: userId }, { $set: user });

  if (!result) {
    response.body = {
      message: "could not update step count",
    };
    response.status = 400;
    return;
  }

  response.body = {
    message: "updated step count successfully",
  };
  response.status = 200;
};

export const getStepCount = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const headers: Headers = request.headers;
  const userId = getUserIdFromHeaders(request.headers);

  const user = await Users.findOne({ _id: new ObjectId(userId) });

  if (!user) {
    response.body = {
      message: "could not find user",
    };
    response.status = 400;
    return;
  }

  response.body = {
    dailyStepCount: user.dailyStepCount,
    weeklyStepCount: user.weeklyStepCount,
  };
  response.status = 200;
};

export const checkStepGoal = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const userId = getUserIdFromHeaders(request.headers);

  const user = await Users.findOne({ _id: new ObjectId(userId) });

  if (!user) {
    response.body = {
      message: "could not find user",
    };
    response.status = 400;
    return;
  }

  if (user.dailyStepCount >= user.dailyStepGoal) {
    // User met the daily step goal
    response.body = {
      metDailyGoal: true,
    };
    response.status = 200;
    return;
  }

  response.body = {
    metDailyGoal: false,
  };
};

export const calculateAverageHealthScore = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const { userId, steps } = await request.body().value;

  const user = await Users.findOne({ _id: new ObjectId(userId) });

  // Calculate the weekly step count
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  // Filter steps within the past seven days
  const stepsWithinWeek = user.steps.filter(
    (steps) => steps.timestamp >= sevenDaysAgo
  );

  // Calculate the total steps and health score within the past seven days
  const totalSteps: number = stepsWithinWeek.reduce(
    (total: number, step: StepType) => total + step.steps,
    0
  );
  const totalHealthScore: number = stepsWithinWeek.reduce(
    (total: number, step: StepType) => total + step.healthScore,
    0
  );

  // Calculate the average health score
  const averageHealthScore: number =
    totalHealthScore / (totalSteps / 1000); // Specify the type as number

  return averageHealthScore;
};

// New function to update step goal
export const updateStepGoal = async (
  userId: ObjectId,
  newStepGoal: number
) => {
  const user = await Users.findOne({ _id: userId });

  // Update user's step goal
  user.dailyStepGoal = newStepGoal;

  // Save the updated user data
  const result = await Users.updateOne({ _id: userId }, { $set: user });

  return result;
};
