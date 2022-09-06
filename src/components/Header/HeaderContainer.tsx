import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {ActionsAuthTypes, getAuthUserDataThunkCreator, setAuthUserDataAC} from "../../redux/auth-reducer";

type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}
type MapDispatchToPropsType = {
    getAuthUserData: () => void
}
export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
       this.props.getAuthUserData()
    }

   render() {
       //return <Header {...this.props}/>
       return <Header isAuth={this.props.isAuth} login={this.props.login}/>
   }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps,
    {getAuthUserData: getAuthUserDataThunkCreator})
(HeaderContainer);