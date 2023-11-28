import {ObjectId} from "https://deno.land/x/mongo@v0.30.0/mod.ts";


export interface StatusSchema {
    _id: ObjectId;
    lastActivity:  Date;
    lastFeeding: Date;
    lastCalculatedHealth: Date;
    lastCalculatedMood: Date;
		health: number;
    mood: number;
    activities: StatusActivitySchema[];
}

// We will use cronjob or task to run a python script periodically to reset points
export interface StatusActivitySchema {
  type: string;  // login, double tap,...
  lockedUntil: Date;  
  weeklyPoints: number;  // Weekly accumulated points for the activity (leaderboard), reset weekly
}
