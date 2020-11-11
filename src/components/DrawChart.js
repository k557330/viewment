import React from 'react'
import { Line } from 'react-chartjs-2'

import { dateFormat } from '../lib/dateFormat'
// import { leastSquares } from '../lib/leastSquares'
// import { movingAverage } from '../lib/movingAverage'

let newlyDate = []
let newlyPrice = []

// let leastSquaresPrice = []
// let movingAveragePrice = []

let monthDate = []
let monthPrice = []

// let predictDate = []
// let predictPrice = []

const DrawChart = ({ chartData }) => {
    newlyDate = []
    newlyPrice = []

    monthDate = []
    monthPrice = []

    // predictDate = []
    // predictPrice = []
    
    // leastSquaresPrice = []
    // movingAveragePrice = []

    if (chartData.length !== 0) {
        for (let i = chartData.length - 365; i < chartData.length; i++) {
            newlyDate.push(dateFormat(chartData[i].ds))
            newlyPrice.push(chartData[i].y)
        }

        for (let i = chartData.length - 30; i < chartData.length; i++) {
            monthDate.push(dateFormat(chartData[i].ds))
            monthPrice.push(chartData[i].y)
        }

        // for (let i = chartData.length - 5; i < chartData.length; i++) {
        //     predictDate.push(dateFormat(chartData[i].ds))
        //     predictPrice.push(chartData[i].y)
        // }

        // leastSquaresPrice = leastSquares(chartData)
        // movingAveragePrice = movingAverage(chartData)
        // monthDate = chartData.slice(newlyDate.length - 30)
        // monthPrice = chartData.slice(newlyPrice.length - 30)
    }

    const predictView = (date) => {
        const current = new Date()
        const currentMonth = current.getMonth()
        const currentDate = current.getDate()
        
        for(let i = 0; i < date.length; i++){
            const chartDate = date[i].split('-')

            console.log(chartDate, currentMonth + 1)
            console.log(parseInt(chartDate[0]), parseInt(chartDate[1]))

            if(currentMonth + 1 <= parseInt(chartDate[0])){
                if(currentDate >= parseInt(chartDate[1])) return "salmon"
                else return "#17A4F9"
            }
        }
    }

    const yearDataSet = {
        labels: newlyDate,
        datasets: [
            {
                label: "최근 1년 가격",
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: predictView(newlyDate),
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: predictView(newlyDate),
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: predictView(newlyDate),
                pointHoverBorderColor: predictView(newlyDate),
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: newlyPrice
            }
        ]
    }

    const monthDataSet = {
        labels: monthDate,
        datasets: [
            {
                label: "최근 한달 가격",
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
                data: monthPrice
            }
        ]
    }

    return (
        <>
        {console.log(newlyDate)}
            <Line data={yearDataSet} />
            <Line data={monthDataSet} />
        </>
    )
}

export default DrawChart