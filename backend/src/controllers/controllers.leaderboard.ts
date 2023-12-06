import UserSchema from "../schema/schema.user.ts";
import db from "../database/database.connection.ts";
import { PetSchema } from "../schema/schema.pet.ts";
import { ObjectId } from "https://deno.land/x/mongo@v0.32.0/mod.ts";

const usersDb = db.collection<UserSchema>("users");
const Pets = db.collection<PetSchema>("pets");

function compareScores(a: any, b: any) {
  if (a.score < b.score) {
    return 1;
  }
  if (a.score > b.score) {
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
  let list: any[] = [];
  let pets = await Pets.find(
    { activities: { $ne: null } },
  ).toArray();

  for (let pet of pets) {
    let score = 0;
    let obj = {};
    for (let act of pet.activities) {
      score += act.weeklyPoints;
    }

    let user = await usersDb.findOne({ _id: new ObjectId(pet.user_id) });

    if (!user) {
      continue;
    }

    obj = {
      username: user.username,
      score: score,
    };
    list.push(obj);
  }

  // Sort the list
  list.sort((a, b) => (a.score < b.score ? 1 : -1));

  // Get the top 5 users
  const top5Users = list.slice(0, Math.min(5, list.length));

  // Return the sorted list and top 5 users
  response.body = {
    leaderboardList: list,
    top5Users: top5Users,
  };

  response.status = 200;
};

