import React from 'react';
import MyPosts from "../MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../../redux/redux-store";

type MyPostsProps = {
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost

    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostTextCallback: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPostCallback: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

/*export const MyPostsContainer = (props: MyPostsProps) => {

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
};*/