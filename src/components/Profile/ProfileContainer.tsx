import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfileAC} from "../../redux/profile-reducer";

type MapDispatchToPropsType = {
   setUserProfile: (profile:ProfileType) => void
}
type MapStateToPropsType = {
    profile:ProfileType | null
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)

            })
    }

    render() {
        return (
        <div>
            <Profile {...this.props}  profile={this.props.profile}/>
        </div>
    )
    }
}

const mapStateToProps = (state:AppRootStateType) :MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps,
    {setUserProfile: setUserProfileAC}) (ProfileContainer)



