import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/store";
import {DialogsType, InitialStateType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";


type DialogsProps = {
    dialogsPage: InitialStateType
    updateNewMessageBody: (event: string) => void
    sendMessage: () => void
}

export const Dialogs = (props: DialogsProps) => {

    const dialogsElements = props.dialogsPage.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    const messagesElements = props.dialogsPage.messages.map(el => <Message key={el.id} message={el.message}/>)
    const newMessageBody = props.dialogsPage.newMessageBody

    const onSendMessageClick = () => props.sendMessage()

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(event.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}