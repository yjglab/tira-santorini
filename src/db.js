import mongoose from "mongoose";
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
const handleOpen = () => console.log("🟢 DATABASE 연결");
const handleError = (err) => console.log("🔺 DATABASE 에러", err);

db.on("error", handleError);
db.once("open", handleOpen);
