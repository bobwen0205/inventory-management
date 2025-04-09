import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardController";

const dashboardRoutes = Router();

const dashboardRouter = Router();
dashboardRouter.get("/", getDashboardMetrics);

export default dashboardRouter;
