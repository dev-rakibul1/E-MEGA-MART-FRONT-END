import { configureStore } from "@reduxjs/toolkit";
import { apiBase } from "./BaseQuery";
import cartReducer from "./features/cart";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [apiBase.reducerPath]: apiBase.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiBase.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
