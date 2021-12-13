import { createSlice } from "@reduxjs/toolkit";


export const countrySlice = createSlice({
    name: "country",
    initialState: {
        items: [],
        global: [],
        country: [],
        country2: null,
        confirmed: null,
        recovered: null,
        death: null,
        lastUpdate: null,


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
            state.country2 = action.payload

        },
        showInfected: (state, action) => {
            /* const data2 = action.payload
            state.confirmed2 = data2 */
        }
    }
})
export const { showGlobal, getCountryName, showCountry } = countrySlice.actions
export default countrySlice.reducer