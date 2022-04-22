import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import {Music} from "./components/Navbar/Music/Music";
import {ActionsTypes, StoreType} from "./redux/state";
import {Sidebar} from "./components/Sidebar/Sidebar";

type AppProps = {
    store: StoreType
    //addPost: (postMessage: string )=> void
    //updateNewPostText:(newText: string) => void
    //dispatch: (action: ActionsTypes)=> void
}

const App: React.FC<AppProps> = (props) => {
    const stateData = props.store.getState()
    return (
        <BrowserRouter> {/*нужно всё обернуть <BrowserRouter>, по другому не работает*/}
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/sidebar' render={() => <Sidebar stateData={stateData.sidebar}/>}/>
                    {/*<Route path='/dialogs' component={Dialogs}/>  Route exact path*/}
                    <Route path='/dialogs' render={() => <Dialogs stateData={stateData.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={stateData.profilePage}
                                                                  updateNewPostTextCallback={props.store.updateNewPostText.bind(props.store)}
                                                                  dispatch={props.store.dispatch.bind(props.store)}
                                                                    //addPostCallback={props.store.addPost.bind(props.store)}
                                                                    />}/>
                    <Route path='/music' render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;