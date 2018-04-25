import React, { Component } from 'react';
import axios from 'axios';

import CourseTable from './CourseTable';

export default class SearchCourse extends Component{
    state = {
        courseID : '',
        data : null
    }

    onChangeInput = (event, inputName) => {



    }

    onQueried = (res) => {
        //console.log(JSON.parse(res));
        this.setState({data:res});
    }

    onSubmit = () => {
        /*axios.get('http://localhost:3000/studentinfo?userid=0').then((res) => {
            console.log(res);
        })
        */
       var qstring = '/courseinfo?course_id=';
       qstring = qstring + this.state.courseID;
        console.log(qstring);
       axios.get(qstring).then((res) => {
        //console.log(res);
            this.onQueried(res);
        })
    }

    render(){
        return (
            <div>
                <div> ค้นหารายวิชา </div>
                <div> <input id="courseIDsearchBox" type="text" onChange={(event) => {this.setState({courseID : event.target.value})}} placeholder="Search . . ." /> </div>
                <button className="btn btn-success" onClick={this.onSubmit}>Search</button>

                <CourseTable data={this.state.data}/>
            </div>
        )

    }


}