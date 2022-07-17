import express from "express";

import { intro, story } from "../controllers/globalController.js";

const globalRouter = express.Router();

globalRouter.get("/", intro);
globalRouter.get("/story", story);
// globalRouter.get("/fira", fira);
// globalRouter.get("/akrotiri", akrotiri);
// globalRouter.get("/firostefani", firostefani);
// globalRouter.get("/imerovigli", imerovigli);
// globalRouter.get("/kamari", kamari);

export default globalRouter;
