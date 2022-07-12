import React from "react";
import {ActionsProfileTypes, profileReducer} from "./profile-reducer";
import {ActionsDialogsTypes, dialogsReducer} from "./dialogs-reducer";

export type PostsType = {
    id: number
    message: string
    likesCount: number
    avatar: string
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
type FriendsType = {
    id: number
    name: string
    hobby: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    messageForNewPost: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
export type SidebarPageType = {
    friendsPage: Array<FriendsType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarPageType
}

export type StoreType = {
    _state: StateType
    _callSubscriber: (_state: StateType) => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            posts: [
                {
                    id: 1,
                    message: 'Hi, what is favourite movie?',
                    likesCount: 20,
                    avatar: "https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__9-512.png"
                },
                {
                    id: 2,
                    message: 'It\'s the best social network you have ever seen',
                    likesCount: 15,
                    avatar: "https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__12-512.png"
                },
                {
                    id: 3,
                    message: 'Weather forecast for friday',
                    likesCount: 10,
                    avatar: "https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__21-512.png"
                }
            ],
        },
        dialogsPage: {
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
        },
        sidebar: {
            friendsPage: [
                {id: 1, name: 'Poll', hobby: 'skates'},
                {id: 2, name: 'John', hobby: 'snowboard'},
                {id: 3, name: 'Poll', hobby: 'cycling'},
            ]
        }
    },
    _callSubscriber() { // это новая функция(можно назвать onChange), не из index.tsx
        console.log('state change')
    },

    getState() {
        return this._state
    },
    subscribe(callback) { // вместо функций делаем методы
        this._callSubscriber = callback
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }

}

export type ActionsTypes =
    ActionsProfileTypes| ActionsDialogsTypes

export default store





/*export const state : StateType = {
    profilePage : {
        messageForNewPost: '',
        posts : [
            {id: 1, message:'Hi, what is favourite movie?', likesCount: 20, avatar: "https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__9-512.png"},
            {id: 2, message:'It\'s the best social network you have ever seen',likesCount: 15, avatar: "https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__12-512.png"},
            {id: 3, message:'Weather forecast for friday',likesCount: 10, avatar: "https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__21-512.png"}
        ],
    },
    dialogsPage : {
        dialogs :  [
            {id: 1, name: 'Jameson'},
            {id: 2, name: 'Bob'},
            {id: 3, name: 'Jane'},
            {id: 4, name: 'Arnold'},],
        messages : [
            {id: 1, message: 'What\'s up?'},
            {id: 2, message: 'What is your hobby?'},
            {id: 3, message: 'Hello'}]
    },
    sidebar: {
        friendsPage: [
            {id: 1, name: 'Poll', hobby: 'skates'},
            {id: 2, name: 'John', hobby: 'snowboard'},
            {id: 3, name: 'Poll', hobby: 'cycling'},
        ]
    }
}*/

/*let rerenderEntireTree = () => { // это новая функция(модно назвать onChange), не из index.tsx
    console.log('change')
}*/

/*export const subscribe =(callback: ()=> void) => {
    rerenderEntireTree = callback
}*/

/*export const addPost =(postMessage: string ) => {
    const newPost: PostsType = {
        id : new Date().getTime(),
        message: postMessage,
        likesCount: 5,
        avatar: 'https://cdn4.iconfinder.com/data/icons/emojis-flat-pixel-perfect/64/emoji-64-512.png'
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree()
}*/

/*export const updateNewPostText = (newText: string) => {
    state.profilePage.messageForNewPost = newText
    rerenderEntireTree()
}*/
