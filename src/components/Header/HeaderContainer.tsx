import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {ActionsAuthTypes, setAuthUserDataAC} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

   render() {
       //return <Header {...this.props}/>
       return <Header isAuth={this.props.isAuth} login={this.props.login}/>
   }
}

type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}

type MapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => ActionsAuthTypes
}
export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps,
    {setAuthUserData: setAuthUserDataAC})
(HeaderContainer);