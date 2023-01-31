import { toast } from "react-toastify"
import {
  editUserInfo,
  getUser,
  loginUser,
  postNewUser,
  updatePassword,
} from "../../helpers/axiosHelper"
import {
  getUserSuccess,
  loginSuccess,
  registerSuccess,
  requestFailed,
  requestPending,
  requestSuccess,
} from "./UserSlice"

export const loginAction = (form) => async (dispatch) => {
  try {
    // set loader
    dispatch(requestPending())

    // call axios
    const { status, message, user } = await loginUser(form)

    status === "success"
      ? dispatch(loginSuccess(user)) && toast[status](message)
      : dispatch(requestFailed({ status, message })) && toast[status](message)
  } catch (error) {
    dispatch(requestFailed(error))
  }
}

export const registerAction = (form) => async (dispatch) => {
  try {
    dispatch(requestPending())
    const { status, message } = await postNewUser(form)

    status === "success"
      ? dispatch(registerSuccess({ status, message })) && toast[status](message)
      : dispatch(requestFailed({ status, message })) && toast[status](message)
  } catch (error) {
    dispatch(requestFailed(error))
  }
}

export const updatePasswordAction = (form) => async (dispatch) => {
  try {
    dispatch(requestPending())
    const { status, message } = await updatePassword(form)

    status === "success"
      ? dispatch(requestSuccess({ status, message })) && toast[status](message)
      : dispatch(requestFailed({ status, message })) && toast[status](message)
  } catch (error) {
    dispatch(requestFailed(error))
  }
}

export const getUserAction = () => async (dispatch) => {
  try {
    const user = await getUser()
    user?._id
      ? dispatch(getUserSuccess(user))
      : dispatch(requestFailed({ status: "error", message: "User not found!" }))
  } catch (error) {
    dispatch(requestFailed(error))
  }
}

export const editProfileAction = (form) => async (dispatch) => {
  try {
    dispatch(requestPending())

    const user = await editUserInfo(form)

    user
      ? dispatch(requestSuccess(user)) && dispatch(getUserAction())
      : dispatch(requestFailed())
  } catch (error) {
    dispatch(requestFailed(error))
  }
}
