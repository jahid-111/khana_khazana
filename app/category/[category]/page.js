import ProductByCategories from "@/components/ProductByCategories";
import { getByCategories } from "@/db/queries";
import React from "react";

export function generateMetadata({ params: { category } }) {
  const decodedCategory = decodeURIComponent(category);

  return {
    title: `Recipe Details || ${decodedCategory}`,
    description: `How to make recipes in the ${decodedCategory} category.`,
  };
}

const CategoryPage = async ({ params: { category } }) => {
  const decodedCategory = decodeURIComponent(category);

  const recipes = await getByCategories(decodedCategory);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Category: {decodedCategory}</h1>
      <ProductByCategories category={decodedCategory} recipes={recipes} />
    </div>
  );
};

export default CategoryPage;
