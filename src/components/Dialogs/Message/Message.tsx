import React from "react";
import s from './../Dialogs.module.css'

type MessageProps = {
    message: string
}

export const Message = (props: MessageProps) => {

    const newMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        alert (newMessage.current?.value)
    }
    return <div>
        <div className={s.message}>{props.message}</div>

    </div>
}

