import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      required: [true, "User Name is required"],
      trim: true,
      minLength: 2,
      maxLength: 255,
    },
    email: {
      type: String,
      required: [true, "User Email is required"],
      unique: true,
      trim: true,
      minLength: 2,
      maxLength: 255,
      lowcase: true,
      match: [/\S+@\S+\.\S/, "Please fill a valid email address"],
    },

    password: {
      type: String,
      required: [true, "User Password is required"],
      minLength: 6,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
