import db from "../database/database.connection.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import UserSchema from "../schema/schema.user.ts";
import { create, decode } from "https://deno.land/x/djwt@v2.4/mod.ts";
import { getUserIdFromHeaders } from "../utils/utils.utils.ts";
import key from "../utils/utils.apiKey.ts";

const Users = db.collection<UserSchema>("users");

async function createJWT(user: UserSchema) {
  const payload = {
    id: user._id,
    name: user.username,
  };
  const jwt = await create({ alg: "HS512", typ: "JWT" }, payload, key);

  if (!jwt) {
    throw "Could not create JWT";
  }

  return jwt;
}

export const signup = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const { username, password, dailyStepGoal } = await request.body().value;

  if (!username) {
    response.body = { message: "No username provided" };
    response.status = 400;
    return;
  }

  if (!password) {
    response.body = { message: "No password provided" };
    response.status = 400;
    return;
  }

  const user = await Users.findOne({ username });
  if (user) {
    response.body = { message: "User already exists" };
    response.status = 400;
    return;
  }

  const salt = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(password, salt);

  const _id = await Users.insertOne({
    username,
    password: hashedPassword,
    dailyStepGoal, // Add this line to store the daily step goal
  });

  const jwt = await createJWT({
    username,
    password: hashedPassword,
    _id,
    dailyStepGoal, // Include the daily step goal in the JWT payload
  });

  response.status = 201;
  response.body = {
    message: "User created",
    userInfo: {
      id: _id,
      name: username,
      dailyStepGoal, // Include the daily step goal in the response
    },
    token: jwt,
  };
};

export const signin = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const { username, password } = await request.body().value;

  if (!username) {
    response.body = { message: "No username provided" };
    response.status = 400;
    return;
  }

  if (!password) {
    response.body = { message: "No password provided" };
    response.status = 400;
    return;
  }

  const user = await Users.findOne({ username });
  if (!user) {
    response.body = { message: "User doesn't exist" };
    response.status = 400;
    return;
  }

  const confirmPassword = await bcrypt.compare(password, user.password);

  if (!confirmPassword) {
    response.body = { message: "Wrong Password!" };
    response.status = 400;
    return;
  }
  const jwt = await createJWT(user);

  response.status = 200;
  response.body = {
    userInfo: {
      id: user._id,
      name: user.username,
    },
    token: jwt,
  };
};
};

export const getUserName = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  // ... existing getUserName function ...
};

export const getUserInfo = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const headers: Headers = request.headers;
  const authorization = headers.get("Authorization");
  const jwt = authorization.split(" ")[1];
  let [, payload,] = decode(jwt);

  response.body = {
    userInfo: {
      id: payload.id,
      name: payload.name,
    },
  };
};
export const updateStepGoal = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const { dailyStepGoal } = await request.body().value;
  const userId = getUserIdFromHeaders(request.headers);

  // Check if the user exists
  const existingUser = await Users.findOne({ _id: userId });
  if (!existingUser) {
    response.body = { message: "User not found" };
    response.status = 404;
    return;
  }

  // Update the dailyStepGoal
  const result = await Users.updateOne(
    { _id: userId },
    { $set: { dailyStepGoal } }
  );

  if (!result) {
    response.body = { message: "Failed to update step goal" };
    response.status = 500;
    return;
  }

  response.body = { message: "Step goal updated successfully" };
  response.status = 200;
};
