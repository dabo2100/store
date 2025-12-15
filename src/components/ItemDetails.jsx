import Image from "../assets/92e8cbf43a7b882297a50eef7547660bf255be39.png";

export default function ItemDetails() {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-10 lg:gap-20 py-5 px-2">
        <img
          className="w-full h-80 lg:h-[516px] col-span-3 lg:col-span-2 object-cover rounded-lg"
          src={Image}
          alt=""
        />
        <div className="flex flex-col col-span-3 gap-7">
          <h2 className="text-[32px] md:text-[40px] font-bold font-roboto leading-tight">
            Apple iPhone 14 Pro Max
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-dark font-roboto">
            $999.99{" "}
            <del className="text-gray-500 text-xl md:text-2xl font-roboto">$1199.99</del>
          </p>
          <p className="w-full text-gray-500 font-roboto">
            This is a detailed description of the item. It provides all the
            necessary information that a user might need to know about this
            particular item.
          </p>
        </div>
      </div>
    </div>
  );
};
