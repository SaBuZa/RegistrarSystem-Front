import React, { Component } from 'react';

class RegisterButton extends Component {

    render() {
        console.log(this);
      return (
        <button type="button" className="btn btn-info" onClick={() => this.props.onRegisterClick({ page: 'Register' })}>
        Register
        </button>
      );
    }
}

export default RegisterButton;