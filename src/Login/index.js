import React, { Component } from 'react';
import RegisterButton from './RegisterButton';
import LoginButton from './LoginButton';
import LoginTypeRadio from  './LoginTypeRadio';

class Login extends Component {
  
  state = {
    selectedType : "None"
  }

  onLoginTypeChange = (props) => {
    this.setState({selectedType : props.selectedType})
    //console.log(props.selectedType);
  }

  render() {
    //console.log(this.state.selectedType);
    return (
      <div>

        <form>
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
          <LoginButton onLoginClick={this.props.changeState} selectedType={this.state.selectedType}/>
          </div>
        </form>
      </div>
    );
  }
}

export default Login