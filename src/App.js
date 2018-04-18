import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from  './Register';
import StudentMenu from './StudentMenu';

class App extends Component {
  state = {
    page : 'Login'
    //'page' : 'StudentMenu'

  }
  changeState = (props) => {
    this.setState({
      page : props.page
    });
  }

  render() {
    if (this.state.page === 'Login'){
      return (
        <Login changeState={this.changeState} />  
      );
    }else if (this.state.page === 'Register'){
      return (
        <Register />
      );
    }else if (this.state.page === 'StudentMenu'){
      return (
        <StudentMenu />
      );
    }
  }
}

export default App;
