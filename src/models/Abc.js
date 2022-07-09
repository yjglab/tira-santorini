import mongoose from "mongoose";

const abc = new mongoose.Schema({
  a: [],
  b: String,
  c: String,
  d: String,
  e: Number,
});

const Abc = mongoose.model("Abc", abc);
export default Abc;
