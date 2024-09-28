import mongoose, { models } from "mongoose";
import { Types } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string;
  width: number;
  height: number;
  config?: object;
  transformationUrl?: URL;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author?: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const ImageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    transformationType: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
    },
    secureUrl: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    config: { type: Object },
    transformationUrl: {
      type: URL,
    },
    aspectRatio: {
      type: String,
    },
    color: {
      type: String,
    },
    prompt: {
      type: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Image = models?.image || mongoose.model("Image", ImageSchema);

export default Image;
