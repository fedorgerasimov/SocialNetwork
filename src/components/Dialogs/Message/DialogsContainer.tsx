import React from "react";
import {Dialogs} from "../Dialogs";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";


let mapStateToProps = (state: AppRootStateType) => {
    return{
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return{
        updateNewMessageBody: (body: any) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
             dispatch(sendMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

/*export const DialogsContainer = (props: DialogsProps) => {

    return (
        <StoreContext.Consumer>
            {
                (store: any) => {
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
}*/