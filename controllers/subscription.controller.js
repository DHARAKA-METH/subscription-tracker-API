import Subscription from "../models/subscription.model.js";
import { workflowClient } from "../config/upstash.js";
import { SERVER_URL } from "../config/env.js";

export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    const { workflowRunId } = await workflowClient.trigger({
      url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
      body: {
        subscriptionId: subscription._id,
      },
      headers: {
        "content-type": "application/json",
      },
      retries: 0,
    });

    res.status(201).json({
      success: true,
      data: { subscription, workflowRunId },
    });
  } catch (error) {
    next(error);
  }
};

export const getUserSubscriptions = async (req, res, next) => {
  try {
    // console.log("requesr user",req.user);
    // console.log("requesr user id",req.user.id);
    // console.log("requesr user _id",req.user._id);
    // console.log("requesr param id",req.params.id);

    if (req.user.id !== req.params.id) {
      const error = new Error("You are not the owner of this account");
      error.statusCode = 401;
      throw error;
    }

    const subscriptions = await Subscription.find({ user: req.params.id });
    res.status(200).json({
      success: true,
      data: subscriptions,
    });
  } catch (e) {
    next(e);
  }
};

export const getAllSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.find();
    res.status(200).json({
      success: true,
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};

export const getSubscriptionById = async (req, res, next) => {
  try {
    const subscriptionPlan = await Subscription.findById(req.params.id);
    if (!subscriptionPlan) {
      const error = new error("Subscription Plan not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({
      success: true,
      data: subscriptionPlan,
    });
  } catch (error) {
    next(error);
  }
};

export const cancelSubscription = async (req, res, next) => {
  try {
    const cancelPlan = await Subscription.findByIdAndUpdate(req.params.id, {
      data: { status: "inactive" },
    });

    if (!cancelPlan) {
      const error = new error("Subscription Plan not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      message: "Subscription plan canceled successfully",
      data: cancelPlan,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteSubscription = async (req, res, next) => {
  try {
    const deletelPlan = await Subscription.findByIdAndDelete(req.params.id);

    if (!deletelPlan) {
      const error = new error("Subscription Plan not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      message: "Subscription paln deleted successfully",
      data: deletelPlan,
    });
  } catch (error) {
    next(error);
  }
};
