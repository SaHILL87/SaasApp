//clerkid,username,first name ,last name,avatar,planId,creditbalance
import mongoose, { models } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  username: string;
  firstName: string;
  lastName: string;
  photo?: string;
  planId?: string;
  creditBalance: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    planId: {
      type: String,
      default: 1,
    },
    creditBalance: {
      type: Number,
      default: 10,
    },
  },
  { timestamps: true }
);

const User = models?.User || mongoose.model("User", UserSchema);

export default User;
