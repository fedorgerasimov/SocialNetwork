import {profileAPI, usersAPI} from "../api/api";

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
    "userId": string
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
    profile: null | ProfileType
    status: string
}

let initialState: ProfilePageType = {
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
    status: ""
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsProfileTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: action.messageForNewPost,
                likesCount: 5,
                avatar: 'https://cdn4.iconfinder.com/data/icons/emojis-flat-pixel-perfect/64/emoji-64-512.png'
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }

        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET-STATUS': {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export type ActionsProfileTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>

export const addPostAC = (messageForNewPost: string) => ({type: 'ADD-POST', messageForNewPost} as const)
export const setUserProfileAC = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatusAC = (status: string) => ({type: 'SET-STATUS', status} as const)

export const getUserProfileThunkCreator = (userId: string) => (dispatch: any) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfileAC(response.data))
    })
}

export const getStatusThunkCreator = (userId: string) => (dispatch: any) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatusAC(response.data))
    })
}

export const updateStatusThunkCreator = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
}
