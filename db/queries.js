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

async function findUserByCredential(credential) {
  const user = await userModel.findOne(credential).lean();

  return user;
}

async function getCategories() {
  const uniqueCategories = await recipeModel.distinct("category");
  return uniqueCategories;
}

async function getByCategories(category) {
  const decodedCategory = decodeURIComponent(category);
  const categoriesArray = decodedCategory.split(",");

  const uniqueCategories = await recipeModel
    .find({ category: { $in: categoriesArray } })
    .lean();

  return replaceMongoInArray(uniqueCategories);
}

export {
  getAllRecipes,
  createUser,
  findUserByCredential,
  getRecipeById,
  getCategories,
  getByCategories,
};
