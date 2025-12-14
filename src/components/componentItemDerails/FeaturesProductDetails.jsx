import React from "react";
import car from "../../assets/delivery-truck-svgrepo-com (1) 1.png";
import verify from "../../assets/verify.png";
import shoop from "../../assets/shop-2-svgrepo-com 2.png";
const FeaturesProductDetails = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-4 px-2 py-5 items-center">
      <div className="flex gap-4 items-center justify-center ">
        <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center">
          <img className="w-7" src={car} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="whitespace-nowrap text-gray-700 text-[16px]">
            Free Delivery
          </p>
          <p className="whitespace-nowrap text-[16px]">1-2 day</p>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-center ">
        <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center">
          <img className="w-7" src={shoop} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="whitespace-nowrap text-gray-700 text-[16px]">
            In Stock
          </p>
          <p className="whitespace-nowrap text-[16px]">Today</p>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-center ">
        <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center">
          <img className="w-7" src={verify} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="whitespace-nowrap text-gray-700 text-[16px]">
            Guaranteed
          </p>
          <p className="whitespace-nowrap text-[16px]">1 year</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesProductDetails;
