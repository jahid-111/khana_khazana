import React from "react";
import Recipe from "./home/Recipe";

const ProductByCategories = ({ category }) => {
  return (
    <section className="container py-8">
      <div>
        <h3 className="font-semibold text-xl">{category}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
          <Recipe />
        </div>
      </div>
    </section>
  );
};

export default ProductByCategories;
