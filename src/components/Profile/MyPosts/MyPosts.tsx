import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {PostsType,} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

type MyPostsProps = {
    posts: Array<PostsType>
    addPostCallback: (messageForNewPost: string) => void
}

type FormDataType = {messageForNewPost: string}
const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"messageForNewPost"} placeholder={"Post message"}
                       validate = {[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm<FormDataType>({form: "addNewPostForm"})(AddNewPostForm)

const MyPosts = (props: MyPostsProps) => {

    let postsElement = props.posts.map(el =>
        <Post key={el.id} id={el.id}
              message={el.message}
              likesCount={el.likesCount}
              avatar={el.avatar}/>)

    const addNewPost = (values: any) => {
        props.addPostCallback(values.messageForNewPost)
    }
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div className={s.posts}>
                {postsElement}
            </div>
            <AddNewPostFormRedux onSubmit={addNewPost}/>
        </div>
    )
}
export default MyPosts;