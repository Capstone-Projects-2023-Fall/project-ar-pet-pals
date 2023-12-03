
import UserSchema from "../schema/schema.user.ts";
import db from "../database/database.connection.ts";
import { PetSchema } from "../schema/schema.pet.ts";
import {ObjectId} from "https://deno.land/x/mongo@v0.32.0/mod.ts"


const usersDb = db.collection<UserSchema>("users");
const Pets = db.collection<PetSchema>("pets");


function compareScores( a:any, b:any ) {
  if ( a.score < b.score ){
    return 1;
  }
  if ( a.score > b.score ){
    return -1;
  }
  return 0;
}

export const leaderboardList = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  let list:  any[] = []
  let pets = await Pets.find(
    { activities: { $ne: null } },
  ).toArray();

  for( let pet of pets){
    let score = 0
    let obj = {}
    for( let act of pet.activities){
      score += act.weeklyPoints
    }


    let user = await usersDb.findOne({_id: new ObjectId(pet.user_id)})

    if (!user){
      continue
    }

    obj = { 
      username: user.username,
      score: score
    }
    list.push(obj)

    
  }

  // top 5
  let n = 5;

  list = list.splice(0, Math.max(list.length, n+1));
	list = list.sort(compareScores)

  response.body = {
    leaderboardList: list
  }
};
