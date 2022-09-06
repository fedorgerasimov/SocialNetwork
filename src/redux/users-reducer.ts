import {usersAPI} from "../api/api";

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
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 2,
    isFetching: false,
    followingInProgress: []
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
                ...state, users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state, totalUserCount: action.count
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "TOGGLE_IS_FOLLOWING_FETCHING":
            //debugger
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export type ActionsUsersTypes =
    ReturnType<typeof followSuccessAC>
    | ReturnType<typeof unFollowSuccessAC>
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof toggleFollowingProgressAC>

export const followSuccessAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unFollowSuccessAC = (userId: number) => ({type: 'UN-FOLLOW', userId} as const)
export const setUserAC = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: "SET-TOTAL-USERS-COUNT", count: totalUsersCount} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const)
export const toggleFollowingProgressAC = (isFollowing: boolean, userId: number) => {
    //debugger
    return  ({type: "TOGGLE_IS_FOLLOWING_FETCHING", isFollowing, userId} as const)
}


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        {
            dispatch(toggleIsFetchingAC(true))

            usersAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(toggleIsFetchingAC(false))
                dispatch(setUserAC(data.items))
                dispatch(setTotalUsersCountAC(data.totalCount))
            })
        }
    }
}

export const followThunkCreator = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgressAC(true, userId))
        usersAPI.followUsers(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(followSuccessAC(userId))
                }
                dispatch(toggleFollowingProgressAC(false, userId))
            })
    }
}

export const unFollowThunkCreator = (userId: any) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgressAC(true, userId))
        usersAPI.unFollowUsers(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unFollowSuccessAC(userId))
                }
                dispatch(toggleFollowingProgressAC(false, userId))
            })
    }
}