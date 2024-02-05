import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi";
import { decreaseItem, increaseItem, removeFromCart } from "./CartSlice";
import { useDispatch } from "react-redux";
const AllItems = (item) => {
  const { _id, name, price, quantity, discount } = item.item;
  const discountedPrice = (price - parseInt((price * discount) / 100)).toFixed(
    2
  );
  const dispatch = useDispatch()
      const handleRemoveItem =(item)=>{
        dispatch(removeFromCart(item))
      }
      const handleDecreaseItem = (item)=>{
        dispatch(decreaseItem(item))
      }
      const handleIncreaseItem =(item)=>{
        dispatch(increaseItem(item))
      }
  return (
    <div className="w-full shadow-sm hover:shadow-lg btn-transition flex flex-col h-[200px]">
      <div className="flex flex-row items-start gap-5 w-full h-full">
        <img
          src={`http://localhost:5000/api/v1/product/product/photo?id=${_id}`}
          alt=""
          className="h-full p-2"
        />
        <div className="flex flex-col items-start w-full gap-5">
          <span className="text-xl">{name}</span>
          <div className="flex flex-row items-center gap-5">
            <span className="text-xl">Quantity : {quantity}</span>
            <span className="text-xl">Price : ${discountedPrice * quantity}</span>
            <span className="line-through text-lg text-[#808080]">${price}</span>
          </div>
          <div className="flex flex-row items-center gap-5 w-full">
            <div className="flex flex-row items-center gap-2">
              <button onClick={()=>handleDecreaseItem(item)} className="border p-1 hover:scale-125 border-transparent hover:shadow-lg btn-transition rounded-sm">
                <HiOutlineMinus size={25} />
              </button>
              <span className="text-xl">{quantity}</span>
              <button onClick={()=>handleIncreaseItem(item)} className="border p-1 hover:scale-125 border-transparent hover:shadow-lg btn-transition rounded-sm">
                <GoPlus size={25} />
              </button>
            </div>
            <div>
              <button onClick={()=>handleRemoveItem(item)} className="bg-black text-white px-5 py-2 hover:bg-transparent hover:border-black border btn-transition rounded-none hover:text-black">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItems;
