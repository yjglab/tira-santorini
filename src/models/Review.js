import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  createdAt: { type: Date, required: true, default: Date.now },
});
const Review = mongoose.model("Review", reviewSchema);
export default Review;
