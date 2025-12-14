import React from "react";
import Image from "../assets/92e8cbf43a7b882297a50eef7547660bf255be39.png";
import car from "../assets/delivery-truck-svgrepo-com (1) 1.png";
import verify from "../assets/verify.png";
const ItemDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 px-20 py-5">
      <img
        className="lg:h-129 h-80 lg:w-134 w-full object-cover rounded"
        src={Image}
        alt=""
      />
      <div className="flex flex-col  gap-7">
        <h2 className="text-[40px] font-bold font-roboto ">
          Apple iPhone 14 Pro Max
        </h2>
        <p className="text-3xl font-semibold text-dark font-roboto">
          $999.99{" "}
          <del className="text-gray-500 text-2xl font-roboto">$1199.99</del>
        </p>
        <p className="w-full md:w-1/2 text-gray-500 font-roboto">
          This is a detailed description of the item. It provides all the
          necessary information that a user might need to know about this
          particular item.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <button className="bg-transparent hover:bg-dark hover:text-white border transition duration-200 cursor-pointer px-4 py-4 rounded font-roboto">
            Add to Wishlist
          </button>
          <button className="bg-dark hover:bg-transparent hover:text-dark border transition duration-200 cursor-pointer  text-white px-4 py-4 rounded font-roboto">
            Add to Cart
          </button>
        </div>
        <div className="w-full flex mt-5 px-2 gap-15">
          <div className="flex gap-5 items-center">
            <div className="bg-gray-200 p-4 rounded-2xl">
              <img className="h-10 w-10 " src={car} alt="delivery" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-roboto text-gray-700 text-[16px]">
                Free Delivery
              </p>
              <p className="font-roboto text-[16px]">1-2 day</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="bg-gray-200 p-4 rounded-2xl">
              <img className="h-10 w-10 " src={car} alt="delivery" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-roboto text-gray-700 text-[16px]">
                In Stock
              </p>
              <p className="font-roboto text-[16px]">Today</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="bg-gray-200 p-4 rounded-2xl">
              <img className="h-10 w-10 " src={verify} alt="delivery" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-roboto text-gray-700 text-[16px]">
               Guaranteed
              </p>
              <p className="font-roboto text-[16px]">1 year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
