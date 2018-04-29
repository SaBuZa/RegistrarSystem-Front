import React, { Component } from 'react';
import axios from 'axios';

import ExamTimetable from './ExamTimetable';

export default class ExamInfo extends Component{
    state = {
        courseID : '',
        data : null
    }

    componentDidMount = () => {
        this.onSubmit();

    }
    onQueried = (res) => {
        this.setState({data:res});
    }

    onSubmit = () => {
       var qstring = '/examtime';
        console.log(qstring);
       axios.get(qstring).then((res) => {
        //console.log(res);
            this.onQueried(res);
        })
    }

    render(){
        return (
            <div>
                <div> ตารางสอบ </div>

                <ExamTimetable data={this.state.data}/>
            </div>
        )

    }



}