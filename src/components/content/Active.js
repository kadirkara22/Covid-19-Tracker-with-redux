import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./content.css"
const Active = () => {


    return (
        <div className="Active_card">
            <div className="Active">
                <p className="title"><b>Active</b></p>
                <h5 className="count">
                    <span>
                        {

                        }
                    </span>
                </h5>
                <p className="lastUpdated">Last Updated at :</p>
                <p className="date">Sun Dec 05 2021</p>
                <p className="hour">19:22:33</p>
                <p className="info">Number of infect cases of COVID-19</p>
                <p className="ulke"></p>
            </div>
        </div>
    )
}

export default Active
