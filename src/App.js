import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from  './Register';
import StudentMenu from './StudentMenu';
import TeacherMenu from './TeacherMenu';

class App extends Component {
  state = {
    page : 'Login'
    //page : ''
    //'page' : 'StudentMenu'

  }
  changeState = (props) => {
    this.setState({
      page : props.page
    });
  }

  render() {

    console.log(this.state.page);
    if (this.state.page === 'Login'){
      return (
        <Login changeState={this.changeState} loginType={this.state}/>  
      );
    }else if (this.state.page === 'Register'){
      return (
        <Register />
      );
    }else if (this.state.page === 'StudentMenu'){
      return (
        <StudentMenu changePage={this.changeState} />
      );
    }else if (this.state.page === 'TeacherMenu'){
      return (
        <TeacherMenu />
      );
    }else{
      return (
        <button onClick= {() => {this.setState({page : 'Login'})}} > LOGIN </button>
      )
    }
  }
}

export default App;
