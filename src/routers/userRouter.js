import express from "express";
import {
  finishGithubLogin,
  startGithubLogin,
  logout,
  getSetProfile,
  postSetProfile,
  getChangePw,
  postChangePw,
  myProfile,
} from "../controllers/userController";
import {
  loggedInOnlyMiddleware,
  publicOnlyMiddleware,
  uploadAvatarMiddleware,
} from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", loggedInOnlyMiddleware, logout);
userRouter
  .route("/set-profile")
  .all(loggedInOnlyMiddleware)
  .get(getSetProfile)
  .post(uploadAvatarMiddleware.single("avatar"), postSetProfile);
userRouter
  .route("/change-password")
  .all(loggedInOnlyMiddleware)
  .get(getChangePw)
  .post(postChangePw);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);

userRouter.get("/:id", myProfile);
export default userRouter;
