import { ObjectId } from "https://deno.land/x/mongo@v0.30.0/mod.ts";

interface Step {
  timestamp: Date;
  steps: number;
  healthScore: number;
}

export interface UserSchema {
  _id: ObjectId;
  username: string;
  password: string;
  token: string;
  dateJoined: Date;
  leaderboardRanking: number;
  dailyStepGoal: number;
  dailyStepCount: number;
  totalStepCount: number;
  weeklyStepCount: number; 
  stepCountScore: number; // New property
  steps: Step[]; // New property
birthday: Date; // Add the birthday property
}
