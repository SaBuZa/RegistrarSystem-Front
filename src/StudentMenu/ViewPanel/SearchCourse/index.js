import React, { Component } from 'react';
import axios from 'axios';

import CourseTable from './CourseTable';

export default class SearchCourse extends Component{
    state = {
        courseID : '',
        year : '',
        semNo: '',
        data : null
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
       qstring = qstring + '&year=' + this.state.year;
       qstring = qstring + '&semNo=' + this.state.semNo;

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
                <div> <input id="courseIDSearchBox" type="text" onChange={(event) => {this.setState({courseID : event.target.value})}} placeholder="Couse ID . . ." /> </div>
                <div> <input id="yearSearchBox" type="text" onChange={(event) => {this.setState({year : event.target.value})}} placeholder="Year . . ." /> </div>
                <div> <input id="semNoSearchBox" type="text" onChange={(event) => {this.setState({semNo : event.target.value})}} placeholder="Semester . . ." /> </div>
                <button className="btn btn-success" onClick={this.onSubmit}>Search</button>

                <CourseTable data={this.state.data}/>
            </div>
        )

    }


}