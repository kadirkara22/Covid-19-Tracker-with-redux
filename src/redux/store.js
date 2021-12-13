import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./countrySlice";


export const store = configureStore({
    reducer: {
        covid: countrySlice,
    }
})