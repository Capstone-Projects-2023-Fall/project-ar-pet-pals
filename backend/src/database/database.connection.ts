import { MongoClient } from "https://deno.land/x/mongo@v0.32.0/mod.ts";

const client = new MongoClient();

const dbString = Deno.env.get("DB_CRED");
if (!dbString) throw new Error('DB_CRED environment variable not set.');

console.log(dbString);

await client.connect(dbString);

console.log("Database connected!");
const db = client.database("ar-pet-pals");

export default db;
