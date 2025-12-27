import { IoMdClose } from 'react-icons/io';
import { domain, useCart } from '../store';

export default function CartItem({ product }) {
  const { incrmentQty, decrmentQty, removeFromCart } = useCart();

  return (
    <div className="flex w-full gap-2 items-center">
      <div className="flex justify-center items-center h-25 w-25 border rounded-xl overflow-hidden">
        <img className="w-full h-full object-cover" src={product.coverImg ? domain + product.coverImg?.url : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'} alt="" />
      </div>
      <div className="flex w-[431px] h-[88px] justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="w-50 font-normal text-[16px] leading-[24px] tracking-normal">{product.name}</h1>
          <h1 className="font-normal text-[14px] leading-[24px] tracking-normal">Total : $ {product.qty * (product.discountPrice ? product.discountPrice : product.originalPrice)} </h1>
        </div>
        <div className="flex flex-col w-[110px] h-[88px] gap-[24px]">
          <div className="flex justify-center items-center gap-10">
            <h1>${product.discountPrice ? product.discountPrice : product.originalPrice}</h1>
            <IoMdClose onClick={() => removeFromCart(product.documentId)} className="cursor-pointer" />
          </div>
          <div className="flex items-center rounded-md overflow-hidden">
            <button className="px-3 py-1 hover:bg-gray-100 cursor-pointer" onClick={() => decrmentQty(product.documentId)}>
              −
            </button>

            <div className="px-4 select-none">{product.qty}</div>

            <button className="px-3 py-1 hover:bg-gray-100 cursor-pointer" onClick={() => incrmentQty(product.documentId)}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
