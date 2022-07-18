export type PostsType = {
    id: number
    message: string
    likesCount: number
    avatar: string
}

let initialState = {
    messageForNewPost: '',
    posts: [
        {
            id: 1,
            message: 'Hi, what is favourite movie?',
            likesCount: 20,
            avatar: "https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__9-512.png"
        },
        {
            id: 2,
            message: 'It\'s the best social network you have ever seen',
            likesCount: 15,
            avatar: "https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__12-512.png"
        },
        {
            id: 3,
            message: 'Weather forecast for friday',
            likesCount: 10,
            avatar: "https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__21-512.png"
        }
    ] as Array<PostsType>,
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsProfileTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.messageForNewPost,
                likesCount: 5,
                avatar: 'https://cdn4.iconfinder.com/data/icons/emojis-flat-pixel-perfect/64/emoji-64-512.png'
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: ''
            }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                messageForNewPost: action.newText
            }
        }
        default:
            return state;
    }
}

export type ActionsProfileTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => ({type: 'ADD-POST',} as const)
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText} as const)