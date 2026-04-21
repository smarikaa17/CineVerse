import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./movieSlice"
import gptReducer from "./gptSlice"

export const Store= configureStore({
    reducer:{
      user:userReducer,
      movie: moviesReducer,
      gpt:gptReducer
    }
}) 