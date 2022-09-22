import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {getUserProfileThunkCreator, ProfileType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}
type MapStateToPropsType = {
    profile: ProfileType | null
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
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {profile: state.profilePage.profile,}
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator})
)(ProfileContainer)


