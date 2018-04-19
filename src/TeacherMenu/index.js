import React, { Component } from 'react';

export default class TeacherMenu extends Component {

    state = {
        page : "Default"
    };
  
    changeState = (props) => {
        this.setState({
            page: props.page
        });
    }

    render() {
        return (
            <div>
            "Teacher Menu"
            </div>
        );
    
  }
}
