import React from 'react'
import car from "../../assets/delivery-truck-svgrepo-com (1) 1.png";
import verify from "../../assets/verify.png";
const FeaturesAdoutItemDetails = () => {
  return (
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
  )
}

export default FeaturesAdoutItemDetails
