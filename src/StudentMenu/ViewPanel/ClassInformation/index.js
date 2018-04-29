import React, { Component } from 'react';
import axios from 'axios';

import ClassTimetable from './ClassTimetable';

export default class ClassInformation extends Component{
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
       var qstring = '/classtime';
        console.log(qstring);
       axios.get(qstring).then((res) => {
        //console.log(res);
            this.onQueried(res);
        })
    }

    render(){
        return (
            <div>
                <div> ตารางเรียน </div>

                <ClassTimetable data={this.state.data}/>
            </div>
        )

    }


}