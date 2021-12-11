import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./content.css"
const Active = ({ active, dateTarih, saat }) => {
    const countryName = useSelector(state => state.covid.country2)
    const [infected, setInfected] = useState();
    const [death, setDeath] = useState();

    axios.get(`https://covid19.mathdro.id/api/countries/${countryName}`)
        .then(res => {
            console.log(res.data.confirmed);
            setInfected(res.data.confirmed.value);
            setDeath(res.data.deaths.value)
        })

    const activeCountry = infected - death;

    return (
        <div className="Active_card">
            <div className="Active">
                <p className="title"><b>Active</b></p>
                <h5 className="count">
                    <span>
                        {
                            countryName !== null && countryName !== "Global" ? activeCountry : active
                        }
                    </span>
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

export default Active
