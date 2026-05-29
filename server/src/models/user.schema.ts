import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: false },
    userEmail: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    jobTitle: { type: String, required: true },
    description: { type: String, required: true },
    accountStatus: {
      type: String,
      enum: ["active", "inactive", "suspended", "deleted"],
      default: "inactive",
    },
    lastActiveSession: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
