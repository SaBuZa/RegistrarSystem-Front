import React, { Component } from 'react';

export default class RegisterCourse extends Component {
    
    state = {
        course_id1 : '',
        section1 : ''
    }

    onInputChange = (event,_state) => {
        //this.setState((prevState,props) => {{_state} : _state});
    }

    render() {
        return (
            <div>
            <div>ลงทะเบียนรายวิชา</div>
            <div> Course ID &emsp; Section </div>
            <div><CourseIDInput value={this.state.course_id1} OnCourseID={(event) => this.onInputChange(event, 'course_id')}/></div>
            
            </div>




        )
    }
}