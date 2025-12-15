export default function ButtonsItemDetails() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      <button className="bg-transparent hover:bg-dark hover:text-white border transition duration-200 cursor-pointer px-4 py-4 rounded font-roboto">
        Add to Wishlist
      </button>
      <button className="bg-dark hover:bg-transparent hover:text-dark border transition duration-200 cursor-pointer  text-white px-4 py-4 rounded font-roboto">
        Add to Cart
      </button>
    </div>
  );
};
