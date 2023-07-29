import { configureStore } from "@reduxjs/toolkit";
import LoginSlide from "./LoginSlide";

const store = configureStore({
  reducer: {
    login: LoginSlide.reducer,
  },
});

export default store;
