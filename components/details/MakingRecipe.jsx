import React from "react";

const Timeline = ({ step, i }) => {
  return (
    <div className="relative md:ml-10 ml-2">
      <div className="flex items-start mb-10 relative">
        <div className="absolute left-0 top-0 h-full border-l-4 border-orange-300 "></div>
        <div className="relative z-10 rounded-full h-6 w-6 border-4 font-semibold text-gray-500 border-orange-500 flex items-center justify-center">
          <p className="text-center h-4 w-4 mb-2">{i + 1}</p>
        </div>
        <div className="sm:ml-6 p-4  bg-gray-100 rounded-lg shadow-lg">
          <p className="text-gray-600">{step}</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
