import { createSlice } from "@reduxjs/toolkit";

const LoginSlide = createSlice({
  name: "loginSlide",
  initialState: {
    login: false,
  },
  reducers: {
    loginUpdate: (state, action) => {
      state.login = action.payload;
    },
  },
});
export const { loginUpdate } = LoginSlide.actions;
export default LoginSlide;
