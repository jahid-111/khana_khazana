import Image from "next/image";
import Link from "next/link";
import React from "react";
import RecipeSeoScript from "../meta/RecipeSeoScript";

const Recipe = ({ recipe }) => {
  return (
    <div className="card bg-gray-100 rounded-md p-2">
      <RecipeSeoScript recipe={recipe} />
      <Link href={`/details/${recipe?.id}`}>
        <Image
          //"recipe.thumbnail" 404 in server
          src="/assets/images/notFoundImage.svg"
          className="rounded-md -mt-6"
          alt={recipe?.name}
          width={300}
          height={300}
        />
      </Link>
      <h4 className="my-2">
        <Link
          href={`/details/${recipe?.id}`}
          className="hover:underline hover:text-gray-600"
        >
          {recipe?.name}
        </Link>
      </h4>
      <div className="py-2 font-semibold text-[1rem] flex justify-between  text-gray-500">
        <span>Rating : {recipe?.rating} ⭐️</span>
        <span>by : {recipe?.author}</span>
      </div>
    </div>
  );
};

export default Recipe;
