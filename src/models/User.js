import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: Number,
  location: String,
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 7);
});
const User = mongoose.model("User", userSchema);
export default User;
