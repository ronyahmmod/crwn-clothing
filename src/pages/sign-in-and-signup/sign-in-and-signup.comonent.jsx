import React from 'react';
import './sign-in-and-signup.styles.scss';
import SignIn from '../../components/signin/signin.component';
import Signup from '../../components/signup/signup.component';

const SignInAndSignUp = () => {
    return (
        <div className="sign-in-and-signup">
            <SignIn />
            <Signup />
        </div>
    )
}

export default SignInAndSignUp;