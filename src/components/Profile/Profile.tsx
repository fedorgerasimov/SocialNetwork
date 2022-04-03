import React from "react";
import s from './Profile.module.css'
import MyPosts, {MyPostsPropsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


function Profile(props: MyPostsPropsType ) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;