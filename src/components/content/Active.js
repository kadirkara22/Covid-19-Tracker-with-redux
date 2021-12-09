import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./content.css"
const Active = ({ active, dateTarih, saat }) => {


    return (
        <div className="Active_card">
            <div className="Active">
                <p className="title"><b>Active</b></p>
                <h5 className="count">
                    <span>
                        {
                            active
                        }
                    </span>
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

export default Active
