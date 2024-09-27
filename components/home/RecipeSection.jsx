import React from "react";
import Categories from "./Categories";
import Recipe from "./Recipe";
import { getAllRecipes } from "@/db/queries";

const RecipeSection = async () => {
  const allRecipe = await getAllRecipes();
  // console.log(">>>>>allRecipe", allRecipe);
  return (
    <section className="container py-8">
      <div className="grid grid-cols-12 py-4">
        <Categories />

        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
            {allRecipe.map((recipe) => (
              <Recipe recipe={recipe} key={recipe.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;
