import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'
import {message} from "antd";

type DialogsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogsType) => {
    return (
        <div
            className={`${s.dialog} ${s.active}`}>                              {/*можно присвоить через переменную let path = `${/dialogs/} ${props.id}` */}
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>         {/*<NavLink to={path}>{props.name}</NavLink>*/}
        </div>
    )
}

