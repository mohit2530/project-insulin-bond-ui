export const signUpQuestions = (value, error) => ({
   firstName: {
       key: 'firstName',
       value: value.firstName,
       label: 'First Name',
       validator: 'alphabet',
       error: error.firstName
   },
    lastName: {
        key: 'lastName',
        value: value.lastName,
        label: 'Last Name',
        validator: 'alphabet',
        error: error.lastName
    },
    email: {
        key: 'email',
        value: value.email,
        label: 'Email',
        error: error.email,
    },
    password: {
        key: 'password',
        value: value.password,
        label: 'Password',
        type: 'password',
        error: error.password,
        min: 8
    },
    confirmPassword: {
        key: 'confirmPassword',
        value: value.confirmPassword,
        label: 'Confirm Password',
        type: 'password',
        error: error.confirmPassword,
        min: 8
    }
});
