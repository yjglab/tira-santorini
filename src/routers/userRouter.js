import express from "express";
import {
  finishGithubLogin,
  startGithubLogin,
  logout,
  getProfile,
  postProfile,
  getChangePw,
  postChangePw,
} from "../controllers/userController";
import { loggedInOnlyMiddleware, publicOnlyMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", loggedInOnlyMiddleware, logout);
userRouter
  .route("/profile")
  .all(loggedInOnlyMiddleware)
  .get(getProfile)
  .post(postProfile);
userRouter
  .route("/change-password")
  .all(loggedInOnlyMiddleware)
  .get(getChangePw)
  .post(postChangePw);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
export default userRouter;
