import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MenuContainer from '../container/MenuContainer'
import PredictionContainer from '../container/PredictionContainer'
import OptionContainer from '../container/OptionContainer'

import Paths from '../paths'

const MainPage = () => {
    return (
        <>
            <div className="main-image"><img src={`${process.env.PUBLIC_URL}/images/main_image.png`} alt="" /></div>
            <div className="main-logo w-centering"><img src={`${process.env.PUBLIC_URL}/images/logo_white.png`} alt="" /></div>
            <div className="main-since w-centering">since 2020.09.09</div>

            <div className="description-wrap w-centering">
                <div className="description">
                    <Route path={Paths.index} component={MenuContainer} />
                    <Switch>
                        <Route path={Paths.index} component={PredictionContainer} exact />
                        <Route path={Paths.option} component={OptionContainer} />
                    </Switch>
                </div>
            </div>
        </>
    )
}

export default MainPage