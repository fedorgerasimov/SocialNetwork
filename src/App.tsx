import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Dialogs, DialogsPropsType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import {Music} from "./components/Navbar/Music/Music";
import {MyPostsPropsType} from "./components/Profile/MyPosts/MyPosts";


/*const SomeComponent = () => <Dialogs/>*/

type AppPropsType = {

}

const App: React.FC<any> = (props) => {

    return (
        <BrowserRouter> {/*нужно всё обернуть <BrowserRouter>, по другому не работает*/}
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
{/*
                <Route path='/dialogs' component={Dialogs}/>  Route exact path
*/}
                <Route path='/dialogs' render={()=> <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                <Route path='/profile' render={()=> <Profile posts={props.posts}/>}/>
                <Route path='/music' render={()=> <Music/>}/>


            </div>


        </div>
    </BrowserRouter>
    );
}

export default App;
