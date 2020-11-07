import React, { useEffect } from 'react'

import useSelectAll from '../hooks/useSelectAll'

import MenuItem from '../components/MenuItem'

const MenuContainer = () => {
    const [menu, setMenu] = useSelectAll("menu")

    useEffect(() => setMenu(), [setMenu])

    return (
        <div className="menu-wrap">
            <div className="menu-title">Menu</div>
            <div className="menu-content">
                {console.log(menu)}
                {menu.map(item => 
                    <MenuItem key={item.id} item={item} />    
                )}
            </div>
        </div>
    )
}

export default MenuContainer