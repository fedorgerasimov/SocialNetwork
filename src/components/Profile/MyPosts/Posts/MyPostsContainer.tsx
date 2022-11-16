import React from 'react';
import MyPosts from "../MyPosts";
import {addPostAC} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../../redux/redux-store";

type MyPostsProps = {
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPostCallback: (messageForNewPost: string) => {
            dispatch(addPostAC(messageForNewPost))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
