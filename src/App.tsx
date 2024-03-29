import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Navbar/Music/Music";
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./Login/Login";

type AppProps = {

}

const App: React.FC<AppProps> = (props) => {
    //const stateData = props.store.getState()

    return (
        <BrowserRouter> {/*нужно всё обернуть <BrowserRouter>, по другому не работает*/}
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                   {/* <Route path='/sidebar' render={() => <Sidebar stateData={stateData.sidebar}/>}/>*/}
                    <Route path='/dialogs' render={() => <DialogsContainer /*store={props.store}*//>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer /*store={props.store}*/
                    />}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;