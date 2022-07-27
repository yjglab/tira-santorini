import express from "express";
import {
  finishGithubLogin,
  startGithubLogin,
  logout,
  getProfile,
  postProfile,
} from "../controllers/userController";
import { loggedInOnlyMiddleware, publicOnlyMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", loggedInOnlyMiddleware, logout);
userRouter
  .route("/profile")
  .all(loggedInOnlyMiddleware)
  .get(getProfile)
  .post(postProfile);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
export default userRouter;
