import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./redux-slice/movieSlice";
import wishlistSlice from "./redux-slice/wishlistSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    wishlist : wishlistSlice
  },
});

export default store;
