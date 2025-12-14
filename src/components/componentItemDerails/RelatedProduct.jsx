import React from 'react'

import phone1 from '../../assets/phone1.png';
const RelatedProduct = () => {
  return (
    <div className="w-full py-5 flex flex-col gap-5 px-3">
        <h3 className="text-2xl font-bold font-roboto">Related Products</h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div className='flex flex-col gap-5 px-6 py-7 bg-gray-200 rounded'>
                <img className='rounded' src={phone1} alt="" />
                <h4 className='font-bold'>Product Name</h4>
                <p className='font-semibold'>$199.99</p>
                <button className="btn text-white bg-dark w-full hover:bg-transparent hover:text-dark">Add To Cart</button>
            </div>
            <div className='flex flex-col gap-5 px-6 py-7 bg-gray-200 rounded'>
                <img className='rounded' src={phone1} alt="" />
                <h4 className='font-bold'>Product Name</h4>
                <p className='font-semibold'>$199.99</p>
                <button className="btn text-white bg-dark w-full hover:bg-transparent hover:text-dark">Add To Cart</button>
            </div>
            <div className='flex flex-col gap-5 px-6 py-7 bg-gray-200 rounded'>
                <img className='rounded' src={phone1} alt="" />
                <h4 className='font-bold'>Product Name</h4>
                <p className='font-semibold'>$199.99</p>
                <button className="btn text-white bg-dark w-full hover:bg-transparent hover:text-dark">Add To Cart</button>
            </div>
            <div className='flex flex-col gap-5 px-6 py-7 bg-gray-200 rounded'>
                <img className='rounded' src={phone1} alt="" />
                <h4 className='font-bold'>Product Name</h4>
                <p className='font-semibold'>$199.99</p>
                <button className="btn text-white bg-dark w-full hover:bg-transparent hover:text-dark">Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default RelatedProduct
