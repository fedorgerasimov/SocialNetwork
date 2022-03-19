import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

type DialogsType  ={

}

export const Dialogs = (props: DialogsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to='/dialogs/1'>Jameson</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Bob</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Jane</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Arnold</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>What's up?</div>
                <div className={s.message}>What is your hobby?</div>
                <div className={s.message}>Hello</div>
            </div>
        </div>
    )
}