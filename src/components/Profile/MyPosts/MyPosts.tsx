import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";


const MyPosts = () => {
    return (
        <div>
            My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
            <div className={s.posts}>
                <Post message={"Hi, what is favourite movie?"} likesCount={20}/>
                <Post message={"It's the best social network you have ever seen"} likesCount={15}/>

            </div>
        </div>
    )
}
export default MyPosts;