import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";

/*
let posts = [
    {id: 1, message:'Hi, what is favourite movie?', likesCount: 20},
    {id: 2, message:'It\'s the best social network you have ever seen',likesCount: 15},
    {id: 3, message:'Weather forecast for friday',likesCount: 10}
]

const dialogs = [
    {id: 1, name: 'Jameson'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Jane'},
    {id: 4, name: 'Arnold'},]

const messages = [
    {id: 1, message: 'What\'s up?'},
    {id: 2, message: 'What is your hobby?'},
    {id: 3, message: 'Hello'}]
*/
/*<App posts={posts} dialogs={dialogs} messages={messages}/>,*/

ReactDOM.render(
    <App state={state}/>,
  document.getElementById('root')
);