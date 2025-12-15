import { useState } from "react";
import CartItem from "../components/CartItem";


export default function CartPage() {

  return <div className="container flex w-[1440px] sm:h[1432px] lg:h-[736px] lg:px-[160px] lg:py-[40px] chau-font">
    <div className="w-[1120px] lg:h-[656px] sm:h-[1432px] flex lg:flex-row sm:flex-col justify-center pt-3 gap-[48px]">
      <div className="w-full flex flex-col gap-[40px]">
        <h1 className="font-chau font-normal text-[24px] leading-[24px] tracking-normal font-semibold">Shopping Cart</h1>
        <div className="flex flex-col gap-[80px]">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
      <div className="w-full max-w-[536px] h-[656px] border border-[#EBEBEB] rounded-[10px] px-[64px] py-[56px] flex flex-col gap-[40px] bg-white">

        <h2 className="text-[20px] font-semibold text-black">
          Order Summary
        </h2>

        <div className="flex flex-col gap-2">
          <label className="text-[14px] text-[#6B6B6B]">
            Discount code / Promo code
          </label>
          <input
            type="text"
            placeholder="Code"
            className="input input-bordered border-[#9F9F9F] w-[408px] h-[56px] bg-white text-[14px] text-black placeholder:text-[#9E9E9E]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[14px] text-[#6B6B6B]">
            Your bonus card number
          </label>

          <div className="relative w-full">
            <input
              type="text"
              placeholder="Enter Card Number"
              className="input input-bordered border-[#9F9F9F] w-[408px] h-[64px] w-full pr-[120px] text-[14px] bg-white text-black placeholder:text-[#9E9E9E]"
            />

            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 
                   px-6 h-9 rounded-md border border-black 
                   text-black text-sm bg-white hover:bg-gray-50 cursor-pointer">Apply</button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <span className="text-black font-semibold text-[18px]">Subtotal</span>
            <span className="text-black font-semibold">$2347</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#6B6B6B] font-medium">Estimated Tax</span>
            <span className="text-black font-semibold">$50</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#6B6B6B] font-medium">
              Estimated shipping & Handling
            </span>
            <span className="text-black font-semibold">$29</span>
          </div>

          <div className="flex justify-between pt-2">
            <span className="text-black font-semibold text-[18px]">Total</span>
            <span className="text-black font-semibold text-[18px]">$2426</span>
          </div>
        </div>
        <button className="w-[408px] h-[56px] px-[56px] py-[16px] bg-black text-white rounded-lg text-base cursor-pointer">
          Checkout
        </button>

      </div>

    </div>
  </div>;
}




