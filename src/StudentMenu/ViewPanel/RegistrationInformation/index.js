import React, { Component } from 'react';
import axios from 'axios';

import RegisteredCourseTable from './RegisteredCourseTable';

export default class RegistrationInformation extends Component {

    state = {
        courseID : '',
        courseName : '',
        year : '',
        semNo: '',
        data : null
    }

    componentDidMount = () =>{
        this.queryInfo();
    }

    onQueried = (res) => {
        this.setState({data:res});
    }
    
    queryInfo = () => {
        var qstring = '/viewregister';
        axios.get(qstring)
        .then((res) => {
            this.onQueried(res);
        });
    }

    render() {
        return (
            <div>
                <div>ตรวจสอบผลการลงทะเบียน</div>
                <RegisteredCourseTable data={this.state.data}/>
                
            </div>




        )
    }
}