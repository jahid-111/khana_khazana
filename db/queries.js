import { recipeModel } from "@/models/recipe-models";
import { userModel } from "@/models/user-models";
import { replaceMongoInArray, replaceMongoInObj } from "@/utils/data-util";

async function getAllRecipes() {
  const allRecipes = await recipeModel.find().lean();
  return replaceMongoInArray(allRecipes);
}

async function getRecipeById(recipeId) {
  const recipe = await recipeModel.findById(recipeId).lean();
  return replaceMongoInObj(recipe);
}

async function createUser(user) {
  return await userModel.create(user);
}
export { getAllRecipes, createUser, getRecipeById };
