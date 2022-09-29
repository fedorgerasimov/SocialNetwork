import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator,
    ProfileType,
    updateStatusThunkCreator
} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void

}
type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
}

type ParamsType = {
    userId: string
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<ParamsType>

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,

    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps,
        {
            getUserProfile: getUserProfileThunkCreator,
            getStatus: getStatusThunkCreator,
            updateStatus: updateStatusThunkCreator
        })
)(ProfileContainer)


