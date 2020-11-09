import React from 'react'
import { Line } from 'react-chartjs-2'

import DateJson from '../json/date.json'
import BananaIncome from '../json/banana_income_high.json'

const ChartContainer = ({ chartName }) => {
    console.log(chartName)

    const classLabels = DateJson.date.slice(DateJson.date.length - 30);
    const classPrice = BananaIncome.price.slice(BananaIncome.price.length - 30);

     //-------------------------------------------------------------------------
    const TIME_AVG = 15

    let priceAvg = 0
    for(let i = 0; i < 30; i++){ priceAvg += (classPrice[i] / 1000) }
    const PRICE_AVG = priceAvg / 30

    let a, b, tmp = 0, tmp2 = 0
    for (let i = 0; i < 30; i++) {
        tmp += (i + 1 - TIME_AVG) * (classPrice[i] - PRICE_AVG)
        tmp2 += Math.pow(classPrice[i] - PRICE_AVG, 2)
    }
    a = tmp / tmp2
    b = TIME_AVG - a * PRICE_AVG

    let func = []
    for (let i = 0; i < 30; i++) {
        func.push(a * (i + 1) + b)
    }
    //-------------------------------------------------------------------------

    let func2 = []
    func2.push(classPrice[0])

    tmp = classPrice[0]
    for(let i = 1; i < 30; i++){
        tmp += classPrice[i]
        func2.push(tmp / (i + 1))
    }

    const dataset = {
        labels: classLabels,
        datasets: [
            {
                label: `${chartName} 가격`,
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
                data: classPrice
            },
            {
                label: "최소자승법",
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'green',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'green',
                pointBackgroundColor: 'green',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'green',
                pointHoverBorderColor: 'green',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: func
            },
            {
                label: "이동평균선",
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'red',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'red',
                pointBackgroundColor: 'red',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'red',
                pointHoverBorderColor: 'red',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: func2
            }
        ]
    }
    //-------------------------------------------------------------------------

    return <Line data={dataset} />
}

export default ChartContainer