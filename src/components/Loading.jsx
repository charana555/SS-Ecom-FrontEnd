import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen border border-gray-200 rounded-lg bg-gray-50 ">
      <div className="px-5 py-3 text-2xl font-medium leading-none text-center text-orange-700 bg-orange-200 rounded-full animate-pulse ">
        loading...
      </div>
    </div>
  );
};

export default Loading;
