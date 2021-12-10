import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showCountry } from '../../redux/countrySlice';
import "./content.css"

const Infected = ({ confirmed, dateTarih, saat, countryName }) => {
    const [infected, setInfected] = useState();



    useEffect(() => {
        fetch(`https://covid19.mathdro.id/api/countries/${countryName}`)
            .then((res) => res.json())
            .then((data) => setInfected(data.confirmed))

    }, [countryName])



    return (
        <div className="infected_card">
            <div className="infected">
                <p className="title"><b>Infected</b></p>
                <h5 className="count">
                    <span className="number">{infected ? infected.value : confirmed}</span>
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

export default Infected
