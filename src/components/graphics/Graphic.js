
import React from 'react'
import { useSelector } from 'react-redux'
import CountryGraphhic from './CountryGraphhic'
import GlobalGraphic from './GlobalGraphic'

import "./graphic.css"
const Graphic = () => {
    const countryName = useSelector(state => state.covid.country2)
    console.log(countryName)


    return (
        <div >
            {

                countryName !== null && countryName !== "Global" ? <CountryGraphhic /> : <GlobalGraphic />
            }


        </div>
    )
}

export default Graphic
