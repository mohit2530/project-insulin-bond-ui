import React from "react";
import FormErrorSummary from "../../library/utils/form-error-summary/form-error-summary";
import useForm from "../../library/utils/useForm";
import {SignUpAction} from "./sign-up.actions";
import signUpValidators from "./sign-up.validators";
import {connect} from "react-redux";
import {signUpQuestions} from "./sign-up.questions";
import TextboxQuestion from "../../library/questions/textbox-question/textbox-question";
import Button from "../../library/button/Button";

const SignUpComponent = (props) => {
  const onSubmit = async () => {
    props.dispatch(SignUpAction(values));
    },
    { handleSubmit, handleChange, handleBlur, values, errors } = useForm(signUpValidators, onSubmit),
    question = signUpQuestions(values, errors);

    return (
      <div className="container">
        <div className="container grey lighten-3 z-depth-4 fixed-size-50">
          <div className="container">
            <form onSubmit={handleSubmit} className="padding-margin-10">
                <h2 className="center-align"> Create an Account </h2>
                <FormErrorSummary errors={errors}/>
                <TextboxQuestion onChange={handleChange} onBlur={handleBlur} question={question.firstName} />
                <TextboxQuestion onChange={handleChange} onBlur={handleBlur} question={question.lastName} />
                <TextboxQuestion onChange={handleChange} onBlur={handleBlur} question={question.email} />
                <TextboxQuestion onChange={handleChange} onBlur={handleBlur} question={question.username} />
                <TextboxQuestion onChange={handleChange} onBlur={handleBlur} question={question.password} />
                <TextboxQuestion onChange={handleChange} onBlur={handleBlur} question={question.confirmPassword} />
                <div className="center-align">
                  <div className="btn-center">
                    <Button name={'Register'} />
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    )
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(SignUpComponent);
