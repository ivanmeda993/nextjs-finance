import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { accounts } from "@/db/schema";

config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const SEED_USER_ID = "user_2g1JOKQh3QUlqivKbp70wEJobvd";

const SEED_ACCOUNTS = [
  { id: "account_1", name: "Checking", userId: SEED_USER_ID, plaidId: null },
  { id: "account_2", name: "Savings", userId: SEED_USER_ID, plaidId: null },
];

const defaultTo = new Date();

const main = async () => {
  try {
    // Reset database
    await db.delete(accounts).execute();
    // Seed accounts
    await db.insert(accounts).values(SEED_ACCOUNTS).execute();
  } catch (error) {
    console.error("Error during seed:", error);
    process.exit(1);
  }
};

main();
