import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";
import { ContextProvider } from "react-is";

export const countrySlice = createSlice({
    name: "country",
    initialState: {
        items: [],
        global: [],
        country: [],
        confirmed: null,
        recovered: null,
        death: null,
        lastUpdate: null,
        confirmed2: null,
        recovered2: null,
        death2: null,

    },
    reducers: {
        showGlobal: (state, action) => {
            const data = action.payload
            state.confirmed = data.map(item => (item.confirmed.value))
            state.recovered = data.map(item => (item.recovered.value))
            state.death = data.map(item => (item.deaths.value))
            state.lastUpdate = data.map(item => (item.lastUpdate))
        },
        getCountryName: (state, action) => {
            state.country = action.payload !== "Global" && action.payload
        },
        showCountry: (state, action) => {
            const data2 = action.payload

            state.confirmed2 = data2.map(item => (item.confirmed))
            state.recovered2 = data2.map(item => (item.recovered))
            state.death2 = data2.map(item => (item.deaths))



        }
    }
})
export const { showGlobal, getCountryName, showCountry } = countrySlice.actions
export default countrySlice.reducer