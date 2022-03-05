import React from "react";
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <div>
                <img src="https://cdn3.iconfinder.com/data/icons/animals-105/150/icon_animal_tigre-512.png" alt="forest"/>
                post 2
            </div>
            <div>
                <span>like</span>
            </div>
        </div>
    )
}
export default Post;