import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./content.css"

const Infected = ({ confirmed, dateTarih, saat }) => {





    return (
        <div className="infected_card">
            <div className="infected">
                <p className="title"><b>Infected</b></p>
                <h5 className="count">
                    <span>{confirmed}</span>
                </h5>
                <p className="lastUpdated">Last Updated at :</p>
                <p className="date">{dateTarih}</p>
                <p className="hour">{saat}</p>
                <p className="info">Number of infect cases of COVID-19</p>
                <p className="ulke"></p>
            </div>
        </div>
    )
}

export default Infected
