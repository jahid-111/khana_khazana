import DetailsCard from "@/components/details/DetailsCard";
import MakingRecipe from "@/components/details/MakingRecipe";
import React from "react";

export function generateMetadata({ params: { id } }) {
  return {
    title: "Recipe Details  || ${name} ",
    description: "How to make ${}",
  };
}

const RecipeDetailsPage = ({ params: { id } }) => {
  return (
    <div>
      <h3 className="text-red-600"> Details ID {id}</h3>
      <DetailsCard />
      <MakingRecipe />
    </div>
  );
};

export default RecipeDetailsPage;
