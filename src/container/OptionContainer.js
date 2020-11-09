import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useSelectAll from '../hooks/useSelectAll'

import ChartContainer from './ChartContainer'

import OptionItem from '../components/OptionItem'

import { getKind } from '../store/option'

const OptionContainer = ({ match }) => {
    const tableName = String(match.path).split('/')

    const [subMenu, setSubMenu] = useSelectAll(tableName[1])

    const [category, setCategory] = useState("품목")
    const categoryArray = []

    const [kind, setKind] = useState("품종")
    const kindArray = useSelector((state) => state.option.kind)

    const dispatch = useDispatch();

    const selectCategory = useCallback((option) => {
        setCategory(option)
        setKind("품종")

        const currentIndex = subMenu.findIndex(item => item.name === option)
        dispatch(getKind(subMenu[currentIndex].option.split(',')))
    }, [setCategory, subMenu, dispatch])

    useEffect(() => {
        setSubMenu()
    }, [setSubMenu])

    const [drawChart, setDrawChart] = useState(false)
    const [chartName, setChartName] = useState('')
    useEffect(() => {
        if(category !== "품목" && kind !== "품종") {
            setDrawChart(true)
            setChartName(kind + category)
        }
        else setDrawChart(false)
    }, [category, kind])

    return (
        <div className="option-wrap">
            <div className="option-title"></div>
            <div className="option-content">
                <div className="list-wrap">

                    {subMenu.forEach(item => categoryArray.push(item.name))}

                    <OptionItem dataSet={categoryArray} option={category} setOption={selectCategory} />
                    <OptionItem dataSet={kindArray} option={kind} setOption={setKind} />
                </div>
            </div>

            <div className="chart-wrap">
                {drawChart && <ChartContainer chartName={chartName} />}
            </div>
        </div>
    )
}

export default OptionContainer