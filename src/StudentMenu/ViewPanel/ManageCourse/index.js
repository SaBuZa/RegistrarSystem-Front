import React, { Component } from 'react';
import axios from 'axios';

import CourseInfoTable from './CourseInfoTable';
import CourseManager from './CourseManager';

export default class ManageCourse extends Component {

    state = {
        data : null
    }

    componentDidMount = () =>{
        this.queryInfo();
    }


    onQueried = (res) => {
        this.setState({data:res});
    }
    
    queryInfo = () => {
        var qstring = '/viewregistercurrent';
        axios.get(qstring)
        .then((res) => {
            this.onQueried(res);
        });
    }

    render() {
        return (
            <div>
            <div>ลด ถอน รายวิชา</div>
            <CourseInfoTable data={this.state.data}/>
            <CourseManager />
            </div>




        )
    }
}