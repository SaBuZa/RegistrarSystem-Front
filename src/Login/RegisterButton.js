import React, { Component } from 'react';

class RegisterButton extends Component {

    render() {
        console.log(this);
      return (
        <button onClick={() => this.props.onRegisterClick({ page: 'Register' })}>
        Register
        </button>
      );
    }
}

export default RegisterButton;