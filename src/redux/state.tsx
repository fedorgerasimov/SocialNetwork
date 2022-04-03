import React from "react";

export const state = {
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
    }
}