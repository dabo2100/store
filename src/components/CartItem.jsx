import { useState } from "react";
import { IoMdClose } from "react-icons/io";
export default function CartItem() {
    const [counter, setcounter] = useState(1)

    const increase = () => {
        setcounter(counter + 1)
    }

    const decrease = () => {
        if (counter > 1) {
            setcounter(counter - 1)
        }
    }

    return (
        <div className="flex w-full gap-2 items-center">
            <div className="flex justify-center items-center h-25 w-25 border rounded-xl overflow-hidden">
                <img className="w-full h-full object-cover" src="http://82.112.241.233:2007/uploads/thumbnail_92e8cbf43a7b882297a50eef7547660bf255be39_96b7cac03a.png" alt="" />
            </div>
            <div className="flex w-[431px] h-[88px] justify-between">
                <div className="flex flex-col gap-2">
                    <h1 className="w-50 font-normal text-[16px] leading-[24px] tracking-normal">Apple iPhone 14 Pro Max 128Gb Deep Purple</h1>
                    <h1 className="font-normal text-[14px] leading-[24px] tracking-normal">#25139526913984</h1>
                </div>
                <div className="flex flex-col w-[110px] h-[88px] gap-[24px]">
                    <div className="flex justify-center items-center gap-10">
                        <h1>$1399</h1>
                        <IoMdClose className="cursor-pointer" />
                    </div>
                    <div className="flex items-center rounded-md overflow-hidden">
                        <button className="px-3 py-1 hover:bg-gray-100 cursor-pointer" onClick={decrease}>−</button>

                        <div className="px-4 select-none">{counter}</div>

                        <button className="px-3 py-1 hover:bg-gray-100 cursor-pointer" onClick={increase}>+</button>
                    </div>

                </div>

            </div>
        </div>
    )
}
