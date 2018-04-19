import React, { Component } from 'react';
import TeacherPanel from './TeacherPanel';
import ViewPanel from './ViewPanel';

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
            <TeacherPanel/><ViewPanel/>
            </div>
        );
    
  }
}
