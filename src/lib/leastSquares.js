export const leastSquares = (chartData) => {
    const TIME_AVG = chartData.length / 2

    let priceAvg = 0
    for(let i = 0; i < chartData.length; i++) priceAvg += (chartData[i].y / 1000)
    const PRICE_AVG = priceAvg / chartData.length

    let a, b, tmp = 0, tmp2 = 0
    for (let i = 0; i < chartData.length; i++) {
        tmp += (i + 1 - TIME_AVG) * (chartData[i].y - PRICE_AVG)
        tmp2 += Math.pow(chartData[i].y - PRICE_AVG, 2)
    }
    a = tmp / tmp2
    b = TIME_AVG - a * PRICE_AVG

    let func = []
    for (let i = 0; i < chartData.length; i++) {
        func.push((a * (i + 1) * + b) / 3)
    }

    return func.slice(func.length - 30)
}