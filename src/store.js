import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./redux/user/UserSlice"
import bookReducer from "./redux/book/BookSlice"
import transactionReducer from "./redux/transaction/TransactionSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    transaction: transactionReducer,
  },
})

export default store
