import express from "express";

import {
  akrotiri,
  fira,
  firostefani,
  imerovigli,
  intro,
  kamari,
  oia,
} from "../controllers/globalController.js";

const globalRouter = express.Router();

globalRouter.get("/", intro);
globalRouter.get("/oia", oia);
globalRouter.get("/fira", fira);
globalRouter.get("/akrotiri", akrotiri);
globalRouter.get("/firostefani", firostefani);
globalRouter.get("/imerovigli", imerovigli);
globalRouter.get("/kamari", kamari);

export default globalRouter;
