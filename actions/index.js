"use server";

import { createUser, findUserByCredential, updateInterest } from "@/db/queries";
import { revalidatePath } from "next/cache";
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

async function addInterestedRecipe(recipeId, userId) {
  try {
    const updatedUser = await updateInterest(recipeId, userId);
    revalidatePath(`/details/${recipeId}`);
    return updatedUser;
  } catch (error) {
    console.error("Error updating interest:", error);
  }
}

export { registerUser, loginUserAccess, addInterestedRecipe };
