import React, { Component } from 'react';

export default class LoginTypeRadio extends Component {
    
    state = {
        selectedType : "None"
    };

    handleTypeChange = (e) => {
        var tmp = e.target.value;
        this.setState((prevState,props) => ({
          selectedType : tmp
        }));
        this.props.onTypeChange({selectedType:tmp});
    }

    render(){
        //console.log(this.state.selectedType);
        //this.props.loginType = this.state.selectedType;
        //console.log(this.loginType);

        return (
            <div>
                <div className="radio-inline">
                <label><input type="radio" name="typeRadio" value="StudentChosen" onChange={this.handleTypeChange} />Student</label>
                </div>
                <div className="radio-inline">
                <label><input type="radio" name="typeRadio" value="TeacherChosen" onChange={this.handleTypeChange} />Teacher</label>
                </div>
            </div>
            
        );
    }
}