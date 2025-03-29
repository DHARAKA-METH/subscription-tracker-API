import { Router } from "express";
import { sendReminder } from "../controllers/workflow.controller.js";

export const workflowRouter = Router();
workflowRouter.post("/subscription/reminder", sendReminder);
