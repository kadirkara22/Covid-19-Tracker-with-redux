import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux';


const CountryGraphhic = () => {
    const [chartData, setChartData] = useState({});
    const [infected, setInfected] = useState();
    const [recovered, setRecovered] = useState();
    const [death, setDeath] = useState();

    const active = infected - death;
    const countryName = useSelector(state => state.covid.country)

    const countryChart = (countryName) => {

        axios.get(`https://covid19.mathdro.id/api/countries/${countryName}`)
            .then(res => {
                console.log(res.data.confirmed);
                setInfected(res.data.confirmed.value);
                setRecovered(res.data.recovered.value);
                setDeath(res.data.deaths.value)
            })
    }

    useEffect(() => {
        countryChart(countryName)
    }, [countryName])
    return (
        <div className="chart">
            <div>
                <Bar
                    data={{
                        labels: ["Infected", "Recovered", "Deaths", "Active"],
                        datasets: [{
                            label: countryName,
                            fill: true,
                            data: [infected, recovered, death, active],
                            backgroundColor: [
                                'rgb(0, 77, 153,0.5)',
                                'rgb(110, 250, 1120.5)',
                                'rgb(255, 51, 51,0.5)',
                                'rgb(246, 242, 125,0.5)'

                            ]


                        }

                        ]

                    }}
                    height={3000}
                    width={1150}
                    options={{
                        responsive: true,
                        legend: { display: false },
                        title: { text: `Current state in ${countryName}`, display: true },
                        label: { display: false },
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
