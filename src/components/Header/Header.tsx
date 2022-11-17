import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

type HeaderPropsType = {
    isAuth: boolean,
    login: string | null
    logout: ()=> void // undefined
}

function Header(props: HeaderPropsType) {
    return (
        <header className={s.header}>
            <img
                src="https://cdn3.iconfinder.com/data/icons/emojis-colored-outlined-2/70/Emoji_emoticon_face_happy_laugh_smile_tear-512.png"
                alt="my logo"/>
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;