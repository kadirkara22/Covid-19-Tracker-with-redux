import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./content.css"
const Recovered = ({ countryData, country }) => {
    const [recovered, setRecovered] = useState([]);

    useEffect(() => {
        axios(`https://covid19.mathdro.id/api`)
            .then((res) => res.data)
            .then((data) => setRecovered(data.recovered.value))

    }, [])
    return (
        <div className="Recovered_card">
            <div className="Recovered">
                <p className="title"><b>Recovered</b></p>
                <h5 className="count">
                    <span>{
                        countryData ? countryData[0].recovered === null ? 0 : null : recovered}</span>
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

export default Recovered
