import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  googleId: { type: String },
  verificationCode: { type: String },
  isVerified: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);
export default User;
