import React, { Component } from 'react';
import RegisterButton from './RegisterButton';
import LoginButton from './LoginButton';

class Login extends Component {
  render() {
    return (
      <div>

        <form>
          <div><label for="usr">Login</label></div>
          <div className="radio-inline">
          <label><input type="radio" name="optradio" />Student</label>
          </div>
          <div className="radio-inline">
            <label><input type="radio" name="optradio" />Teacher</label>
          </div>

          <div className="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
          <input id="username" type="text" class="form-control" name="Username" placeholder="Username"></input>
          </div>
          <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
          <input id="password" type="password" class="form-control" name="password" placeholder="Password"></input>
          </div>
          <div>
          <RegisterButton onRegisterClick={this.props.changeState} />
          <LoginButton onLoginClick={this.props.changeState} />
          </div>
        </form>
      </div>
    );
  }
}

export default Login