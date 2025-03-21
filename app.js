import express from "express";
import { NODE_ENV, PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.get("/", (req, res) => {
  res.end("Welcome to subscription tracker api");
});
app.listen(PORT, async () => {
  console.log(
    `Subscription Tracker API is runnung on http://localhost:${PORT}`
  );

  // conect to database
  await connectToDatabase();
});
