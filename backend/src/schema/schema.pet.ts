import {ObjectId} from "https://deno.land/x/mongo@v0.30.0/mod.ts";

import StatusSchema from "../schema/schema.status.ts";

export interface PetSchema {
    _id: ObjectId;
    user_id: ObjectId;
    name: string;
    choice: string;    
		status: StatusSchema;
}
