import db from "../database/database.connection.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import UserSchema from "../schema/schema.user.ts";
import { create, decode } from "https://deno.land/x/djwt@v2.4/mod.ts";
import { getUserIdFromHeaders } from "../utils/utils.utils.ts";
import key from "../utils/utils.apiKey.ts";
import {ObjectId} from "https://deno.land/x/mongo@v0.32.0/mod.ts"


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
        dailyStepGoal,
        dailyStepCount: 0,
        totalStepCount: 0,
        weeklyStepCount: 0,
        steps: []
    });

    const jwt = await createJWT({
        username,
        password: hashedPassword,
        _id,
        dailyStepGoal,
    });

    response.status = 201;
    response.body = {
        message: "User created",
        userInfo: {
            id: _id,
            name: username,
            dailyStepGoal,
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

/*
* input: username & password
*/
export const updateUser = async ({
    request,
    response,
}: {
    request: any;
    response: any;
}) => {

    let { username, password } = await request.body().value;

    username = username.trim();
    password = password.trim();

    const headers: Headers = request.headers;
    let userId = getUserIdFromHeaders(headers);
    const user = await Users.findOne({ _id: new ObjectId(userId) });
    // check if username exists
    const userCheck = await Users.findOne({ username: username });

    let message = "";
    if (username == "" && password == "") {
        response.body = {
            "message": "Username or password must not be empty.",
        }
        return;
    }
    // only password
    else if (username == "" && password != "") {
        const salt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, salt);

        await Users.updateOne({ username: user.username}, { 
            $set: { 
                password: hashedPassword
            }
        });
        message = "Updated password successfuly.";
    }
    // only username
    else if (username != "" && password == "") {
        if (userCheck) {
            response.body = {
                "message": "Username exists. Please use another one.",
            }
            return;
        }

        await Users.updateOne({ username: user.username}, { 
            $set: { 
                username: username
            }
        });
        message = "Updated username successfuly.";
    }
    // both username and password
    else {

        const salt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, salt);

        await Users.updateOne({ username: user.username}, { 
            $set: { 
                username: username,
                password: hashedPassword
            }
        });
        message = "Updated username and password successfuly.";
    }
    
    response.body = {
        "message": message,
    }
};


export const deleteUser = async ({
    request,
    response,
}: {
    request: any;
    response: any;
}) => {

    const headers: Headers = request.headers;
    let userId = getUserIdFromHeaders(headers);
    const user = await Users.findOne({ _id: new ObjectId(userId) });
   
    const deleteCount = await Users.deleteOne({ username: user.username});

    let message = deleteCount ? "Deleted user successfuly." : "Couldn't delete user!!!";
    response.body = {
        message: message,
    }
};


