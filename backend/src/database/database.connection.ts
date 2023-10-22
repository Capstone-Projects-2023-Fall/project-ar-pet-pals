import { MongoClient } from "https://deno.land/x/mongo@v0.32.0/mod.ts";

const client = new MongoClient();

const dbString = "REMOVED_ON_PURPOSE;

await client.connect(dbString);

console.log("Database connected!");
const db = client.database("ar-pet-pals");

export default db;
