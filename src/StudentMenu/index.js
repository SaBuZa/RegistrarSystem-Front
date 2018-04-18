import React, { Component } from 'react';
//import RegisterCourse from './RegisterCourse';
//import SearchCourse from './SearchCourse';
import StudentPanel from './StudentPanel';
import ViewPanel from './ViewPanel';
export default class StudentMenu extends Component {
    state = {page : "StudentMenu"};
  render() {
    if (this.state.page === "StudentMenu"){
        return (
            <div>
            <StudentPanel /><ViewPanel />

           
            </div>
        );
    }/*else if (this.state.page === "RegisterCourse"){
        return (
            <RegisterCourse />
        );
    }else if (this.state.page === "SearchCourse"){
        return (
            <SearchCourse />
        );
    }*/
  }
}
