import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'
import {message} from "antd";

type DialogsType = {
    name: string
    id: number
}
type MessageType = {
    message: string
}

export const DialogItem = (props: DialogsType) => {
    return (
        <div
            className={`${s.dialog} ${s.active}`}>                              {/*можно присвоить через переменную let path = `${/dialogs/} ${props.id}` */}
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>         {/*<NavLink to={path}>{props.name}</NavLink>*/}
        </div>
    )
}

export const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
}

export const Dialogs = (props: any) => {

    const dialogsData = [
        {id: 1, name: 'Jameson'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Jane'},
        {id: 4, name: 'Arnold'},]

    const messagesData = [
        {id: 1, message: 'What\'s up?'},
        {id: 2, message: 'What is your hobby?'},
        {id: 3, message: 'Hello'}]

    const dialogsElements1 =
        [<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>] //переписал на метод map

    const dialogsElements = dialogsData
        .map((dialog) => {
            return <DialogItem name={dialog.name} id={dialog.id}/>
        })

    const messagesElements = messagesData.map(message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                {/*  <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
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
                {messagesElements}
                {/*<Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>*/}
                {/*<div className={s.message}>What's up?</div>
                <div className={s.message}>What is your hobby?</div>
                <div className={s.message}>Hello</div>*/}
            </div>
        </div>
    )
}