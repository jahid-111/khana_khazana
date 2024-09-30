import DetailsCard from "@/components/details/DetailsCard";
import MakingRecipe from "@/components/details/MakingRecipe";
import Loading from "@/components/Loading";
import { getRecipeById } from "@/db/queries";
import React, { Suspense } from "react";

export async function generateMetadata({ params: { id } }) {
  const data = await getRecipeById(id);

  return {
    title: `Recipe Details  || ${data?.name} `,
    description: `How to make ${data?.description}`,
  };
}

const RecipeDetailsPage = async ({ params: { id } }) => {
  const recipe = await getRecipeById(id);
  // console.log("✔️", recipe?.steps);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <DetailsCard recipe={recipe} />
        <h3 className=" text-orange-600 font-semibold text-3xl my-10 underline">
          How to make
        </h3>
        {recipe?.steps.map((step, i) => (
          <MakingRecipe key={recipe.id} step={step} i={i} />
        ))}
      </Suspense>
    </div>
  );
};

export default RecipeDetailsPage;
