import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./content.css"
const Deaths = ({ death, dateTarih, saat }) => {


    return (
        <div className="Deaths_card">
            <div className="Deaths">
                <p className="title"><b>Deaths</b></p>
                <h5 className="count">
                    <span>{death}</span>
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

export default Deaths
