import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

store.subscribe(rerenderEntireTree)
rerenderEntireTree() // нужно вызвать функцию, чтобы произошла перерисовка
//rerenderEntireTree(store.getState()) // почему-то передаёт в функцию аргумент