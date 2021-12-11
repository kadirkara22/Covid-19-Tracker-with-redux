import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux';

const CountryGraphhic = () => {
    const [infected, setInfected] = useState();
    const [recovered, setRecovered] = useState();
    const [death, setDeath] = useState();
    const [active, setActive] = useState();

    const countryName = useSelector(state => state.covid.country)

    const countryChart = (countryName) => {
        axios.get(`https://covid19.mathdro.id/api/countries/${countryName}`)
            .then(res => {
                console.log(res.data.confirmed);
            })
    }
    console.log(countryName)
    useEffect(() => {
        countryChart(countryName)
    }, [countryName])
    return (
        <div className="chart">
            <div>
                <Bar
                    height={3000}
                    width={1150}
                    options={{
                        responsive: true,
                        title: { text: "Current state in Cauntry", display: true },
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }
                            ]
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default CountryGraphhic
