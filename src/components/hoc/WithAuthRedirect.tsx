import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}
export const mapStateToProps = (state: AppRootStateType):  MapStateToPropsType =>
    ({isAuth: state.auth.isAuth,})

export function withAuthRedirect <WrappedComponentProps>(WrappedComponent: ComponentType<WrappedComponentProps>)  {
    function RedirectComponent(props: MapStateToPropsType) {
        const {isAuth, ...restProps} = props
        if (props.isAuth === false) return <Redirect to={"/login"}/>
        return <WrappedComponent {...restProps as WrappedComponentProps}/>

    }

    const ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}

