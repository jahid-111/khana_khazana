"use client";
import { addInterestedRecipe } from "@/actions";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ActionDetails = ({ recipeID }) => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();
  const listInFav = auth?.favourites.find((list) => list === recipeID);
  const [isFavourite, setIsFavourite] = useState(listInFav);

  async function handleFavorite(recipeId) {
    const toggleRecipe = await addInterestedRecipe(recipeId, auth?.id);

    if (auth) {
      setAuth((prevAuth) => ({
        ...prevAuth,
        ...toggleRecipe,
        favourites: toggleRecipe.favourites,
      }));
      setIsFavourite((prv) => !prv);
    } else router.push("/login");
  }

  return (
    <div className="flex gap-4 justify-end">
      <button
        className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]"
        onClick={() => handleFavorite(recipeID)}
      >
        {isFavourite ? (
          <FaHeart className=" text-red-600 h-7" />
        ) : (
          <FaRegHeart className=" h-7" />
        )}

        <span>{isFavourite ? "Favorite" : "Add Favorite"}</span>
      </button>

      {/* Share button */}
      <div className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M8.7 10.7l6.6 -3.4" />
          <path d="M8.7 13.3l6.6 3.4" />
        </svg>
        <span>Share</span>
      </div>
    </div>
  );
};

export default ActionDetails;
