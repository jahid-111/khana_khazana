import { getCategories } from "@/db/queries";
import Link from "next/link";
import React from "react";

const Categories = async () => {
  const categories = await getCategories();
  // console.log("categories", categories);
  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="font-bold text-xl">Recipes {categories}</h3>
      {categories?.map((category, i) => (
        <ul key={i} className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
          <li>
            <Link href={`/category/${category}`}>{category}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Categories;
