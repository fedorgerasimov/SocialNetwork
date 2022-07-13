import React from "react";
import {Dialogs} from "../Dialogs";
import {ActionsTypes, DialogsPageType} from "../../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogs-reducer";
import {ReduxStoreType} from "../../../redux/redux-store";

type DialogsProps = {
    store: ReduxStoreType
}

export const DialogsContainer = (props: DialogsProps) => {

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    store={props.store}
    />

}