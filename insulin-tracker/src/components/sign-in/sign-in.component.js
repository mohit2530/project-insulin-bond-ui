import React from "react";
import useForm from "../../library/utils/useForm";
import signInValidate from "./sign-in.validators";
import {signInQuestion} from "./sign-in.questions";
import TextboxQuestion from "../../library/questions/textbox-question/textbox-question";
import Button from "../../library/button/Button";
import FormErrorSummary from "../../library/utils/form-error-summary/form-error-summary";
import {connect} from "react-redux";
import {SignInAction} from "./sign-in.actions";
import SignInGuard from "./sign-in.guard";
import {isSignInFailed} from "./sign-in.reducer";
import ValidationMessage from "../../library/common/validation-message/validation-message";

const SignInComponent = (props) => {
    SignInGuard(props);
    const onSubmit = () => {
            props.dispatch(SignInAction(values));
        },
        {handleSubmit, handleChange, handleBlur, values, errors} = useForm(signInValidate, onSubmit),
        question = signInQuestion(values, errors);

    return (
        <div className="container">
            <div className="container grey lighten-3 z-depth-4 fixed-size-30">
                <div className="container">
                    <form onSubmit={handleSubmit} className="padding-margin-10">
                        <h2 className="center-align">Sign In</h2>
                        <FormErrorSummary errors={errors}/>
                        <TextboxQuestion onChange={handleChange} onBlur={handleBlur} question={question.email}/>
                        <TextboxQuestion onChange={handleChange} onBlur={handleBlur} question={question.password}/>
                        <div className="center-align-btn">
                            <div className="btn-center">
                                <Button name={'Log In'}/>
                            </div>
                        </div>
                        {props.signInFailed$ &&
                        <ValidationMessage message={'Something went wrong, Please check your email or password'}/>}
                    </form>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    signInFailed$: isSignInFailed(state)
});

export default connect(mapStateToProps)(SignInComponent);
