import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./content.css"
const Active = ({ active, dateTarih, saat, countryName }) => {
    const [active2, setActive2] = useState()
    const [active3, setActive3] = useState()

    useEffect(() => {
        fetch(`https://covid19.mathdro.id/api/countries/${countryName}`)
            .then((res) => res.json())
            .then((data) => setActive2(data))
    }, [countryName])



    return (
        <div className="Active_card">
            <div className="Active">
                <p className="title"><b>Active</b></p>
                <h5 className="count">
                    <span>
                        {
                            active2 ? active2.value : active
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
