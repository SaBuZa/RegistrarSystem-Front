import React, { Component } from 'react';
import RegisterButton from './RegisterButton';
import LoginButton from './LoginButton';

class Login extends Component {
  render() {
    return (
        <div>
        <RegisterButton onRegisterClick={this.props.changeState} />
        <LoginButton onLoginClick={this.props.changeState} />
        </div>
    );
  }
}

export default Login