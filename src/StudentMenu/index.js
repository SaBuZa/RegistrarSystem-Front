import React, { Component } from 'react';
//import RegisterCourse from './RegisterCourse';
//import SearchCourse from './SearchCourse';
import StudentPanel from './StudentPanel';
import ViewPanel from './ViewPanel';

import './StudentMenu.css';

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
            <div className="flex-container">
                
                <div> <StudentPanel changePage={this.props.changePage} changeState={this.changeState} /> </div>
                <div> <ViewPanel currentPage={this.state.page}/> </div>
            </div>
        );
    
  }
}
