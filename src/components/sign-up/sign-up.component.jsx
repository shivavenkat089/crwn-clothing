import { Component } from 'react';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      displayName: '',
      password: '',
      confirmPassword: '',
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, displayName, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        email: '',
        displayName: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.log('Error while saving user details', err.errorMessage, err);
    }
  };
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { email, displayName, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignIn;
