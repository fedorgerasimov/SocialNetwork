import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPageAC, toggleFollowingProgressAC,
    unFollowThunkCreator,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import Preloader from "../common/Preloader";

type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId: number) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUserAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.totalUserCount}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    {
        setCurrentPage: setCurrentPageAC,
        toggleFollowingProgress: toggleFollowingProgressAC,
        follow: followThunkCreator,
        unFollow: unFollowThunkCreator,
        getUsers: getUsersThunkCreator
    })(UsersContainer)
