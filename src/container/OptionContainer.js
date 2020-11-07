import React from 'react'

const OptionContainer = ({ match, location }) => {
    console.log(match, location)

    return (
        <div className="option-wrap">
            <div className="option-title"></div>
            <div className="option-content">
                <div className="list-wrap">
                </div>
            </div>

            <div className="chart-wrap">

            </div>
        </div>
    )
}

export default OptionContainer