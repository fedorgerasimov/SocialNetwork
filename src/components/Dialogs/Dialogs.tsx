import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

type DialogsType  ={
    name: string
    id: number
}
type MessageType = {
    message: string
}

export const DialogItem = (props: DialogsType) => {
    let path ='/dialogs/'+props.id;  // можно присвоить через переменную
    return (
    <div className={`${s.dialog} ${s.active}`}>
        {/*<NavLink to={path}>{props.name}</NavLink>*/}
        <NavLink to={`${/dialogs/} ${props.id}`}>{props.name}</NavLink>
    </div>
    )
}

export const Message = (props:MessageType) => {
    return <div className={s.message}>{props.message}</div>
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={1} name={'Jameson'}/>
                <DialogItem id={2} name={'Bob'}/>
                <DialogItem id={3} name={'Jane'}/>
                <DialogItem id={4} name={'Arnold'}/>
{/*             <div className={`${s.dialog} ${s.active}`}>
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
                </div>*/}
            </div>
            <div className={s.messages}>
                <Message message={'What\'s up?'}/>
                <Message message={'What is your hobby?'}/>
                <Message message={'Hello'}/>
{/*                <div className={s.message}>What's up?</div>
                <div className={s.message}>What is your hobby?</div>
                <div className={s.message}>Hello</div>*/}
            </div>
        </div>
    )
}