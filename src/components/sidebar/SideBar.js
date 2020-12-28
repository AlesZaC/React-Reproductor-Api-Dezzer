import React from 'react'
import { SideBarItem } from './SideBarItem'

export const SideBar = () => {
    return (
        <aside className="reproductor_sidebar">

            <div className="sidebar-navbar-img">
                <img src="https://res.cloudinary.com/dk82ead5h/image/upload/v1607793511/foxbel-music_vweu6n.png" alt="img" />
            </div>

            <SideBarItem />


        </aside>
    )
}
