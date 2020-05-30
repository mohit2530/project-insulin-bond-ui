import React from "react";
import useForm from "../../library/utils/useForm";
import signInValidate from "./sign-in.validators";
import {signInQuestion} from "./sign-in.questions";
import TextboxQuestion from "../../library/questions/textbox-question/textbox-question";
import Button from "../../library/button/Button";
import FormErrorSummary from "../../library/utils/form-error-summary/form-error-summary";
import { SignUpNavigationAction} from "../../navigation/navigation.action";
import {connect} from "react-redux";
import {SignInAction} from "./sign-in.actions";
import SignInGuard from "./sign-in.guard";
import Logo from '../../library/common/images/wc.jpg';
import {isSignInFailed} from "./sign-in.reducer";
import ValidationMessage from "../../library/common/validation-message/validation-message";

const SignInComponent = (props) => {
    SignInGuard(props);
    const onSubmit = () => {
            props.dispatch(SignInAction(values));
        },
        {handleSubmit, handleChange, handleBlur, values, errors} = useForm(signInValidate, onSubmit),
        question = signInQuestion(values, errors);

    const navigateToSignUp = () => props.dispatch(SignUpNavigationAction());

    return (
        <div className="container">
            <div className="container grey lighten-3 z-depth-4 fixed-size-30">
                 <div class="row padding-margin-100">
                    <div class="col s5">
                        <img src={Logo} alt = "temp-website-logo" className="center-img-sm"/>
                    </div>
                    <div class="col s7">
                        <div className="container">
                            <form onSubmit={handleSubmit} className="padding-margin-10">
                                <div className="center-align">
                                    <span class="blue-text text-darken-2">Sign In </span>
                                </div>
                                <FormErrorSummary errors={errors}/>
                                <TextboxQuestion onChange={handleChange} onBlur={handleBlur} question={question.email}/>
                                <TextboxQuestion onChange={handleChange} onBlur={handleBlur} question={question.password}/>
                                <div className="center-align-btn margin-top-30">
                                    <div className="btn-center">
                                        <Button name={'Log In'} />
                                    </div>
                                </div>
                                <div className="center-align-btn margin-top-30">
                                    <span> Do not have an account ? </span>
                                    <div onClick={navigateToSignUp}>
                                        <a>
                                            <span className="blue-text text-darken-2 pointer"> Register</span>
                                        </a>
                                    </div>
                                </div>
                                {props.signInFailed$ &&
                                <ValidationMessage message={'Something went wrong, Please check your email or password'}/>}
                            </form>
                        </div>
                    </div>
                </div>
                <h6 className = "red-text text-darken-2 center-align margin-top-30"> Unable to accept new client at the current moment </h6>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    signInFailed$: isSignInFailed(state)
});

export default connect(mapStateToProps)(SignInComponent);
