import React from "react";
import {Dialogs} from "../Dialogs";
import {ActionsTypes, DialogsPageType} from "../../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogs-reducer";
import {ReduxStoreType} from "../../../redux/redux-store";
import {StoreContext} from "../../../StoreContext";

type DialogsProps = {
    //store: ReduxStoreType
}

export const DialogsContainer = (props: DialogsProps) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageAC())
                    }

                    const onNewMessageChange = (body: string) => {
                        store.dispatch(updateNewMessageBodyAC(body))
                    }

                    return <Dialogs updateNewMessageBody={onNewMessageChange}
                                    sendMessage={onSendMessageClick}
                                    store={store}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}