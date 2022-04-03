import React from "react";
type PostsType = {
    id: number
    message: string
    likesCount: number
}
type DialogsType = {
    id : number
    name : string
}
type MessagesType ={
    id : number
    message : string
}
export type ProfilePageType = {
    posts : Array<PostsType>
}
export type DialogsPageType ={
    dialogs : Array<DialogsType>
    messages: Array<MessagesType>    
}
type SidebarType = {}
export type StateType ={
    profilePage : ProfilePageType
    dialogsPage : DialogsPageType
    sidebar: SidebarType
}

export const state : StateType = {
    profilePage : {
        posts : [
            {id: 1, message:'Hi, what is favourite movie?', likesCount: 20},
            {id: 2, message:'It\'s the best social network you have ever seen',likesCount: 15},
            {id: 3, message:'Weather forecast for friday',likesCount: 10}
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
    sidebar: {}
}