import React from 'react';
import Log from '../../lib/log';
import { Link } from 'react-router-dom';
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signOutLinks';
import {connect} from "react-redux";
import {getStateUsername} from "../sign-in/sign-in.reducer";


const NavBar = (props) => {
    Log.info("Navigation Bar Initialized", "Navigation Component");
    return (
        <nav className="nav-wrapper teal darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">
                    Insulin Tracker
                </Link>
                {props.username$ ? <SignedInLinks/> : <SignedOutLinks/>}
            </div>
        </nav>
    )
};
const mapStateToProps = state => ({
    username$: getStateUsername(state),
});

export default connect(mapStateToProps)(NavBar);
