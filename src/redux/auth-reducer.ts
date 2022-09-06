import {authAPI} from "../api/api";

type AuthStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}
const initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthStateType = initialState, action: ActionsAuthTypes): AuthStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state, ...action.data, isAuth: true
            }
        default:
            return state;
    }
}

export type ActionsAuthTypes =
    ReturnType<typeof setAuthUserDataAC>

export const setAuthUserDataAC = (id: number, email: string, login: string) =>
    ({type: 'SET-USER-DATA', data: {id, email, login}} as const)

export const getAuthUserDataThunkCreator = () => (dispatch: any) =>{
     authAPI.me().then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserDataAC(id, email, login))
                }
            })
}