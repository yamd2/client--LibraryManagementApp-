import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  error: {},
  response: {},
  transactions: [],
}

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },
    getTransactionSuccess: (state, action) => {
      state.isLoading = false
      state.transactions = action.payload
      state.error = {}
    },
    requestFailed: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})
const { reducer, actions } = transactionSlice
export const { requestPending, requestFailed, getTransactionSuccess } = actions
export default reducer
