import React from "react";
import {Dialogs} from "../Dialogs";
import {sendMessageAC} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)