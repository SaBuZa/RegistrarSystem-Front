import React, { Component } from 'react';
import axios from 'axios';
import RegisterButton from './RegisterButton';
import LoginButton from './LoginButton';
import LoginTypeRadio from  './LoginTypeRadio';
class Login extends Component {
  
  state = {
    selectedType : "Student",
    username : '',
    password : '',
    data : ''
  }

  onLoginTypeChange = (props) => {
    this.setState({selectedType : props.selectedType})
    //console.log(props.selectedType);
  }

  onSubmit = (stateFunc) => {
    /*axios.get('http://localhost:3000/studentinfo?userid=0').then((res) => {
        console.log(res);
    })
    */
    //console.log(document.getElementById('username').value);
    //console.log(document.getElementById('password').value);
    /*
    axios.post('http://localhost:3000/main',{
        id : document.getElementById('username').value,
        password : document.getElementById('password').value,
        usertype : this.state.selectedType
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
    */
  }

  handleLogin = () => {
    
    var targetPage = '';
    if (this.state.selectedType === 'Student') targetPage = 'StudentMenu';
    else if (this.state.selectedType === 'Teacher') targetPage = 'TeacherMenu';
    //this.props.changeState({page : targetPage});
    
    //console.log(targetPage);
    //this.onSubmit();
    axios.post('http://localhost:3000/main',{
      id : document.getElementById('username').value,
      password : document.getElementById('password').value,
      usertype : this.state.selectedType
    })
    .then((res) => {
      
      console.log("Yayyyyyyyyyyyyyyyyy");
      //console.log(res.data);
      this.setState({data:res.data});
      //if (res.)
      this.props.changeState({page : targetPage});
    })
    .catch((err) => {
        console.log(err);
    });
  }
  
  render() {
    //console.log(this.state.data);
    //console.log(this.state.selectedType);
    //<LoginButton onLoginClick={this.handleLogin} selectedType={this.state.selectedType}/>
    return (
      <div>

          <div>Login</div>
          <LoginTypeRadio onTypeChange={this.onLoginTypeChange} />

          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input id="username" type="text" className="form-control" name="Username" placeholder="Username"></input>
          </div>
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
            <input id="password" type="password" className="form-control" name="password" placeholder="Password"></input>
          </div>
          <div>
            <RegisterButton onRegisterClick={this.props.changeState} />
            <LoginButton onLoginClick={this.handleLogin} />
          </div>
      </div>
    );
  }
}

export default Login