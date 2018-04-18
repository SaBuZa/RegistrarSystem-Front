import React, { Component } from 'react';

class LoginButton extends Component {

    render() {
        return (
            <button onClick = {() => this.props.onLoginClick({ page:'StudentMenu'})}>
            Login
            </button>
        );

    }


}

export default LoginButton;