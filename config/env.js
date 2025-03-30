import { config } from "dotenv";

// Load environment variables from a file based on NODE_ENV
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

// Correct way to export environment variables
export const {
  PORT,
  NODE_ENV,
  DB_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  ARCJET_KEY,
  ARCJET_ENV,
  QSTASH_URL,
  QSTASH_TOKEN,
  SERVER_URL,
  EMAIL_PASSWORD
} = process.env;
