import UserSchema from "../schema/schema.user.ts";
import db from "../database/database.connection.ts";
import { PetSchema } from "../schema/schema.pet.ts";

const usersDb = db.collection<UserSchema>("users");
const Pets = db.collection<PetSchema>("pets");



export const leaderboardList = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  let list:  any[] = []
  let pets = Pets.findMany(
    { activities: { $ne: null } },
  ).toArray();

  for( let pet of pets){
    let score = 0
    let obj = {}
    for( let act of pet.activities){
      score += act.weeklyPoints
    }


    let user = usersDb.findOne({_id: pet.user_id})

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
  
  response.body = {
    leaderboardList: list
  }



  

  

};
