import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import session from "express-session";
import { localsMiddleware } from "./middlewares.js";
import MongoStore from "connect-mongo";
import flash from "express-flash";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", [
  process.cwd() + "/src/views",
  process.cwd() + "/src/views/pages",
]);

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // string to JS object
app.use(express.text());
app.use(logger);

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false, // login user에게만 쿠키 부여
    saveUninitialized: false, // login user에게만 쿠키 부여
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }), // db에 세션저장
    // cookie: {
    //   maxAge: 5000, // 만료시간
    // },
  })
);

app.use(flash());
app.use(localsMiddleware);
app.use("/userUploads", express.static("userUploads"));
app.use("/static", express.static("assets")); // access 부여
app.use("/", globalRouter);

app.use("/users", userRouter);
app.get("*", (req, res) => {
  res.status(404).render("404", { pageTitle: "404 Not Found" });
});
export default app;
