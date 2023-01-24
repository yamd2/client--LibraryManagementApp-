import { toast } from "react-toastify";
import { loginUser, postNewUser } from "../../helpers/axiosHelper";
import {
  loginSuccess,
  registrationSuccess,
  requestFailed,
  requestPending,
} from "./UserSlice";

export const loginAction = (form) => async (dispatch) => {
  try {
    // set loader
    dispatch(requestPending());

    // call axios
    const { status, message, user } = await loginUser(form);

    status === "success"
      ? dispatch(loginSuccess(user)) && toast[status](message)
      : dispatch(requestFailed({ status, message })) && toast[status](message);
  } catch (error) {
    dispatch(requestFailed(error));
  }
};

export const registerAction = (form) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const { status, message } = await postNewUser(form);

    status === "success"
      ? dispatch(registrationSuccess({ status, message })) &&
        toast[status](message)
      : dispatch(requestFailed({ status, message })) && toast[status](message);
  } catch (error) {
    dispatch(requestFailed(error));
  }
};
