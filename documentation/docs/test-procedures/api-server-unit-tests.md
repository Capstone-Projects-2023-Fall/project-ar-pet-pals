This are all unit tests that test each route on the api-server.




```js

import {
  assertEquals,
  assert,
} from "https://deno.land/std@0.205.0/assert/mod.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.32.0/mod.ts";


let BASE_URL = "https://arpetpals.store/api";

// ALL OF THESE ENV VARS ARE STORED IN .bashrc
const valid_token = Deno.env.get("valid_token");
  if (!valid_token) throw new Error('valid_token environment variable not set.');
const invalid_token = Deno.env.get("invalid_token");
  if (!invalid_token) throw new Error('invalid_token environment variable not set.');
const token_with_no_pet = Deno.env.get("token_with_no_pet");
  if (!token_with_no_pet) throw new Error('token_with_no_pet environment variable not set.');




function getRandomChar() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomIndex);
}

function generateRandomString(length: number) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += getRandomChar();
  }
  return result;
}

// VERIFY DB CONNECTION
Deno.test("test database connection", async () => {
  const client = new MongoClient();

  const dbString = Deno.env.get("DB_CRED");
  if (!dbString) throw new Error('DB_CRED environment variable not set.');
  

  try {
    let c = await client.connect(dbString);
  } catch (err) {
    assert(false, err);
  } finally {
    client.close();
  }
});

/* VERIFY TOKEN */
Deno.test("verify true token", async () => {
  const headers = {
    "Content-Type": "application/json", // You can adjust the content type as needed
  };

  try {
    let res = await fetch(BASE_URL + "/token/verify", {
      method: "POST",
      headers,
      body: JSON.stringify({ token: valid_token }),
    });
    let json = await res.json();

    assert(json.isValid, JSON.stringify(json));
  } catch (err) {
    assert(err == null, err);
  }
});

Deno.test("verify false token", async () => {
  const headers = {
    "Content-Type": "application/json", // You can adjust the content type as needed
  };

  try {
    let res = await fetch(BASE_URL + "/token/verify", {
      method: "POST",
      headers,
      body: JSON.stringify({ token: invalid_token }),
    });
    let json = await res.json();

    assert(json.isValid == false, JSON.stringify(json));
  } catch (err) {
    assert(true);
  }
});
/*END VERIFY TOKEN */

/* SIGNIN*/
Deno.test("valid sign in", async () => {
  let headers = {
    "Content-Type": "application/json",
  };

  // this are valid credentials
  let data = {
    username: "alex",
    password: "alex",
  };

  try {
    let res = await fetch(BASE_URL + "/signin", {
      headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(json.token, JSON.stringify(json));
  } catch (err) {
    assert(err);
  }
});

Deno.test("invalid (no password) sign in", async () => {
  let headers = {
    "Content-Type": "application/json",
  };

  // this are valid credentials
  let data = {
    username: "alex",
  };

  try {
    let res = await fetch(BASE_URL + "/signin", {
      headers,
      method: "POST",
      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(json.token, JSON.stringify(json));
  } catch (err) {
    assert(err);
  }
});

Deno.test("invalid (no username) sign in", async () => {
  let headers = {
    "Content-Type": "application/json",
  };

  // this are valid credentials
  let data = {
    password: "alex",
  };
  try {
    let res = await fetch(BASE_URL + "/signin", {
      headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(json.token, JSON.stringify(json));
  } catch (err) {
    assert(err);
  }
});
/* END SIGNIN*/

/* SIGNUP*/
Deno.test("valid sign up", async () => {
  let headers = {
    "Content-Type": "application/json",
  };

  // this are valid credentials
  let data = {
    username: generateRandomString(5),
    password: generateRandomString(5),
  };

  try {
    let res = await fetch(BASE_URL + "/signup", {
      headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(json.token, JSON.stringify(json));
  } catch (err) {
    assert(err);
  }
});

Deno.test("invalid (no password) sign up", async () => {
  let headers = {
    "Content-Type": "application/json",
  };

  // this are valid credentials
  let data = {
    username: generateRandomString(5),
  };

  try {
    let res = await fetch(BASE_URL + "/signup", {
      headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(!json.token);
  } catch (err) {
    assert(true);
  }
});

Deno.test("invalid (no username) sign up", async () => {
  let headers = {
    "Content-Type": "application/json",
  };

  // this are valid credentials
  let data = {
    password: generateRandomString(5),
  };

  try {
    let res = await fetch(BASE_URL + "/signup", {
      headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(!json.token);
  } catch (err) {
    assert(true);
  }
});
/* END SIGNUP*/

/* PET CREATE */
Deno.test("valid create pet", async () => {
  // this is a valid token
  let headers = {
    Authorization: `Bearer ${token_with_no_pet}`,
  };

  try {
    let res = await fetch(BASE_URL + "/pet/create", {
      headers,
      method: "POST",
    });
    let json = await res.json();

    assert(json.petInfo.id, JSON.stringify(json));
  } catch (err) {
    assert(false, err);
  }
});

Deno.test("invalid token create pet", async () => {
  // this is a invalid token
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${invalid_token}`,
  };

  try {
    let res = await fetch(BASE_URL + "/pet/create", {
      headers,
      method: "POST",
    });
    let json = await res.json();

    assert(!json.petInfo);
  } catch (err) {
    assert(true);
  }
});
/* END PET CREATE */

/* PET NAME */
Deno.test("get pet name", async () => {
  // this is a valid token
  let headers = {
    Authorization: `Bearer ${valid_token}`,
  };

  try {
    let res = await fetch(BASE_URL + "/pet/name", {
      headers,
      method: "GET",
    });
    let json = await res.json();

    assert(json.name);
  } catch (err) {
    assert(false, err);
  }
});
Deno.test("invalid( invalid token) get pet name", async () => {
  // this is a valid token

  let headers = {
    Authorization: `Bearer ${invalid_token}`,
  };

  try {
    let res = await fetch(BASE_URL + "/pet/name", {
      headers,

      method: "GET",
    });
    let json = await res.json();

    assert(!json.name, JSON.stringify(json));
  } catch (err) {
    assert(true, err);
  }
});
Deno.test("invalid( no pet created) get pet name", async () => {
  // this is a valid token

  let headers = {
    Authorization: `Bearer ${token_with_no_pet}`,
  };

  try {
    let res = await fetch(BASE_URL + "/pet/name", {
      headers,
      method: "GET",
    });
    let json = await res.json();

    assert(!json.name, JSON.stringify(json));
  } catch (err) {
    assert(true, err);
  }
});

Deno.test("set pet name", async () => {
  let headers = {
    Authorization: `Bearer ${valid_token}`,
    "Content-Type": "application/json",
  };

  let data = {
    name: "echo",
  };

  try {
    let res = await fetch(BASE_URL + "/pet/name", {
      headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(
      json.message == "pet name updated successfully",
      JSON.stringify(json)
    );
  } catch (err) {
    assert(false, err);
  }
});
Deno.test("invalid ( invalid token) set pet name", async () => {
  // this is a valid token

  let headers = {
    Authorization: `Bearer ${invalid_token}`,
    "Content-Type": "application/json",
  };

  let data = {
    name: "echo",
  };

  try {
    let res = await fetch(BASE_URL + "/pet/name", {
      headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(
      json.message != "pet name updated successfully",
      JSON.stringify(json)
    );
  } catch (err) {
    assert(true, err);
  }
});
Deno.test("invalid ( no pet created) set pet name", async () => {
  // this is a valid token

  let headers = {
    Authorization: `Bearer ${token_with_no_pet}`,
    "Content-Type": "application/json",
  };

  let data = {
    name: "echo",
  };

  try {
    let res = await fetch(BASE_URL + "/pet/name", {
      headers,
      method: "POST",
      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(
      json.message == "Could not find a pet for your user's id",
      JSON.stringify(json)
    );
  } catch (err) {
    assert(true, err);
  }
});
/* END PET NAME */

/* PET STATUS */
Deno.test("get pet status", async () => {
  // this is a valid token
  let headers = {
    method: "GET",
    Authorization: `Bearer ${valid_token}`,
  };

  try {
    let res = await fetch(BASE_URL + "/pet/name", {
      headers,
    });
    let json = await res.json();

    assert(json.name, JSON.stringify(json));
  } catch (err) {
    assert(false, err);
  }
});
Deno.test("invalid( invalid token) get pet status", async () => {
  // this is a valid token

  let headers = {
    method: "GET",
    Authorization: `Bearer ${invalid_token}`,
  };

  try {
    let res = await fetch(BASE_URL + "/pet/name", {
      headers,
    });
    let json = await res.json();

    assert(!json.name, JSON.stringify(json));
  } catch (err) {
    assert(true, err);
  }
});
Deno.test("invalid( no pet created) get pet status", async () => {
  // this is a valid token

  let headers = {
    method: "GET",
    Authorization: `Bearer ${token_with_no_pet}`,
  };

  try {
    let res = await fetch(BASE_URL + "/pet/name", {
      headers,
    });
    let json = await res.json();

    assert(!json.name, JSON.stringify(json));
  } catch (err) {
    assert(true, err);
  }
});

Deno.test("set pet name", async () => {
  // this is a valid token
  let headers = {
    Authorization: `Bearer ${valid_token}`,
    "Content-Type": "application/json",
  };

  let data = {
    name: "echo",
  };

  try {
    let res = await fetch(BASE_URL + "/pet/name", {
      headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(
      json.message == "pet name updated successfully",
      JSON.stringify(json)
    );
  } catch (err) {
    assert(false, err);
  }
});
Deno.test("invalid ( invalid token) set pet name", async () => {
  // this is a valid token

  let headers = {
    Authorization: `Bearer ${invalid_token}`,
    "Content-Type": "application/json",
  };

  let data = {
    name: "echo",
  };

  try {
    let res = await fetch(BASE_URL + "/pet/name", {
      headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(
      json.message != "pet name updated successfully",
      JSON.stringify(json)
    );
  } catch (err) {
    assert(true, err);
  }
});
Deno.test("invalid ( no pet created) set pet name", async () => {
  // this is a valid token

  let headers = {
    Authorization: `Bearer ${token_with_no_pet}`,
    "Content-Type": "application/json",
  };

  let data = {
    name: "echo",
  };

  try {
    let res = await fetch(BASE_URL + "/pet/name", {
      headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(
      json.message == "Could not find a pet for your user's id",
      JSON.stringify(json)
    );
  } catch (err) {
    assert(true, err);
  }
});
/* END PET STATUS */

/* PET CHOICE */
Deno.test("get pet choice", async () => {
  // this is a valid token

  let headers = {
    method: "GET",
    Authorization: `Bearer ${valid_token}`,
  };

  try {
    let res = await fetch(BASE_URL + "/pet/choice", {
      headers,
    });
    let json = await res.json();

    assert(json.choice, JSON.stringify(json));
  } catch (err) {
    assert(false, err);
  }
});
Deno.test("invalid( invalid token) get pet choice", async () => {
  // this is a valid token

  let headers = {
    method: "GET",
    Authorization: `Bearer ${invalid_token}`,
  };

  try {
    let res = await fetch(BASE_URL + "/pet/choice", {
      headers,
    });
    let json = await res.json();

    assert(!json.choice, JSON.stringify(json));
  } catch (err) {
    assert(true, err);
  }
});
Deno.test("invalid( no pet created) get pet choice", async () => {
  // this is a valid token

  let headers = {
    method: "GET",
    Authorization: `Bearer ${token_with_no_pet}`,
  };

  try {
    let res = await fetch(BASE_URL + "/pet/choice", {
      headers,
    });
    let json = await res.json();

    assert(!json.choice, JSON.stringify(json));
  } catch (err) {
    assert(true, err);
  }
});

Deno.test("set pet choice", async () => {
  // this is a valid token
  let headers = {
    Authorization: `Bearer ${valid_token}`,
    "Content-Type": "application/json",
  };

  let data = {
    choice: "Red Dragon",
  };

  try {
    let res = await fetch(BASE_URL + "/pet/choice", {
      headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(
      json.message == "pet choice updated successfuly",
      JSON.stringify(json)
    );
  } catch (err) {
    assert(false, err);
  }
});
Deno.test("invalid ( invalid token) set pet choice", async () => {
  // this is a valid token

  let headers = {
    Authorization: `Bearer ${invalid_token}`,
    "Content-Type": "application/json",
  };

  let data = {
    name: "echo",
  };

  try {
    let res = await fetch(BASE_URL + "/pet/choice", {
      headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(
      json.message != "pet choice updated successfuly",
      JSON.stringify(json)
    );
  } catch (err) {
    assert(true, err);
  }
});
Deno.test("invalid ( no pet created) set pet choice", async () => {
  let headers = {
    Authorization: `Bearer ${token_with_no_pet}`,
    "Content-Type": "application/json",
  };

  let data = {
    name: "echo",
  };

  try {
    let res = await fetch(BASE_URL + "/pet/choice", {
      headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(
      json.message == "Could not find a pet for your user's id",
      JSON.stringify(json)
    );
  } catch (err) {
    assert(true, err);
  }
});
/* END PET CHOICE */

/* PET STATUS */
Deno.test("get pet status", async () => {
  // this is a valid token

  let headers = {
    Authorization: `Bearer ${valid_token}`,
  };

  try {
    let res = await fetch(BASE_URL + "/pet/status", {
      headers,
      method: "GET",
    });
    let json = await res.json();

    assert(json.health);
  } catch (err) {
    assert(false, err);
  }
});
Deno.test("invalid( invalid token) get pet status", async () => {
  // this is a valid token

  let headers = {
    method: "GET",
    Authorization: `Bearer ${invalid_token}`,
  };

  try {
    let res = await fetch(BASE_URL + "/pet/status", {
      headers,
    });
    let json = await res.json();

    assert(!json.health, JSON.stringify(json));
  } catch (err) {
    assert(true, err);
  }
});
Deno.test("invalid( no pet created) get pet status", async () => {
  // this is a valid token

  let headers = {
    method: "GET",
    Authorization: `Bearer ${token_with_no_pet}`,
  };

  try {
    let res = await fetch(BASE_URL + "/pet/status", {
      headers,
    });
    let json = await res.json();

    assert(!json.health, JSON.stringify(json));
  } catch (err) {
    assert(true, err);
  }
});

Deno.test("set pet status", async () => {
  // this is a valid token
  let headers = {
    Authorization: `Bearer ${valid_token}`,
    "Content-Type": "application/json",
  };

  let data = {
    health: 57,
    mood: 57,
  };

  try {
    let res = await fetch(BASE_URL + "/pet/status", {
      headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(
      json.message == "pet status updated successfuly",
      JSON.stringify(json)
    );
  } catch (err) {
    assert(false, err);
  }
});

Deno.test("invalid ( invalid token) set pet status", async () => {
  // this is a valid token

  let headers = {
    Authorization: `Bearer ${invalid_token}`,
    "Content-Type": "application/json",
  };

  let data = {
    health: 57,
    mood: 57,
  };

  try {
    let res = await fetch(BASE_URL + "/pet/status", {
      headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(
      json.message != "pet status updated successfuly",
      JSON.stringify(json)
    );
  } catch (err) {
    assert(true, err);
  }
});
Deno.test("invalid ( no pet created) set pet status", async () => {
  let headers = {
    Authorization: `Bearer ${token_with_no_pet}`,
    "Content-Type": "application/json",
  };

  let data = {
    health: 57,
    mood: 57,
  };

  try {
    let res = await fetch(BASE_URL + "/pet/status", {
      headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(
      json.message == "Could not find a pet for your user's id",
      JSON.stringify(json)
    );
  } catch (err) {
    assert(true, err);
  }
});
/* END PET STATUS*/

```