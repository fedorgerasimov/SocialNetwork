import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


function Profile(props: any) {

    let posts = [
        {id: 1, message:'Hi, what is favourite movie?', likesCount: 20},
        {id: 2, message:'It\'s the best social network you have ever seen',likesCount: 15}]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}

export default Profile;