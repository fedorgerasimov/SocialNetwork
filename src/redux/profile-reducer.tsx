import {ActionsTypes, PostsType, ProfilePageType} from "./state";

export type ActionsProfileTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>

export const addPostAC = (postMessage: string) => ({type: 'ADD-POST', postMessage} as const)
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText} as const)

export const profileReducer = (state: ProfilePageType, action: ActionsTypes):ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 5,
                avatar: 'https://cdn4.iconfinder.com/data/icons/emojis-flat-pixel-perfect/64/emoji-64-512.png'
            }
            state.posts.push(newPost)
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.messageForNewPost = action.newText
            return state
        default:
            return state;

    }
}