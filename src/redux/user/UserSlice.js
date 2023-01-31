import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  isLoggedIn: sessionStorage.getItem("user") ? true : false,
  userInfo: sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : {},
  response: {},
  error: {},
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },
    loginSuccess: (state, action) => {
      state.isLoading = false
      state.userInfo = action.payload
      state.error = {}
      state.isLoggedIn = true
      sessionStorage.setItem("user", JSON.stringify(action.payload))
    },
    logoutSuccess: (state) => {
      state.userInfo = {}
      state.error = {}
      state.isLoading = false
      state.isLoggedIn = false
      sessionStorage.removeItem("user")
    },
    registerSuccess: (state, action) => {
      state.isLoading = false
      state.response = action.payload
    },
    requestFailed: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    requestSuccess: (state, action) => {
      state.isLoading = false
      state.response = action.payload
    },
    getUserSuccess: (state, action) => {
      state.isLoading = false
      state.userInfo = action.payload
      sessionStorage.setItem("user", JSON.stringify(action.payload))
    },
  },
})

const { reducer, actions } = userSlice

export const {
  requestPending,
  requestFailed,
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  requestSuccess,
  getUserSuccess,
} = actions

export default reducer
