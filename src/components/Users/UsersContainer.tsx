import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppRootStateType} from "../../redux/redux-store";
import {followAC, InitialStateType, setUserAC, unFollowAC, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
     usersPage: InitialStateType
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType) : MapStateToPropsType => {
    return{
       usersPage: state.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType=> {
    return {
        follow: (userId: number) => {dispatch(followAC(userId))},
        unFollow: (userId: number) => {dispatch(unFollowAC(userId))},
        setUsers: (users: Array<UserType>) => {dispatch(setUserAC(users))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

