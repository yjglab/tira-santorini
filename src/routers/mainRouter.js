import express from "express";

import { main } from "../controllers/mainController";

const mainRouter = express.Router();

mainRouter.get("/", main);

export default mainRouter;
