import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

type MyPostsType = {

}

const MyPosts = (props:any) => {

    let postData = [
        {id: 1, message:'Hi, what is favourite movie?', likesCount: 20},
        {id: 2, message:'It\'s the best social network you have ever seen',likesCount: 15}]

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>

            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>

            </div>
        </div>
    )
}
export default MyPosts;