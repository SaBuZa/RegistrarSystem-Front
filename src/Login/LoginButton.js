import React, { Component } from 'react';

class LoginButton extends Component {

    render() {
       if (this.props.selectedType === "StudentChosen"){
            return (
                <button className="btn btn-success" onClick = {() => this.props.onLoginClick({ page:'StudentMenu'})}>
                Login
                </button>
            );
        }else if (this.props.selectedType === "TeacherChosen"){
            return (
                <button className="btn btn-success" onClick = {() => this.props.onLoginClick({ page:'TeacherMenu'})}>
                Login
                </button>
            );
        }else{
            return (
                <button className="btn" disabled={!this.props.selected!==null}>
                Login
                </button>

            );
        }
    }


}

export default LoginButton;