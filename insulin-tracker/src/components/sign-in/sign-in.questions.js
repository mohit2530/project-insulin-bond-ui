export const signInQuestion = (values, errors) => {
    return {
        email: {
            value: values.email,
            key: 'email',
            label: 'Email',
            error: errors.email
        },
        password: {
            value: values.password,
            key: 'password',
            type: 'password',
            label: 'Password',
            error: errors.password
        }
    };
};
