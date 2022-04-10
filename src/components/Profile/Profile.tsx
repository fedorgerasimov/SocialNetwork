import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileProps = {
    stateData: ProfilePageType
    addPostCallback: (postMessage: string)=> void
}

function Profile(props: ProfileProps ) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.stateData.posts}  addPostCallback={props.addPostCallback}/>
        </div>
    )
}

export default Profile;