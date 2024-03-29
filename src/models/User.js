import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  avatarUrl: String,
  password: { type: String },
  name: { type: String, required: true },
  address: String,
  introduction: String,
  socialOnly: { type: Boolean, default: false },
  postalCode: { type: String },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 7);
});
const User = mongoose.model("User", userSchema);
export default User;
