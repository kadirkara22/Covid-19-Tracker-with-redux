import { Chart } from 'chart.js'
import React from 'react'
import "./graphic.css"
const Graphic = () => {


    return (
        <div className="chart_container">
            <div>
                <canvas id="chart"></canvas>
            </div>
        </div>
    )
}

export default Graphic
