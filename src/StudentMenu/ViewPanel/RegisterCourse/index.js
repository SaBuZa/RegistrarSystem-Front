import React, { Component } from 'react';
import CourseIDInput from './CourseIDInput';

export default class RegisterCourse extends Component {
    
    state = {
        course_id1 : '',
        section1 : '',
        course_id2 : '',
        section2 : ''
    }

    onInputChange = (event,_state) => {
        let input = this.state;
        input[_state] = event.target.value;
        this.setState(input);
        //let myState = _state;
        //this.setState({ : event.target.value});
        //this.setState((prevState,props) => {{_state} : _state});
    }

    render() {
        return (
            <div>
            <div>ลงทะเบียนรายวิชา</div>
            <div> Course ID &emsp; Section </div>
            <div><CourseIDInput value={this.state.course_id1} OnCourseID={(event) => this.onInputChange(event, 'course_id1')}/></div>
            
            </div>




        )
    }
}