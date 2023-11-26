import UserSchema from "../schema/schema.user.js";
import db from "../database/database.connection.js";

const usersDb = db.collection<UserSchema>("users");

// implement a sorting algorithm for those values

function sortUsers(a: UserSchema, b: UserSchema) {
  let aScore = a.mood + a.health;
  let bScore = b.mood + b.health;

  return aScore - bScore;
}

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
  //   const { n } = await request.body().value;
  // n is the top (n) of users. for instance, top 5 or top 12

  // get a list of users

  // get the happinness and health of user

  let sorted = users.sort(sortUsers);

  let sortedNames = sorted.map((user) => user.name);

  // return that sorted list

  response.body = {
    leaderboardList: sortedNames,
  };

  response.status = 200;
};
