import { useLoaderData } from "react-router-dom";

const AddToCart = () => {
  const product = useLoaderData();
  const { _id, name, discount, description, productLink, price } =
    product.product;
    const originalPrice = (parseInt(price)).toFixed(2);
    const discountedPrice = (price-(parseInt((price * discount)/100))).toFixed(2);
  console.log(product);
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
        <span className="text-3xl font-bold">
          {name}
        </span>
        <div className="flex flex-row items-center gap-5">
          <span className="text-3xl ">{discountedPrice} $</span>
          <span className="line-through text-lg text-[#808080]">
            {originalPrice} $
          </span>
        </div>
        <button className="uppercase w-full py-2 bg-red-600 font-bold text-white">
          Add to cart
        </button>
        <span className="border-t pt-2 font-semibold">
          {description}
        </span>
      </div>
    </div>
  );
};

export default AddToCart;
