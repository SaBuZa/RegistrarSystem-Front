import React, { Component } from 'react';

export default class LoginTypeRadio extends Component {
    
    state = {
        selectedType : "Student"
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
                <label><input type="radio" name="typeRadio" value="Student" checked={this.state.selectedType==="Student"} onChange={this.handleTypeChange} />Student</label>
                </div>
                <div className="radio-inline">
                <label><input type="radio" name="typeRadio" value="Teacher" checked={this.state.selectedType==="Teacher"} onChange={this.handleTypeChange} />Teacher</label>
                </div>
            </div>
            
        );
    }
}