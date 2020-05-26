import {Validators} from "../../library/utils/Validator";

export default function signUpValidators(value) {
    let errors = {};

    if (Validators.required(value.firstName)) {
        errors.firstName = 'First Name is Required';
    }
    if (Validators.required(value.lastName)) {
        errors.lastName = 'Last Name is Required';
    }
    if (Validators.required(value.email)) {
        errors.email = 'Email is Required';
    } else if (Validators.email(value.email)) {
        errors.email = 'Invalid Email Address';
    }
    if (Validators.required(value.password)) {
        errors.password = 'Password is Required';
    } else if (Validators.password(value.password)) {
        errors.password = 'Password Must Have 8 Character long, One Number and One Symbol';
    }
    if (Validators.required(value.confirmPassword)) {
        errors.confirmPassword = 'Confirm Password is Required';
    } else if (value.confirmPassword !== value.password) {
        errors.confirmPassword = 'Password Does not Match';
    }

    return errors;
}
