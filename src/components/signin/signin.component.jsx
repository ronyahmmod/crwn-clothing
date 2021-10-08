import React from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        try{
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password);
        } catch(error) {
            console.error(error);
        }
    }
 
    render() {
        return(
            <div className="signin">
                <h3 className="signin__title">I already have an account</h3>
                <p className="sginin__subtitle">Sign in with your email and password</p>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="enter email" required />
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="enter password" required />
                    <div className="signin__btn-group">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" isgoogle="true" onClick={signInWithGoogle}>Sign In with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;