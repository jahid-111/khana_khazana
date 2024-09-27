import { recipeModel } from "@/models/recipe-models";

async function getAllRecipes() {
  const allRecipes = await recipeModel.find();
  return allRecipes;
}

export { getAllRecipes };
