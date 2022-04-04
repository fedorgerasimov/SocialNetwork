import React from "react";
import s from './Post.module.css'

type PostProps = {
    message: string
    likesCount: number
    avatar: string
    id: number
}

const Post = (props: PostProps) => {
    return (
        <div className={s.item}>
            <div>
                <img src={props.avatar} alt="avatar"/>
                {props.message}
            </div>
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post;