import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add to cart Start
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
        toast.success("increased product quantity");
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("added a new product to cart");
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // add to cart End

    // Remove From Cart Start
    removeFromCart: (state, action) => {
      const nextCartItem = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload.item._id
      );
      state.cartItems = nextCartItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // Remove From Cart End

    // Decrease Item Start
    decreaseItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload.item._id
      );

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else if (state.cartItems[itemIndex].quantity === 1) {
        const nextCartItem = state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload.item._id
        );
        state.cartItems = nextCartItem;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // Decrease Item End

    increaseItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload.item._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getTotals: (state) => {
      let { quantity, total } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity, discount } = cartItem;

          const itemTotal =
            (price - parseInt((price * discount) / 100)).toFixed(2) * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseItem,
  increaseItem,
  clearCart,
  getTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
