import { recipeModel } from "@/models/recipe-models";
import { userModel } from "@/models/user-models";
import { replaceMongoInArray, replaceMongoInObj } from "@/utils/data-util";
import mongoose, { Mongoose } from "mongoose";

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
  console.log(user);
  if (user) {
    return replaceMongoInObj(user);
  }
  return null;
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

async function updateInterest(recipe_id, userId) {
  const recipe = await recipeModel.findById(recipe_id).lean();

  if (!recipe) {
    throw new Error("Recipe not found");
  }

  const user = await userModel.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  const recipeExists = user.favourites.includes(recipe_id);

  if (recipeExists) {
    user.favourites.pull(recipe_id);
  } else {
    user.favourites.push(recipe_id);
  }

  await user.save();

  console.log(user.favourites);

  return replaceMongoInObj(user.toObject());
}

export {
  getAllRecipes,
  createUser,
  findUserByCredential,
  getRecipeById,
  getCategories,
  getByCategories,
  updateInterest,
};
