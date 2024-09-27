import { recipeModel } from "@/models/recipe-models";
import { replaceMongoInArray } from "@/utils/data-util";

async function getAllRecipes() {
  const allRecipes = await recipeModel.find().lean();
  return replaceMongoInArray(allRecipes);
}

export { getAllRecipes };
