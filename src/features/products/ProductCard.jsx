import React from "react";

import { MdOutlineAddShoppingCart } from "react-icons/md";

const ProductCard = (data) => {
  return (
    <div className="border border-gray-500 w-[270px] rounded-lg p-3 bg-white">
      <div className="relative w-full h-[180px] max-h-[180px] object-cover border border-gray-300 p-1">
        <img
          className=" h-full  w-full object-contain "
          src={data.image}
          alt="..."
        />
        <div className="absolute top-0 text-xs mt-1 px-1.5 rounded-xl bg-[#F4F8EC] text-orange-600 z-10">
          <p className="tracking-wide">- {data.discount} %</p>
        </div>
      </div>
      <div>
        <h3 className="pt-2 font-bold">{data.title.slice(0, 20)}</h3>
        <p className=" text-sm text-gray-500 border-b pb-2">
          {data.description.slice(0, 100)}
        </p>

        <div className=" flex justify-between items-center  ">
          <div>
            <p className="text-lg font-bold">
              <span className=" font-medium"> ₹</span>
              {data.price}
              <span className=" font-medium text-xs"> INR</span>
            </p>
          </div>

          <div className="cursor-pointer text-orange-600 hover:bg-orange-50 hover:text-orange-600  hover:scale-[1.2] duration-200 ease-in-out border-2 border-transparent rounded-full">
            <MdOutlineAddShoppingCart className="m-2 text-xl text-inherit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
