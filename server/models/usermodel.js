import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      default:
        "https://cdn3.vectorstock.com/i/1000x1000/51/87/student-avatar-user-profile-icon-vector-47025187.jpg",
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
