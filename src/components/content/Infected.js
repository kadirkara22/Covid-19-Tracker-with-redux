import React from 'react'
import "./content.css"

const Infected = () => {
    return (
        <div className="infected_card">
            <div className="infected">
                <p className="title"><b>Infected</b></p>
                <h5 className="count">
                    <span>265,623,762</span>
                </h5>
                <p className="lastUpdated">Last Updated at :</p>
                <p className="date">Sun Dec 05 2021</p>
                <p className="hour">19:22:33</p>
                <p className="info">Number of infect cases of COVID-19</p>
                <p className="ulke">Turkey</p>
            </div>
        </div>
    )
}

export default Infected
