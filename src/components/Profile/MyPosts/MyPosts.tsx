import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {PostsType,} from "../../../redux/store";

type MyPostsProps = {
    posts: Array<PostsType>
    messageForNewPost: string
    addPostCallback: () => void
    updateNewPostTextCallback: (newText: string) => void
}

const MyPosts = (props: MyPostsProps) => {

    let postsElement = props.posts.map(el =>
        <Post key={el.id} id={el.id}
              message={el.message}
              likesCount={el.likesCount}
              avatar={el.avatar}/>)



    const onAddPostHandler = () => {
        props.addPostCallback()
    }

  /*  let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onChangePostHandler = () => {
        let text = ''
        if (newPostElement.current?.value) text = newPostElement.current?.value
        props.updateNewPostTextCallback(text)
    }*/
    const onChangePostHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostTextCallback(event.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea
                        onChange={onChangePostHandler}
                        //ref={newPostElement}
                        value={props.messageForNewPost}
                    />
                </div>
                <div>
                    <button onClick={onAddPostHandler}>Add post</button>
                    <button>Remove</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;