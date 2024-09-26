import ProductByCategories from "@/components/ProductByCategories";
import React from "react";

export function generateMetadata({ params: { category } }) {
  return {
    title: `Recipe Details  || ${category} `,
    description: "How to make ${}",
  };
}

const CategoryPage = ({ params: { category } }) => {
  return (
    <div>
      meta Category{category}
      <ProductByCategories category={category} />
    </div>
  );
};

export default CategoryPage;
