import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./content.css"

const Infected = ({ countryData, country }) => {
    const [infected, setInfected] = useState([]);

    useEffect(() => {
        axios(`https://covid19.mathdro.id/api`)
            .then((res) => res.data)
            .then((data) => setInfected(data.confirmed.value))

    }, [infected])

    console.log(infected);
    return (
        <div className="infected_card">
            <div className="infected">
                <p className="title"><b>Infected</b></p>
                <h5 className="count">
                    <span>{countryData ? countryData[0].confirmed : infected}</span>
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

export default Infected
