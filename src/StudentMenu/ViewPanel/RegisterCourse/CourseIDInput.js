import React, {Component} from 'react';

class CourseIDInput extends Component{
    render(){
        return (
            <input value={this.props.value} onChange={this.props.onCourseID} />
        );
    }
}

export default CourseIDInput;