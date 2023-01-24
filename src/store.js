import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user/UserSlice";
import bookReducer from "./redux/book/BookSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
  },
});

export default store;
