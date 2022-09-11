import express from "express";

import {
  intro,
  shop,
  story,
  review,
  store,
} from "../controllers/globalController.js";
import {
  getRegister,
  getLogin,
  postRegister,
  postLogin,
} from "../controllers/userController.js";
import { publicOnlyMiddleware } from "../middlewares.js";

const globalRouter = express.Router();

globalRouter.get("/", intro);
globalRouter
  .route("/register")
  .all(publicOnlyMiddleware)
  .get(getRegister)
  .post(postRegister);
globalRouter
  .route("/login")
  .all(publicOnlyMiddleware)
  .get(getLogin)
  .post(postLogin);
globalRouter.get("/story", story);
globalRouter.get("/shop", shop);
globalRouter.get("/store", store);
globalRouter.get("/review", review);

export default globalRouter;
