import {
    dialogsReducer,
    DialogsType,
    InitialStateType,
    MessagesType,
    sendMessageAC,
    updateNewMessageBodyAC
} from "./dialogs-reducer";

let initialState: InitialStateType
let newText: string

beforeEach(() => {
    newText = 'Hi'
    initialState = {
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
})

test('correct messages should be added', () => {
    let endState = dialogsReducer (initialState,sendMessageAC())
    expect(endState.messages.length).toBe(4);
    expect(endState.messages[3].message).toBe('')
});

