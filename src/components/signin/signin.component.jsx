import React from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

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

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
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
                        <CustomButton>Sign In</CustomButton>
                        <CustomButton isgoogle="true">Sign In with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;