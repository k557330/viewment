import React from 'react'
import { Line } from 'react-chartjs-2'

import { dateFormat } from '../lib/dateFormat'
import { leastSquares } from '../lib/leastSquares'
import { movingAverage } from '../lib/movingAverage'

let newlyDate = []
let newlyPrice = []

let leastSquaresPrice = []
let movingAveragePrice = []

const DrawChart = ({ chartData }) => {
    newlyDate = []
    newlyPrice = []
    
    leastSquaresPrice = []
    movingAveragePrice = []

    if (chartData.length !== 0) {
        for (let i = chartData.length - 30; i < chartData.length; i++) {
            newlyDate.push(dateFormat(chartData[i].date))
            newlyPrice.push(chartData[i].price)
        }

        leastSquaresPrice = leastSquares(chartData)
        movingAveragePrice = movingAverage(chartData)

        console.log(leastSquaresPrice, movingAveragePrice)
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
            },
            {
                label: "추세",
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'salmon',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'salmon',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'salmon',
                pointHoverBorderColor: 'salmon',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: leastSquaresPrice
            },
            {
                label: "이동평균선",
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: '#8BC34A',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#8BC34A',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#8BC34A',
                pointHoverBorderColor: '#8BC34A',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: movingAveragePrice
            }
        ]
    }

    return <Line data={dataSet} />
}

export default DrawChart