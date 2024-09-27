"use server";

import { createUser } from "@/db/queries";
import { redirect } from "next/navigation";

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const create = await createUser(user);

  redirect("/login");
}

export { registerUser };
