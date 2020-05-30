import React from 'react';
import {SignInNavigationAction, SignUpNavigationAction} from "../../navigation/navigation.action";
import {connect} from "react-redux";


const SignedOutLinks = (props) => {
    const navigateToSignIn = () => props.dispatch(SignInNavigationAction());
    const navigateToSignUp = () => props.dispatch(SignUpNavigationAction());
    return (
        <ul className="right">
            <li onClick={navigateToSignUp}><a>Register</a></li>
            <li onClick={navigateToSignIn}><a>Login</a></li>
        </ul>
    )
};
const mapStateToProps = state => ({});

export default connect(mapStateToProps)(SignedOutLinks);
