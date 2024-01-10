import { configureStore } from "@reduxjs/toolkit";
import { SliceReducer } from "../feature/Slices";
export const store = configureStore({
    reducer:SliceReducer
})

