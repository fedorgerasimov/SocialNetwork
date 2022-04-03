import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

export type postsType = {
    message: string
    likesCount: number
    id:number
}


export type MyPostsPropsType = {
    posts : Array<postsType>
}

const MyPosts:React.FC<MyPostsPropsType> = (props) => {

/*    let postsData = [
        {id: 1, message:'Hi, what is favourite movie?', likesCount: 20},
        {id: 2, message:'It\'s the best social network you have ever seen',likesCount: 15}]*/

    let postsElement = props.posts.map(el => <Post key={el.id} id={el.id} message={el.message} likesCount={el.likesCount}/>)

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
                {postsElement}
                {/*<Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>*/}

            </div>
        </div>
    )
}
export default MyPosts;