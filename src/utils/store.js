import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./redux-slice/movieSlice";

const store = configureStore({
  reducer: {
    movie : movieReducer
  }
});

export default store;
