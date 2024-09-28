"use server";

import User from "../database/models/user.model";
import { IUser } from "../database/models/user.model";
import { connectdb } from "../database/mongoose";

export async function createUser(user: CreateUserParams) {
  try {
    await connectdb();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (err) {
    return err;
  }
}
