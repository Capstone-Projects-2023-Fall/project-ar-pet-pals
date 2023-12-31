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
// Deno.test("valid create pet", async () => {
//   // this is a valid token
//   let headers = {
//     Authorization: `Bearer ${token_with_no_pet}`,
//   };

//   try {
//     let res = await fetch(BASE_URL + "/pet/create", {
//       headers,
//       method: "POST",
//     });
//     let json = await res.json();

//     assert(json.petInfo.id, JSON.stringify(json));
//   } catch (err) {
//     assert(false, err);
//   }
// });

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

    assert(json.name, JSON.stringify(json));
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
    assert(false, err);
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
    assert(false, err);
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
    assert(false, err);
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
    assert(false, err);
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
    let res = await fetch(BASE_URL + "/pet/status", {
      headers,
    });
    let json = await res.json();

    assert(json.health, JSON.stringify(json));
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
    assert(false, err);
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
    assert(false, err);
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
    assert(false, err);
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
    assert(false, err);
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
    assert(false, err);
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
    assert(false, err);
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
    choice: "echo",
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
    assert(false, err);
  }
});

Deno.test("invalid ( no pet created) set pet choice", async () => {
  let headers = {
    Authorization: `Bearer ${token_with_no_pet}`,
    "Content-Type": "application/json",
  };

  let data = {
    choice: "echo",
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
    assert(false, err);
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
    assert(false, err);
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
    assert(false, err);
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
      json.health,
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
    assert(false, err);
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
    assert(false, err);
  }
});
/* END PET STATUS*/

/* FOOD */
Deno.test("recognize food in image", async () => {
  let headers = {
    Authorization: `Bearer ${token_with_no_pet}`,
    "Content-Type": "application/json",
  };

  let data = {
    image64String: "/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBvRXhpZgAASUkqAAgAAAACAA4BAgA3AAAAJgAAAJiCAgAKAAAAXQAAAAAAAABSZWQgYXBwbGUgd2l0aCBsZWFmIG9uIHdoaXRlIGJhY2tncm91bmQuQXBwbGUgcG9ydGlvbnM6RGltaXRyaXM2Nv/hBW5odHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPgoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgICB4bWxuczpHZXR0eUltYWdlc0dJRlQ9Imh0dHA6Ly94bXAuZ2V0dHlpbWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIiAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgZGM6UmlnaHRzPSJEaW1pdHJpczY2IiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMvaVN0b2NrcGhvdG8iIEdldHR5SW1hZ2VzR0lGVDpBc3NldElEPSIxODUyNjI2NDgiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmlzdG9ja3Bob3RvLmNvbS9sZWdhbC9saWNlbnNlLWFncmVlbWVudD91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29vZ2xlJmFtcDt1dG1fY2FtcGFpZ249aXB0Y3VybCIgPgo8ZGM6Y3JlYXRvcj48cmRmOlNlcT48cmRmOmxpPkRpbWl0cmlzNjY8L3JkZjpsaT48L3JkZjpTZXE+PC9kYzpjcmVhdG9yPjxkYzpkZXNjcmlwdGlvbj48cmRmOkFsdD48cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlJlZCBhcHBsZSB3aXRoIGxlYWYgb24gd2hpdGUgYmFja2dyb3VuZC5BcHBsZSBwb3J0aW9uczo8L3JkZjpsaT48L3JkZjpBbHQ+PC9kYzpkZXNjcmlwdGlvbj4KPHBsdXM6TGljZW5zb3I+PHJkZjpTZXE+PHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+PHBsdXM6TGljZW5zb3JVUkw+aHR0cHM6Ly93d3cuaXN0b2NrcGhvdG8uY29tL3Bob3RvL2xpY2Vuc2UtZ20xODUyNjI2NDgtP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsPC9wbHVzOkxpY2Vuc29yVVJMPjwvcmRmOmxpPjwvcmRmOlNlcT48L3BsdXM6TGljZW5zb3I+CgkJPC9yZGY6RGVzY3JpcHRpb24+Cgk8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJ3Ij8+Cv/tAJRQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAAdxwCUAAKRGltaXRyaXM2NhwCeAA3UmVkIGFwcGxlIHdpdGggbGVhZiBvbiB3aGl0ZSBiYWNrZ3JvdW5kLkFwcGxlIHBvcnRpb25zOhwCdAAKRGltaXRyaXM2NhwCbgAYR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3RvAP/bAEMACgcHCAcGCggICAsKCgsOGBAODQ0OHRUWERgjHyUkIh8iISYrNy8mKTQpISIwQTE0OTs+Pj4lLkRJQzxINz0+O//bAEMBCgsLDg0OHBAQHDsoIig7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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",
  };

  try {
    let res = await fetch(BASE_URL + "/food/recognize", {
			headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    
		let json = await res.json();
		
		for (let match of json.topMatches) {
			if (match.rank == 1) {
				assert(
					match.name == "apple",
					JSON.stringify(json)
				);
			}
		}
		
  } catch (err) {
    assert(false, err);
  }
});

Deno.test("invalid (bad image string) recognize food in image", async () => {
  let headers = {
    authorization: `bearer ${token_with_no_pet}`,
    "content-type": "application/json",
  };

  let data = {
    image64String: "115s1df5s",
  };

  try {
    let res = await fetch(BASE_URL + "/food/recognize", {
      headers,
      method: "post",

      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(json.message == "Image Recognition Error: Bad Request", JSON.stringify(json));
		assert(json.image64String == "115s1df5s", JSON.stringify(json));
  } catch (err) {
    assert(false, err);
  }
});

Deno.test("invalid (no image string) recognize food in image", async () => {
  let headers = {
    authorization: `bearer ${token_with_no_pet}`,
    "content-type": "application/json",
  };

  let data = {
    image64String: "",
  };

  try {
    let res = await fetch(BASE_URL + "/food/recognize", {
      headers,
      method: "post",

      body: JSON.stringify(data),
    });
    let json = await res.json();

    assert(
      json.message == "Image not provided",
      JSON.stringify(json)
    );
  } catch (err) {
    assert(false, err);
  }
});

Deno.test("get food's health rating", async () => {
  let headers = {
    Authorization: `Bearer ${token_with_no_pet}`,
    "Content-Type": "application/json",
  };

  let data = {
    food: "apple",
  };

  try {
    let res = await fetch(BASE_URL + "/food/healthRating", {
			headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    
		let json = await res.json();
		
		assert(json.food == "apple", JSON.stringify(json));
		assert(json.healthRating == 8, JSON.stringify(json));
		
  } catch (err) {
    assert(false, err);
  }
});

Deno.test("invalid (no food) get food's health rating", async () => {
  let headers = {
    Authorization: `Bearer ${token_with_no_pet}`,
    "Content-Type": "application/json",
  };

  let data = {
    food: "",
  };

  try {
    let res = await fetch(BASE_URL + "/food/healthRating", {
			headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    
		let json = await res.json();
		
		assert(json.message == "No food provided.", JSON.stringify(json));
		
  } catch (err) {
    assert(false, err);
  }
});

Deno.test("invalid (invalid food) get food's health rating", async () => {
  let headers = {
    Authorization: `Bearer ${token_with_no_pet}`,
    "Content-Type": "application/json",
  };

  let data = {
    food: "1234",
  };

  try {
    let res = await fetch(BASE_URL + "/food/healthRating", {
			headers,
      method: "POST",

      body: JSON.stringify(data),
    });
		
		let json = await res.json();
		
  } catch (err) {
		assert(err.status == 401, JSON.stringify(err));
		assert(err.message == "ReferenceError: food is not defined.", JSON.stringify(err));
  }
});

Deno.test("get food's nutrition info", async () => {
  let headers = {
    Authorization: `Bearer ${token_with_no_pet}`,
    "Content-Type": "application/json",
  };

  let data = {
    food: "apple",
  };

  try {
    let res = await fetch(BASE_URL + "/food/nutritionInfo", {
			headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    
		let json = await res.json();
		
		assert(json.food == "apple", JSON.stringify(json));
		
		assert(json.nutritionInfo.calories == 53, JSON.stringify(json));
		assert(json.nutritionInfo.serving_size_g == 100, JSON.stringify(json));
		assert(json.nutritionInfo.fat_total_g == 0.2, JSON.stringify(json));
		assert(json.nutritionInfo.fat_saturated_g == 0, JSON.stringify(json));
		assert(json.nutritionInfo.protein_g == 0.3, JSON.stringify(json));
		assert(json.nutritionInfo.sodium_mg == 1, JSON.stringify(json));
		assert(json.nutritionInfo.potassium_mg == 11, JSON.stringify(json));
		assert(json.nutritionInfo.cholesterol_mg == 0, JSON.stringify(json));
		assert(json.nutritionInfo.carbohydrates_total_g == 14.1, JSON.stringify(json));
		assert(json.nutritionInfo.fiber_g == 2.4, JSON.stringify(json));
		assert(json.nutritionInfo.sugar_g == 10.3, JSON.stringify(json));
		
		
  } catch (err) {
    assert(false, err);
  }
});

Deno.test("invalid (no food) get food's nutrition info", async () => {
  let headers = {
    Authorization: `Bearer ${token_with_no_pet}`,
    "Content-Type": "application/json",
  };

  let data = {
    food: "",
  };

  try {
    let res = await fetch(BASE_URL + "/food/nutritionInfo", {
			headers,
      method: "POST",

      body: JSON.stringify(data),
    });
    
		let json = await res.json();
		
		assert(json.message == "No food provided.", JSON.stringify(json));
		
  } catch (err) {
    assert(false, err);
  }
});

Deno.test("invalid (invalid food) get food's nutrition info", async () => {
  let headers = {
    Authorization: `Bearer ${token_with_no_pet}`,
    "Content-Type": "application/json",
  };

  let data = {
    food: "1234",
  };

  try {
    let res = await fetch(BASE_URL + "/food/nutritionInfo", {
			headers,
      method: "POST",

      body: JSON.stringify(data),
    });
		
		let json = await res.json();
		
  } catch (err) {
		assert(err.status == 401, JSON.stringify(err));
		assert(err.message == "ReferenceError: food is not defined.", JSON.stringify(err));
  }
});


/* END FOOD */