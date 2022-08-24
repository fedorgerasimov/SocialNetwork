type ProfileContactsType = {
    "facebook": string | null
    "website": string | null
    "vk": string | null
    "twitter": string | null
    "instagram": string | null
    "youtube": string | null
    "github": string | null
    "mainLink": string | null
}

type ProfilePhotoType = {
    "small": string
    "large": string
}

export type ProfileType = {
    "aboutMe": string
    "contacts": ProfileContactsType
    "lookingForAJob": boolean
    "lookingForAJobDescription": string
    "fullName": string
    "userId": number
    "photos": ProfilePhotoType
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
    avatar: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    messageForNewPost: string
    profile:null | ProfileType
}

let initialState: ProfilePageType = {
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
    profile: null,
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
            return {...state, messageForNewPost: action.newText}
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export type ActionsProfileTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
|ReturnType<typeof setUserProfileAC>

export const addPostAC = () => ({type: 'ADD-POST',} as const)
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText} as const)
export const setUserProfileAC = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)