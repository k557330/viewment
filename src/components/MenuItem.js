import React from 'react'
import { Link } from 'react-router-dom'

import Paths from '../paths'

const MenuItem = ({ item }) => {
    const { to, image, name } = item

    return (
        <Link to={Paths.index + to} className="menu-box">
            <div className="menu-img"><img src={`${process.env.PUBLIC_URL}/images/${image}`} alt="" className="h-centering" /></div>
            <div className="menu-comment-wrap">
                <div className="menu-border"></div>
                <div className="menu-comment h-centering">{name}</div>
            </div>
        </Link>
    )
}

export default MenuItem