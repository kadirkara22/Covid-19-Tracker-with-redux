import { createSlice } from "@reduxjs/toolkit";
import { ContextProvider } from "react-is";

export const countrySlice = createSlice({
    name: "country",
    initialState: {
        items: [],
        global: [],
        country: []
    },
    reducers: {
        showCountry: (state, action) => {
            const data = action.payload
            state.country = data
        }
    }
})
export const { showCountry } = countrySlice.actions
export default countrySlice.reducer