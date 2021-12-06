import { createSlice } from "@reduxjs/toolkit";
import { ContextProvider } from "react-is";

export const countrySlice = createSlice({
    name: "country",
    initialState: {
        items: [],
    },
    reducers: {
        showCountry: (state, action) => {

        }
    }
})
export const { showCountry } = countrySlice.actions
export default countrySlice.reducer