import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import {Music} from "./components/Navbar/Music/Music";
import {DialogsContainer} from "./components/Dialogs/Message/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

type AppProps = {
    //store: ReduxStoreType
    //addPost: (postMessage: string )=> void
    //updateNewPostText:(newText: string) => void
    //dispatch: (action: ActionsTypes)=> void
}

const App: React.FC<AppProps> = (props) => {
    //const stateData = props.store.getState()
    return (
        <BrowserRouter> {/*нужно всё обернуть <BrowserRouter>, по другому не работает*/}
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                   {/* <Route path='/sidebar' render={() => <Sidebar stateData={stateData.sidebar}/>}/>*/}
                    <Route path='/dialogs' render={() => <DialogsContainer /*store={props.store}*//>}/>
                    <Route path='/profile' render={() => <Profile /*store={props.store}*/
                    />}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;