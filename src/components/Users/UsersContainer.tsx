import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUserAC, toggleFollowingProgressAC, toggleIsFetchingAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import Preloader from "../common/Preloader";
import {usersAPI} from "../../api/api";

type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array <number>
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

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
        this.props.toggleIsFetching(true)
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
             usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
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
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

export default connect(mapStateToProps,
    {
        follow: followAC,
        unFollow: unFollowAC,
        setUsers: setUserAC,
        setCurrentPage: setCurrentPageAC,
        setTotalUsersCount: setTotalUsersCountAC,
        toggleIsFetching: toggleIsFetchingAC,
        toggleFollowingProgress: toggleFollowingProgressAC
    })(UsersContainer)
