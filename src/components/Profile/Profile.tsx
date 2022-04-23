import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type ProfileProps = {
    profilePage: ProfilePageType
    //addPostCallback: (postMessage: string )=> void
    //updateNewPostTextCallback:(newText: string) => void
    dispatch: (action: ActionsTypes)=> void
}

function Profile(props: ProfileProps ) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     messageForNewPost={props.profilePage.messageForNewPost}
                     dispatch={props.dispatch}
                     //addPostCallback={props.addPostCallback}
                     //updateNewPostTextCallback={props.updateNewPostTextCallback}
                    />
        </div>
    )
}

export default Profile;