import { getAllTransactions } from "../../helpers/axiosHelper"
import {
  getTransactionSuccess,
  requestFailed,
  requestPending,
} from "./TransactionSlice"

export const getTransactionsAction = () => async (dispatch) => {
  try {
    dispatch(requestPending())
    const transactions = await getAllTransactions()

    transactions
      ? dispatch(getTransactionSuccess(transactions))
      : dispatch(
          requestFailed({
            status: "error",
            message: "Unable to fetch transaactions",
          })
        )
  } catch (error) {
    dispatch(requestFailed(error))
  }
}
