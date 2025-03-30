import { Router } from "express";
import authorize from "../middlewares/auth.middlewares.js";
import {
  cancelSubscription,
  createSubscription,
  deleteSubscription,
  getAllSubscriptions,
  getSubscriptionById,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", getAllSubscriptions);

subscriptionRouter.get("/:id", getSubscriptionById);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "Update Subscription not yet implemented" })
);

subscriptionRouter.delete("/:id/delete", authorize, deleteSubscription);//cancel by subscription plan id authorize by sign in user

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions); // get user subscriptions for specific user

subscriptionRouter.put("/:id/cancel", authorize, cancelSubscription); //cancel by subscription plan id authorize by sign in user

subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "Not yet upcoming Renawals" })
);

export default subscriptionRouter;
