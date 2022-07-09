import express from "express";

import { main, abc, def } from "../controllers/mainController";

const mainRouter = express.Router();

mainRouter.get("/", main);
mainRouter.get("/abc", abc);
mainRouter.get("/def", def);

export default mainRouter;
