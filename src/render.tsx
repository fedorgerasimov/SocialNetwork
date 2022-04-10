import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, StateType, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (state: StateType) => {
        ReactDOM.render(
       <BrowserRouter>
           <App stateData={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
       </BrowserRouter>,
        document.getElementById('root')
    )
}
