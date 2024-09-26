import React from "react";

const Timeline = () => {
  return (
    <div className="relative md:ml-10 ml-2">
      <div className="flex items-start mb-10 relative">
        <div className="absolute left-0 top-0 h-full border-l-4 border-orange-300"></div>
        <div className="relative z-10 rounded-full p-3 h-4 w-4 border-4 font-semibold  text-gray-500 border-orange-500 text-center"></div>
        <div className="sm:ml-6 p-6 bg-gray-100 rounded-lg shadow-lg ">
          <h3 className="text-lg font-semibold">Recipe</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            distinctio obcaecati. Commodi officia officiis similique qui
            consectetur n uscipit distinctio!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
