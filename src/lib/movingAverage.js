export const movingAverage = (chartData) => {
    let func = []
    func.push(chartData[0].y)

    let tmp = chartData[0].y
    for(let i = 1; i < chartData.length; i++){
        tmp += chartData[i].y
        func.push(tmp / (i + 1))
    }

    return func.slice(func.length - 30)
}