import React from "react"
import s from './SidebarItem.module.css'
import {NavLink} from "react-router-dom";

type SidebarItemProps = {
    id: number
    name: string
    hobby: string
}

export const SidebarItem = (props: SidebarItemProps) => {
    return (
        <div
            className={s.sidebar}>
    <NavLink to={'/sidebar/' + props.id}>{props.name}</NavLink>
</div>
)
}

