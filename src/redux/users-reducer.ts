export type UserType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: { city: string, country: string }
    photos: string
}
export type InitialStateType = {
    users: Array<UserType>
}
const initialState: InitialStateType = {
    users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsUsersTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, users: state.users.map(el => el.id === action.userId ?
                    {...el, followed: true} : el)
            }
        case "UN-FOLLOW":
            return {
                ...state, users: state.users.map(el => el.id === action.userId ?
                    {...el, followed: false} : el)
            }
        case "SET-USERS":
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export type ActionsUsersTypes =
    ReturnType<typeof unFollowAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof setUserAC>

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unFollowAC = (userId: number) => ({type: 'UN-FOLLOW', userId} as const)
export const setUserAC = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)