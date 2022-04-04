import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsProps = {
    //dialogs: Array<DialogsType>
    //messages: Array<MessagesType>
    stateData : DialogsPageType
}

export const Dialogs = (props: DialogsProps) => {
    /* const dialogsElements1 =
        [<DialogItem name={props.dialogs[0].name} id={props.dialogs[0].id}/>,
            <DialogItem name={props.dialogs[1].name} id={props.messages[1].id}/>] //переписал на метод map*/

    const dialogsElements = props.stateData.dialogs.map(el => <DialogItem  id={el.id} name={el.name}/>)

    const messagesElements = props.stateData.messages.map(el => <Message message={el.message}/>)

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