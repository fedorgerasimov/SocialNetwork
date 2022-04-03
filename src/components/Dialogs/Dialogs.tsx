import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType, StateType} from "../../redux/state";

/*export type dialogsType = {
    id: number
    name: string
}

export type messageType = {
    id: number
    message: string
}

export type DialogsPropsType = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
}*/

export const Dialogs = (props: DialogsPageType) => {


   /* const dialogsElements1 =
        [<DialogItem name={props.dialogs[0].name} id={props.dialogs[0].id}/>,
            <DialogItem name={props.dialogs[1].name} id={props.messages[1].id}/>] //переписал на метод map*/

    const dialogsElements = props.dialogs.map(el => <DialogItem  id={el.id} name={el.name}/>)

    const messagesElements = props.messages.map(message => <Message message={message.message}/>)

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