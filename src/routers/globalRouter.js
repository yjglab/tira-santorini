import express from "express";

import { intro, story } from "../controllers/globalController.js";
import { getJoin, login, postJoin } from "../controllers/userController.js";

const globalRouter = express.Router();

globalRouter.get("/", intro);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.get("/login", login);
globalRouter.get("/story", story);
// globalRouter.get("/fira", fira);
// globalRouter.get("/akrotiri", akrotiri);
// globalRouter.get("/firostefani", firostefani);
// globalRouter.get("/imerovigli", imerovigli);
// globalRouter.get("/kamari", kamari);

export default globalRouter;
