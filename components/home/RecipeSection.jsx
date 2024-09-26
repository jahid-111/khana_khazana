import React from "react";
import Categories from "./Categories";
import Recipe from "./Recipe";

const RecipeSection = () => {
  return (
    <section className="container py-8">
      <div className="grid grid-cols-12 py-4">
        <Categories />
        <Recipe />
      </div>
    </section>
  );
};

export default RecipeSection;
