import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {InitialStateType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm";

type DialogsProps = {
    dialogsPage: InitialStateType
    updateNewMessageBody: (event: string) => void
    sendMessage: (newMessageBody: string) => void
    isAuth: boolean
}

export const Dialogs = (props: DialogsProps) => {

    const dialogsElements = props.dialogsPage.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    const messagesElements = props.dialogsPage.messages.map(el => <Message key={el.id} message={el.message}/>)

    if (props.isAuth === false) return <Redirect to={"/login"}/>

    const addNewMessage = (values: any) => props.sendMessage(values.newMessageBody)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}
