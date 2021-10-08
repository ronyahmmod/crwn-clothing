import React, {Component} from 'react';
import './signup.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {createUserProfileDocument} from '../../firebase/firebase.utils'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert('Password not matched.');
            return;
        }

        try {
            const auth = getAuth();
            const {user} = await createUserWithEmailAndPassword(auth, email, password);
            createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(error) {
            console.error(error);
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return(
            <div className="signup">
                <h3 className="signup__title">I do not have a account</h3>
                <p className="signup__subtitle">Signup with email and password</p>
                <form onSubmit={this.handleSubmit} className="signup__form">
                    <FormInput name="displayName" label="display name" type="text" handleChange={this.handleChange} value={this.state.displayName} required />
                    <FormInput name="email" label="email" type="email" handleChange={this.handleChange} value={this.state.email}required />
                    <FormInput name="password" label="password" type="password" handleChange={this.handleChange} value={this.state.password} required />
                    <FormInput name="confirmPassword" label="confirmPassword" type="password" handleChange={this.handleChange} value={this.state.confirmPassword} required />
                    <CustomButton type="submit">Sign up</CustomButton>
                </form>
            </div>
        )
    }
    
}

export default Signup;