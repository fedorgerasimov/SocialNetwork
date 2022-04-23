import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogsPageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/state";

type DialogsProps = {
    //dialogs: Array<DialogsType>
    //messages: Array<MessagesType>
    stateData : DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: DialogsProps) => {


    const dialogsElements = props.stateData.dialogs.map(el => <DialogItem key={el.id}  id={el.id} name={el.name}/>)
    const messagesElements = props.stateData.messages.map(el => <Message message={el.message}/>)
    const newMessageBody = props.stateData.newMessageBody

    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyAC(event.currentTarget.value))
    }

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
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'/></div>
                    <div> <button onClick={onSendMessageClick}>Send</button></div>
                </div>
                {/*<Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>*/}
                {/*<div className={s.message}>What's up?</div>
                <div className={s.message}>What is your hobby?</div>
                <div className={s.message}>Hello</div>*/}
            </div>
        </div>
    )
}