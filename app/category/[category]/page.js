import ProductByCategories from "@/components/ProductByCategories";
import React from "react";

const CategoryPage = ({ params: { category } }) => {
  return (
    <div>
      Category{category}
      <ProductByCategories category={category} />
    </div>
  );
};

export default CategoryPage;
