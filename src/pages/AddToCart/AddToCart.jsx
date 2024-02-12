import { useLoaderData } from "react-router-dom";
import PayPalPayment from "../../components/PayPalPayment/PayPalPayment";
import { useState } from "react";

const AddToCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const product = useLoaderData();
  const { _id, name, discount, description, price } = product.product;
  const originalPrice = parseInt(price).toFixed(2);
  const discountedPrice = (price - parseInt((price * discount) / 100)).toFixed(
    2
  );

  return (
    <div className="flex md:flex-row flex-col items-center md:items-start w-full mt-10 md:px-[5%] px-[10%] gap-10 max-w-[1200px] mx-auto xl:h-[100vh]">
      <div className="md:w-[50%] w-full flex flex-row items-start justify-end">
        <img
          src={`http://localhost:5000/api/v1/product/product/photo?id=${_id}`}
          alt=""
          className="max-h-[300px] md:max-h-[500px] w-full h-full md:object-contain object-scale-down "
        />
      </div>
      <div className="md:w-[50%] w-full flex flex-col md:items-start items-center md:gap-5 gap-2">
        <span className="md:text-3xl text-xl font-bold">{name}</span>
        <div className="flex flex-row items-center gap-5">
          <span className="md:text-3xl text-lg">{discountedPrice} $</span>
          <span className="line-through md:text-lg text-sm text-[#808080]">
            {originalPrice} $
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:w-full w-[60%] text-base text-white bg-red-600 hover:bg-red-700 rounded md:py-2 py-1"
        >
          Buy Now
        </button>

        {isOpen && (
          <div className="w-full">
            <PayPalPayment product={product} />
          </div>
        )}
        <span className="border-t pt-2 text-xs md:text-lg text-[#808080]">
          {description}
        </span>
      </div>
    </div>
  );
};

export default AddToCart;
