import React from 'react';
import MyPosts from "../MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profile-reducer";
import {ReduxStoreType} from "../../../../redux/redux-store";

type MyPostsProps = {
    store: ReduxStoreType
}

export const MyPostsContainer = (props: MyPostsProps) => {

    const state = props.store.getState()

    const addPostHandler = () => {
        props.store.dispatch(addPostAC())
    }

    const onChangeHandler = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts
            posts={state.profilePage.posts}
            messageForNewPost={state.profilePage.messageForNewPost}
            updateNewPostTextCallback={onChangeHandler}
            addPostCallback={addPostHandler}/>
    );
};
