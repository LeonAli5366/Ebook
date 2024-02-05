import { useDispatch, useSelector } from "react-redux";
import AllItems from "./AllItems";
import PayPalPayment from "../PayPalPayment/PayPalPayment";
import { clearCart, getTotals } from "./CartSlice";
import { useEffect } from "react";

const Cart = () => {
  const AllItem = useSelector((state) => {
    return state.cart;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [AllItem, dispatch]);
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="drawer drawer-end z-20">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side overflow-x-hidden">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-[30rem] min-h-full bg-base-200 text-base-content flex flex-col items-center gap-10 justify-between pt-10">
          {/* Sidebar content here */}
          <div className="w-full h-auto gap-10 flex flex-col items-center">
            {AllItem.cartItems.length === 0 ? (
              <div className="text-xl">Cart Empty</div>
            ) : (
              AllItem.cartItems.map((item) => (
                <AllItems key={item._id} item={item} />
              ))
            )}
          </div>
          {AllItem.cartItems.length === 0 ? (
            ""
          ) : (
            <div className="w-full flex flex-col items-center gap-5">
              <div className="flex flex-row items-center w-full text-2xl justify-between">
                <span>Subtotal</span>
                <span>${AllItem.cartTotalAmount}</span>
              </div>
              <button
                onClick={handleClearCart}
                className="bg-transparent border-[#808080] btn-transition text-lg text-[#808080] border px-10 py-3 rounded hover:bg-black hover:text-white w-full"
              >
                Clear Cart
              </button>
              {/* <button
                className="w-full bg-blue-500 py-3 rounded text-lg hover:bg-blue-600 btn-transition text-white"
              >
                Check out
              </button> */}
              <PayPalPayment />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
