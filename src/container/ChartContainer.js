import React, { useEffect } from 'react'

import useSelectAll from '../hooks/useSelectAll'

import DrawChart from '../components/DrawChart'

import { chartNameFormat } from '../lib/chartNameFormat'

const ChartContainer = ({ chartName }) => {
    chartName = chartNameFormat(chartName)

    const [chartData, setChartData] = useSelectAll(chartName)

    useEffect(() => {
        setChartData()
    }, [setChartData])

    return (
        <>
            {Array.isArray(chartData)
            ?   <DrawChart chartData={chartData} />
            :   <div>NOT FOUND</div>
            }
        </>
    )
}

export default ChartContainer