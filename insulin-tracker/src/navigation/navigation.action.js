export const SIGN_IN_NAVIGATION = '[Sign In] Navigate to Sign In Page';
export const SIGN_UP_NAVIGATION = '[Sign Up] Navigate to Sign Up Page';
export const LOG_OUT_NAVIGATION= '[Log Out] Log Out';
export const LOG_OUT_SUCCEED= '[Log Out] Log Out SUCCEED';

export const SignInNavigationAction = () => ({
    type: SIGN_IN_NAVIGATION
});

export const SignUpNavigationAction = () => ({
    type: SIGN_UP_NAVIGATION
});

export const LogOutNavigationAction = () => ({
    type: LOG_OUT_NAVIGATION
});

export const LogOutSucceedAction = () => ({
    type: LOG_OUT_SUCCEED
});



