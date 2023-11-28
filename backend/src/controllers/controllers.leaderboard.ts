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
  const users = await usersDb.find({}).toArray();

  if (!users) {
    response.body = {
      message: "could not find any users",
    };
    response.status = 400;
    return;
  }
  let n = 5
  

  // n is the top (n) of users. for instance, top 5 or top 12

  // get a list of users

  // get the happinness and health of user

  let score = 0;

  let list: {username: string, score: number}[] = []
  for (let user of users) {
    const pet = await Pets.findOne({ user_id: user._id.toString() });
    console.log(user._id, pet)

    if(!pet) continue;
    score = pet.status.mood + pet.status.health;
    list.push( {
      username: user.username,
      score,
    });
  }

  list.sort((a, b) => (a.score < b.score) ? 1 : -1)

  list = list.slice(0, n+1);
g

  // return that sorted list

  response.body = {
    leaderboardList: list,
  };

  response.status = 200;
};
