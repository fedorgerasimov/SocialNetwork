import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import {Music} from "./components/Navbar/Music/Music";
import {StateType} from "./redux/state";
import {Sidebar} from "./components/Sidebar/Sidebar";

type AppProps = {
    stateData: StateType
    addPost: (postMessage: string)=> void
}

const App: React.FC<AppProps> = (props) => {
    return (
        <BrowserRouter> {/*нужно всё обернуть <BrowserRouter>, по другому не работает*/}
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/sidebar' render={() => <Sidebar stateData={props.stateData.sidebar}/>}/>
                    {/*<Route path='/dialogs' component={Dialogs}/>  Route exact path*/}
                    <Route path='/dialogs' render={() => <Dialogs stateData={props.stateData.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.stateData.profilePage}
                                                                  addPostCallback={props.addPost}/>}/>  {/*posts={props.stateData.profilePage.posts}*/}
                    <Route path='/music' render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;