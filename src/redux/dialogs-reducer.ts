import {ActionsTypes, DialogsPageType} from "./store";

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

let initialState = {
            dialogs: [
                {id: 1, name: 'Jameson'},
                {id: 2, name: 'Bob'},
                {id: 3, name: 'Jane'},
                {id: 4, name: 'Arnold'},] as Array<DialogsType>,
            messages : [
                {id: 1, message: 'What\'s up?'},
                {id: 2, message: 'What is your hobby?'},
                {id: 3, message: 'Hello'}] as Array<MessagesType>,
            newMessageBody: ""
        };

export type ActionsDialogsTypes =
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export const updateNewMessageBodyAC = (body: string) => ({type: 'UPDATE-NEW-MESSAGE-BODY', body} as const)
export const sendMessageAC = () => ({type: 'SEND-MESSAGE'} as const)

export type InitialStateType = typeof initialState

export const dialogsReducer = (state:InitialStateType =  initialState, action:ActionsTypes):InitialStateType => {
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