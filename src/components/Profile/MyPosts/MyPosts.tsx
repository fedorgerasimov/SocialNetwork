import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {PostsType, ProfilePageType, state, updateNewPostText} from "../../../redux/state";


type MyPostsProps = {
    posts: Array<PostsType>
    addPostCallback: (postMessage: string )=> void
    messageForNewPost:string
    updateNewPostTextCallback: (newText: string) => void
}

const MyPosts:React.FC<MyPostsProps> = (props) => {

/*    let postsData = [
        {id: 1, message:'Hi, what is favourite movie?', likesCount: 20},
        {id: 2, message:'It\'s the best social network you have ever seen',likesCount: 15}]*/

    let postsElement = props.posts.map(el => <Post key={el.id} id={el.id} message={el.message} likesCount={el.likesCount} avatar={el.avatar}/>)

    //let newPostElement = React.createRef<HTMLTextAreaElement>()  // неявная типизация

    const addPostHandler = () => {
        //const text =(newPostElement.current?.value)   // if (newPostElement.current) {alert(newPostElement.current.value) }
        //alert(text)
        //props.addPostCallback(text as string)
        /* if (newPostElement.current) {    // убрал Ref
            props.addPostCallback(newPostElement.current.value)
            newPostElement.current.value = ' '
        }*/
       /* props.addPostCallback(props.messageForNewPost)*/
        props.addPostCallback(props.messageForNewPost)
        state.profilePage.messageForNewPost = ''
    }

    const onChangePostHandler= (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log('onChangePostHandler')
        props.updateNewPostTextCallback(event.currentTarget.value)
    }


    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea //ref={newPostElement}
                                    onChange={onChangePostHandler}
                                    value={props.messageForNewPost}
                    />
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
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