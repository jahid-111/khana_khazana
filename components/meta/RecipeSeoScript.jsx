import React from "react";

const RecipeSeoScript = ({ recipe }) => {
  //encoded

  const formattedData = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    name: recipe?.name,
    image: recipe?.thumbnail,
    author: {
      "@type": "Person",
      name: recipe?.author,
    },
    datePublished: new Date(),
    description: recipe.description,
    recipeCuisine: "American",
    prepTime: "PT1M",
    cookTime: recipe?.activeTime,
    totalTime: recipe?.totalTime,
    keywords: "non-alcoholic",
    recipeYield: "4 servings",
    recipeCategory: recipe?.category,

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: recipe.rating,
      ratingCount: 18,
    },
    recipeIngredient: recipe?.steps,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(formattedData) }}
    />
  );
};

export default RecipeSeoScript;
