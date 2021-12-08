import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./content.css"
const Deaths = ({ countryData, country }) => {
    const [death, setDeath] = useState([]);

    useEffect(() => {
        axios(`https://covid19.mathdro.id/api`)
            .then((res) => res.data)
            .then((data) => setDeath(data.deaths.value))

    }, [])

    return (
        <div className="Deaths_card">
            <div className="Deaths">
                <p className="title"><b>Deaths</b></p>
                <h5 className="count">
                    <span>{countryData ? countryData[0].deaths : death}</span>
                </h5>
                <p className="lastUpdated">Last Updated at :</p>
                <p className="date">Sun Dec 05 2021</p>
                <p className="hour">19:22:33</p>
                <p className="info">Number of infect cases of COVID-19</p>
                <p className="ulke">{country}</p>
            </div>
        </div>
    )
}

export default Deaths
