import React from "react";
import Categories from "./Categories";
import Recipe from "./Recipe";

const RecipeSection = () => {
  return (
    <main>
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <Categories />
          <Recipe />
        </div>
      </section>
    </main>
  );
};

export default RecipeSection;
