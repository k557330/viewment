import React from 'react'
import { Line } from 'react-chartjs-2'

import { dateFormat } from '../lib/dateFormat'

let newlyDate = []
let newlyPrice = []

const DrawChart = ({ chartData }) => {
    newlyDate = []
    newlyPrice = []

    if (chartData.length !== 0) {
        for (let i = chartData.length - 30; i < chartData.length; i++) {
            newlyDate.push(dateFormat(chartData[i].date))
            newlyPrice.push(chartData[i].price)
        }
    }

    const dataSet = {
        labels: newlyDate,
        datasets: [
            {
                label: "가격",
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: '#17A4F9',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#17A4F9',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#17A4F9',
                pointHoverBorderColor: '#17A4F9',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: newlyPrice
            }
        ]
    }

    return <Line data={dataSet} />
    // <Line data={dataSet} />
}

export default DrawChart