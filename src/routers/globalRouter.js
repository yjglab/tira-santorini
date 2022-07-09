import express from "express";

import { intro } from "../controllers/globalController.js";

const globalRouter = express.Router();

globalRouter.get("/", intro);
export default globalRouter;
