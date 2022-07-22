import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/tira", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
const handleOpen = () => console.log("🟢 DATABASE 연결");
const handleError = (err) => console.log("🔺 DATABASE 에러", err);

db.on("error", handleError);
db.once("open", handleOpen);
