import { config } from "dotenv";

// Load environment variables from a file based on NODE_ENV
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

// Correct way to export environment variables
export const {PORT,NODE_ENV,DB_URI} =process.env;
