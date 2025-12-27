import { domain, useCart } from '../store';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="bg-[#F6F6F6] rounded shadow p-4 flex flex-col">
      <img height={'200'} src={product.coverImg ? domain + product.coverImg?.url : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'} />
      <h1>{product?.name}</h1>
      <h1>
        <del>$ {product?.originalPrice}</del> {product?.discountPrice}
      </h1>
      <button onClick={() => addToCart(product)} className="btn text-white bg-dark w-full">
        Add To Cart
      </button>
    </div>
  );
}
