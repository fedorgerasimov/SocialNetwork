import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, state, StateType, subscribe, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App stateData={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}
rerenderEntireTree() // нужно вызвать функцию, чтобы произошла перерисовка
subscribe(rerenderEntireTree)

