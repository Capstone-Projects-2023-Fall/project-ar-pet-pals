import db from "../database/database.connection.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import UserSchema from "../schema/schema.user.ts";
import { create } from "https://deno.land/x/djwt@v2.4/mod.ts";

import key from "../utils/utils.apiKey.ts";

const Users = db.collection<UserSchema>("users");


async function createJWT(user: UserSchema){
  const payload = {
    id: user._id,
    name: user.username,
  };
  const jwt = await create({ alg: "HS512", typ: "JWT" }, { payload }, key);

  if (!jwt) {
     throw("Could not create JWT")
  }

  return jwt
}


export const signup = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const { username, password } = await request.body().value;

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
  });
  const jwt = await createJWT({username, password:hashedPassword, _id})
  response.status = 201;
  response.body = { 
    message: "User created", 
    userInfo: {
      id: _id, 
      name: username, 
    },
    token: jwt 

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
  const jwt = await createJWT(user)

  response.status = 200;
  response.body = {
    userInfo: {
      id: user._id, 
      name: user.username, 
    },
    token: jwt,
  };
};


export const setUserName =async ({request, response}:{request:any;response:any}) => {

    response.body = {
        "name": "default name"
    }
}

export const getUserName =async ({request, response}:{request:any;response:any}) => {
    
    response.body = {
        "name": "default name"
    }
}
