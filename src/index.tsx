import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

//type AppStateType = ReturnType<typeof RootReducer>

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}
rerenderEntireTree() // нужно вызвать функцию, чтобы произошла перерисовка
store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree()
})
//store.subscribe(rerenderEntireTree)
//rerenderEntireTree(store.getState()) // почему-то передаёт в функцию аргумент