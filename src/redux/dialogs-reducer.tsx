import {ActionsTypes, DialogsPageType} from "./state";


export type ActionsDialogsTypes =
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export const updateNewMessageBodyAC = (body: string) => ({type: 'UPDATE-NEW-MESSAGE-BODY', body} as const)
export const sendMessageAC = () => ({type: 'SEND-MESSAGE'} as const)

export const dialogsReducer = (state: DialogsPageType, action:ActionsTypes):DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body
            return state
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 8, message: body})
            return state
        default:
            return state;

    }
}