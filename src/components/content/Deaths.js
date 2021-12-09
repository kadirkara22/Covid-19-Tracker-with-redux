import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./content.css"
const Deaths = ({ death, dateTarih, saat, countryName }) => {
    const [death2, setDeath] = useState();
    useEffect(() => {
        fetch(`https://covid19.mathdro.id/api/countries/${countryName}`)
            .then((res) => res.json())
            .then((data) => setDeath(data.deaths))
    }, [countryName])
    return (
        <div className="Deaths_card">
            <div className="Deaths">
                <p className="title"><b>Deaths</b></p>
                <h5 className="count">
                    <span>{death2 ? death2.value : death}</span>
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

export default Deaths
