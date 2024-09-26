import React from "react";
import Categories from "./Categories";
import Recipe from "./Recipe";

const RecipeSection = () => {
  return (
    <section className="container py-8">
      <div className="grid grid-cols-12 py-4">
        <Categories />

        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
            <Recipe />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;
