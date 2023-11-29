import {ObjectId} from "https://deno.land/x/mongo@v0.30.0/mod.ts";

import StatusSchema from "../schema/schema.status.ts";

export interface PetSchema {
    _id: ObjectId;
    user_id: ObjectId;
    name: string;
    choice: string;    
		status: StatusSchema;
    activities: StatusActivitySchema[];
}

// We will use cronjob or task to run a python script periodically to reset points
export interface StatusActivitySchema {
  type: string;  // login, double tap,...
  lockedUntil: Date;  
  weeklyPoints: number;  // Weekly accumulated points for the activity (leaderboard), reset weekly
}
