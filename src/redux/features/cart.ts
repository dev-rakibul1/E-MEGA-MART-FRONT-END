import { IProduct } from "@/types/Common";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  products: IProduct[];
  totalAmount: number;
}

const initialState: CartState = {
  products: [],
  totalAmount: 0,
};

// Create the cart slice
const cart = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    // add to cart
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (pro) => pro._id === action.payload._id
      );

      if (existing) {
        existing.quantity = existing.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.totalAmount += action.payload.price;
    },
    // add to cart
    removeOneFromCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (pro) => pro._id === action.payload._id
      );

      if (existing && existing.quantity! > 1) {
        existing.quantity = existing.quantity! - 1;
      } else {
        state.products = state.products.filter(
          (pro) => pro._id !== action.payload._id
        );
      }

      state.totalAmount -= action.payload.price;
    },

    // delete from cart
    deleteFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (pro) => pro._id !== action.payload._id
      );

      state.totalAmount -= action.payload.price * action.payload.quantity!;
    },
  },
});

// Export the actions and reducer
export const { addToCart, deleteFromCart, removeOneFromCart } = cart.actions;
export default cart.reducer;
