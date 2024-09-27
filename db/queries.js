import { recipeModel } from "@/models/recipe-models";
import { userModel } from "@/models/user-models";
import { replaceMongoInArray } from "@/utils/data-util";

async function getAllRecipes() {
  const allRecipes = await recipeModel.find().lean();
  return replaceMongoInArray(allRecipes);
}

async function createUser(user) {
  return await userModel.create(user);
}
export { getAllRecipes, createUser };
