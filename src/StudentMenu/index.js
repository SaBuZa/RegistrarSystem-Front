import React, { Component } from 'react';
//import RegisterCourse from './RegisterCourse';
//import SearchCourse from './SearchCourse';
import StudentPanel from './StudentPanel';
import ViewPanel from './ViewPanel';
export default class StudentMenu extends Component {

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
            <StudentPanel changeState={this.changeState} /><ViewPanel currentPage={this.state.page}/>
            </div>
        );
    
  }
}
