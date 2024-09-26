import React from "react";

const Recipe = () => {
  return (
    <div className="col-span-12 md:col-span-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
        <div className="card">
          {/* <img src="https://source.unsplash.com/-YHSwy6uqvk/300x160" className="rounded-md" alt=""> */}
          <h4 className="my-2">Chef John Turkey Sloppy Joes</h4>
          <div className="py-2 flex justify-between text-xs text-gray-500">
            <span>⭐️ 5.0</span>
            <span>By: John Doe</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
