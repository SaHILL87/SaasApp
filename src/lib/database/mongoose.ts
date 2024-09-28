import mongoose, { Mongoose } from "mongoose";

const MongoDB_URL = process.env.MONGODB_URI;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectdb = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MongoDB_URL) {
    throw new Error("MongoDB_URL not found");
  }

  cached.promise =
    cached.promise ||
    mongoose.connect(MongoDB_URL, { dbName: "SaasApp", bufferCommands: false });

  cached.conn = await cached.promise;

  return cached.conn;
};
