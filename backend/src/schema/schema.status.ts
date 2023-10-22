import {ObjectId} from "https://deno.land/x/mongo@v0.30.0/mod.ts";


export interface StatusSchema {
    _id: ObjectId;
    lastActivity:  Date;
		health: number;
}
