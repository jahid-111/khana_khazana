"use server";

import { createUser, findUserByCredential } from "@/db/queries";
import { redirect } from "next/navigation";

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const create = await createUser(user);

  redirect("/login");
}

async function loginUserAccess(formData) {
  try {
    const credential = {};

    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const user = await findUserByCredential(credential);
    return user;
  } catch (error) {
    throw new Error(`User Not Valid with "${formData.get("email")}"`);
  }
}

export { registerUser, loginUserAccess };
