import { useLoaderData } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../components/Cart/CartSlice";
// import Cart from "../../components/Cart/Cart";
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

  // const dispatch = useDispatch();
  // const handleAddToCart = (product)=>{
  //   dispatch(addToCart(product));
  // }

  return (
    <div className="flex flex-row w-full mt-10 gap-10 max-w-[1200px] mx-auto h-[100vh]">
      <div className="w-[50%] flex flex-row items-start justify-end">
        <img
          src={`http://localhost:5000/api/v1/product/product/photo?id=${_id}`}
          alt=""
          className="w-[500px]"
        />
      </div>
      <div className="w-[50%] flex flex-col items-start gap-5">
        <span className="text-3xl font-bold">{name}</span>
        <div className="flex flex-row items-center gap-5">
          <span className="text-3xl ">{discountedPrice} $</span>
          <span className="line-through text-lg text-[#808080]">
            {originalPrice} $
          </span>
        </div>

        {/* <label htmlFor="my-drawer-4" onClick={()=>handleAddToCart(product.product)} className=" text-center uppercase cursor-pointer w-full py-2 bg-red-600 font-bold text-white">
          Add to cart
        </label> */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-white bg-red-600 hover:bg-red-700 rounded text-lg btn"
        >
          Buy Now
        </button>

        {isOpen && (
          <div className="w-full">
            <PayPalPayment product={product}/>
          </div>
        )}
        <span className="border-t pt-2 font-semibold">{description}</span>
      </div>
    </div>
  );
};

export default AddToCart;
