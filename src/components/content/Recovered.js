import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./content.css"
const Recovered = ({ recovered, dateTarih, saat, countryName }) => {
    const [recovered2, setRecovered] = useState();

    useEffect(() => {
        fetch(`https://covid19.mathdro.id/api/countries/${countryName}`)
            .then((res) => res.json())
            .then((data) => setRecovered(data.recovered))
    }, [countryName])
    return (
        <div className="Recovered_card">
            <div className="Recovered">
                <p className="title"><b>Recovered</b></p>
                <h5 className="count">
                    <span>{recovered2 ? recovered2.value : recovered}</span>
                </h5>
                <p className="lastUpdated">Last Updated at :</p>
                <p className="date">{dateTarih}</p>
                <p className="hour">{saat}</p>
                <p className="info">Number of infect cases of COVID-19</p>
                <p className="ulke">{countryName}</p>
            </div>
        </div>
    )
}

export default Recovered
