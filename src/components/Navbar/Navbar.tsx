import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile'
                         activeClassName={s.activeLink}>Profile</NavLink> {/*добавил activeClassName={s.activeLink} после нажатии будет подсвечиваться*/}
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
            </div>

            <div className={`${s.item} ${s.active}`}>  {/* так можно применить отдельные стили*/}
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
