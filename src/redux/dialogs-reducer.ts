
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
    messages: [
        {id: 1, message: 'What\'s up?'},
        {id: 2, message: 'What is your hobby?'},
        {id: 3, message: 'Hello'}] as Array<MessagesType>,
};

export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsDialogsTypes): InitialStateType => {

    switch (action.type) {
        case 'SEND-MESSAGE':
            let body = action.newMessageBody
           return  {
                ...state,
                messages: [...state.messages, {id: 4, message: body} ]
            }
        default:
            return state;

    }
}

export type ActionsDialogsTypes = ReturnType<typeof sendMessageAC>
export const sendMessageAC = (newMessageBody:string) => ({type: 'SEND-MESSAGE', newMessageBody} as const)