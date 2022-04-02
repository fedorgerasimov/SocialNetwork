import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import {Music} from "./components/Navbar/Music/Music";

const SomeComponent = () => <Dialogs/>

const App = (props: any) => {
    return (
        <BrowserRouter> {/*нужно всё обернуть <BrowserRouter>, по другому не работает*/}
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
{/*
                <Route path='/dialogs' component={Dialogs}/>  Route exact path
                <Route path='/profile' component={Profile}/>
                <Route path='/music' component={Music}/>
*/}
                <Route path='/dialogs' render={()=> <Dialogs/>}/>
                <Route path='/profile' render={()=> <Profile/>}/>
                <Route path='/music' render={()=> <Music/>}/>


            </div>


        </div>
    </BrowserRouter>
    );
}

export default App;
