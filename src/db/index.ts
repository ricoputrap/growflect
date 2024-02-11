import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const DB_URL = process.env.DB_URL || "";

const client = new Client({
  connectionString: DB_URL
});

await client.connect();
const db = drizzle(client);

export default db