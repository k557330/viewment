export const chartNameFormat = (chartName) => {
    const bracket = chartName.indexOf("(")
    
    if(bracket === -1) return chartName
    
    let spliting = chartName.split("(")
    let spliting2 = spliting[1].split(")")

    return spliting[0] + spliting2[0] + spliting2[1]
}