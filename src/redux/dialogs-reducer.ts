import {ActionsTypes, DialogsPageType} from "./store";


export type ActionsDialogsTypes =
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export const updateNewMessageBodyAC = (body: string) => ({type: 'UPDATE-NEW-MESSAGE-BODY', body} as const)
export const sendMessageAC = () => ({type: 'SEND-MESSAGE'} as const)

let initialState = {
            dialogs: [
                {id: 1, name: 'Jameson'},
                {id: 2, name: 'Bob'},
                {id: 3, name: 'Jane'},
                {id: 4, name: 'Arnold'},],
            messages: [
                {id: 1, message: 'What\'s up?'},
                {id: 2, message: 'What is your hobby?'},
                {id: 3, message: 'Hello'}],
            newMessageBody: ""
        };

export const dialogsReducer = (state: DialogsPageType =  initialState, action:ActionsTypes):DialogsPageType => {
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