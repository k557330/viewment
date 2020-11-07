import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'

import MenuContainer from '../container/MenuContainer'
import PredictionContainer from '../container/PredictionContainer'
import OptionContainer from '../container/OptionContainer'

import { getMenu } from '../store/menu'

import Paths from '../paths'

const MainPage = () => {
    const menu = useSelector((state) => state.menu.menu)
    const dispatch = useDispatch()

    useEffect(() => {dispatch(getMenu())}, [dispatch])

    return (
        <>
            <div className="main-image"><img src={`${process.env.PUBLIC_URL}/images/main_image.png`} alt="" /></div>
            <div className="main-logo w-centering"><img src={`${process.env.PUBLIC_URL}/images/logo_white.png`} alt="" /></div>
            <div className="main-since w-centering">since 2020.09.09</div>

            <div className="description-wrap w-centering">
                <div className="description">
                    <Route path={Paths.index} component={MenuContainer} />
                    <Route path={Paths.index} component={PredictionContainer} exact />

                    {menu.map(item =>
                        <Route path={Paths.index + item.to} component={item.id !== 0 && OptionContainer} key={item.id} />
                    )}
                </div>
            </div>
        </>
    )
}

export default MainPage