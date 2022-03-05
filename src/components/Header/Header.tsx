import React from 'react';
import s from './Header.module.css';

function Header() {
    return(
        <header className={s.header}>
            <img
                src="https://cdn3.iconfinder.com/data/icons/emojis-colored-outlined-2/70/Emoji_emoticon_face_happy_laugh_smile_tear-512.png"
                alt="my logo"/>
        </header>
    )
}

export default Header;