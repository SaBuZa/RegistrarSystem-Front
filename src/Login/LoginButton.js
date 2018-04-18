import React, { Component } from 'react';

class LoginButton extends Component {

    render() {
        return (
            <button className="btn btn-success" onClick = {() => this.props.onLoginClick({ page:'StudentMenu'})}>
            Login
            </button>
        );

    }


}

export default LoginButton;