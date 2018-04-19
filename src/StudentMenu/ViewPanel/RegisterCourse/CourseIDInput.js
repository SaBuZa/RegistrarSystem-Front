import React, {Component} from 'react';

class CourseIDInput extends Component{
    render(){
        <input  value={this.state.course_id1} onChange={(event) => this.onChangeInput(event, 'course_id')}/>

    }
}

export default CourseIDInput;