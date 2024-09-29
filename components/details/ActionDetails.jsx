"use client";
import { addInterestedRecipe } from "@/actions";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaShare } from "react-icons/fa";

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
      <Link
        href={`/details/share/${recipeID}`}
        className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]"
      >
        <FaShare />
        <span>Share</span>
      </Link>
    </div>
  );
};

export default ActionDetails;
