import express from "express";

import { intro, story } from "../controllers/globalController.js";
import {
  getJoin,
  getLogin,
  postJoin,
  postLogin,
} from "../controllers/userController.js";
import { publicOnlyMiddleware } from "../middlewares.js";

const globalRouter = express.Router();

globalRouter.get("/", intro);
globalRouter
  .route("/join")
  .all(publicOnlyMiddleware)
  .get(getJoin)
  .post(postJoin);
globalRouter
  .route("/login")
  .all(publicOnlyMiddleware)
  .get(getLogin)
  .post(postLogin);
globalRouter.get("/story", story);
// globalRouter.get("/fira", fira);
// globalRouter.get("/akrotiri", akrotiri);
// globalRouter.get("/firostefani", firostefani);
// globalRouter.get("/imerovigli", imerovigli);
// globalRouter.get("/kamari", kamari);

export default globalRouter;
