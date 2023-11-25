import { ObjectId } from "https://deno.land/x/mongo@v0.30.0/mod.ts";

export interface UserSchema {
  _id: ObjectId;
  username: string;
  password: string;
  token: string;
  dateJoined: Date;
  leaderboardRanking: number;
  dailyStepGoal: number; // Add the dailyStepGoal property
  birthday: Date; // Add the birthday property
}
