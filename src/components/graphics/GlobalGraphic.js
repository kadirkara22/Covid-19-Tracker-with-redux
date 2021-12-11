import React, { useEffect, useState } from 'react'
import "./graphic.css"
import { Line } from "react-chartjs-2"
import axios from 'axios';


const GlobalGraphic = () => {
    const [chartData, setChartData] = useState({});


    const chart = () => {
        let reportDate = []
        let totalConfirmed = []
        let totalDeath = []
        axios.get("https://covid19.mathdro.id/api/daily")
            .then(res => {
                console.log(res.data[0].deaths.total);
                for (const dataObj of res.data) {
                    reportDate.push(dataObj.reportDate)
                    totalConfirmed.push(dataObj.totalConfirmed)
                    totalDeath.push(dataObj.deaths.total)
                }
                setChartData({
                    labels: reportDate,
                    datasets: [{
                        label: 'Infected',
                        fill: true,
                        data: totalConfirmed,
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.2)'

                        ],
                        borderColor: [
                            'blue'

                        ],
                        borderWidth: 4
                    },
                    {
                        label: 'Deaths',
                        data: totalDeath,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)'

                        ],
                        borderColor: [
                            'red'

                        ],
                        borderWidth: 4
                    }
                    ]

                })
            })



    }
    useEffect(() => {
        chart()
    }, [])

    return (
        <div className="chart">
            <div>
                <Line data={
                    chartData
                }
                    height={3000}
                    width={1150}
                    options={{
                        responsive: true,
                        /*  title: { text: "Current state in Cauntry", display: true }, */
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

export default GlobalGraphic
