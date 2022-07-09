import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import mainRouter from "./routers/mainRouter.js";
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // string to JS object
app.use(express.text());
app.use(logger);
app.use("/static", express.static("assets")); // access 부여

app.use("/", globalRouter);
app.use("/main", mainRouter);

export default app;
