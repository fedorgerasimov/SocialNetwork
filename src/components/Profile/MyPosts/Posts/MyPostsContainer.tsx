import React from 'react';
import MyPosts from "../MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profile-reducer";

import {StoreContext} from "../../../../StoreContext";

type MyPostsProps = {
    //store: ReduxStoreType
}

export const MyPostsContainer = (props: MyPostsProps) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()
                    const addPostHandler = () => {
                        store.dispatch(addPostAC())
                    }

                    const onChangeHandler = (text: string) => {
                        store.dispatch(updateNewPostTextAC(text))
                    }

                    return (
                        <MyPosts
                            posts={state.profilePage.posts}
                            messageForNewPost={state.profilePage.messageForNewPost}
                            updateNewPostTextCallback={onChangeHandler}
                            addPostCallback={addPostHandler}/>
                    );
                }
            }
        </StoreContext.Consumer>
    )
};
