import React, { Component } from 'react';
import axios from 'axios';

export default class CourseManager extends Component {

    state = {
        courseID : '',
        data : null
    }

    onQueried = (res) => {
        this.setState({data:res});
    }

    onSubmit = () => {
       var qstring = '/drop?';
        qstring = qstring + 'course_id=' + this.state.courseID;
        console.log(qstring);
       axios.get(qstring).then((res) => {
        //console.log(res);
            this.onQueried(res);
        })
    }

    render() {
        return (
            <div>
                <div> <input id="courseIDInputBox" type="text" onChange={(event) => {this.setState({courseID : event.target.value})}} placeholder="Couse ID . . ." /> </div>
                <button className="btn btn-success" onClick={this.onSubmit}>ลดรายวิชา</button>
            </div>




        )
    }
}