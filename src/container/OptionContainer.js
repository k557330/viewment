import React, { useCallback, useEffect, useState } from 'react'

import useSelectAll from '../hooks/useSelectAll'

import OptionItem from '../components/OptionItem'

const OptionContainer = ({ match }) => {
    const tableName = String(match.path).split('/')

    const [subMenu, setSubMenu] = useSelectAll(tableName[1])

    const [category, setCategory] = useState("품목")
    const [kind, setKind] = useState("품종")
    const [rank, setRank] = useState("등급")

    const categoryArray = []
    const kindArray = []

    const selectCategory = useCallback((option) => {
        setCategory(option)
        const currentIndex = subMenu.findIndex(item => item.name === option)
        const splitToKind = subMenu[currentIndex].option.split(',')
        
        console.log(splitToKind, splitToKind[0].substr(1))
    }, [setCategory, subMenu])

    useEffect(() => {
        setSubMenu()
    }, [setSubMenu])


    return (
        <div className="option-wrap">
            <div className="option-title"></div>
            <div className="option-content">
                <div className="list-wrap">
                    {subMenu.forEach(item => categoryArray.push(item.name))}
                    <OptionItem dataSet={categoryArray} option={category} setOption={selectCategory} />
                </div>
            </div>

            <div className="chart-wrap">

            </div>
        </div>
    )
}

export default OptionContainer