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

    onQueried = (res) => {
        this.setState({data:res});
    }

    onSubmit = () => {
       var qstring = '/viewregister';

        console.log(qstring);
       axios.get(qstring).then((res) => {
        //console.log(res);
            this.onQueried(res);
        })
    }

    render() {
        return (
            <div>
                <div>ตรวจสอบผลการลงทะเบียน</div>
                <div> Course ID &emsp; Section </div>

                <RegisteredCourseTable data={this.state.data}/>
                
            </div>




        )
    }
}