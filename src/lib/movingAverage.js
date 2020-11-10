export const movingAverage = (chartData) => {
    let func = []
    func.push(chartData[0].price)

    let tmp = chartData[0].price
    for(let i = 1; i < chartData.length; i++){
        tmp += chartData[i].price
        func.push(tmp / (i + 1))
    }

    return func.slice(func.length - 30)
}