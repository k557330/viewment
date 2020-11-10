import React from 'react'
import { useSelector } from 'react-redux'

import MenuItem from '../components/MenuItem'

const MenuContainer = () => {
    const menu = useSelector((state) => state.menu.menu)

    return (
        <div className="menu-wrap">
            <div className="menu-title">Menu</div>
            <div className="menu-content">
                {menu.map(item => 
                    <MenuItem item={item} key={item.id} />
                )}
            </div>
        </div>
    )
}

export default React.memo(MenuContainer)