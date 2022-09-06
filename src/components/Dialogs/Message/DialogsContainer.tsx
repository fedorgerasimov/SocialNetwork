import React from "react";
import {Dialogs} from "../Dialogs";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: any) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps,
    mapDispatchToProps)
(AuthRedirectComponent)
