import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src="http://priroda.su/wp-content/uploads/2016/03/les.jpg" alt="forest"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
            </div>
    )
}

export default Profile;