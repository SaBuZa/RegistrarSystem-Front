import React, { Component } from 'react';
import axios from 'axios';
import CourseIDInput from './CourseIDInput';
import SectionInput from './SectionInput';
import SubmitButton from './SubmitButton';

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
        console.log(this.state);
        //console.log(event);
    }

    handleSubmit = () => {

        axios.post('/register',{
            CourseID : this.state.course_id1,
            SecNo : this.state.section1
        })
        .then((res) => {
            /*if (res.data['success'] ===  true){
                console.log("Register course successfully !");
                console.log(res.data);
                return ;
            }else{
                console.log("Register course : Failed !");
                return ;
            }*/
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });

    }

    render() {
        return (
            <div>
            <div>ลงทะเบียนรายวิชา</div>
            <div> Course ID &emsp; Section </div>
            <div><CourseIDInput value={this.state.course_id1} onCourseID={(event) => this.onInputChange(event, 'course_id1')}/> <SectionInput value={this.state.section1} onSectionChange={(event) => {this.onInputChange(event, 'section1')}} /> </div>
            <div><SubmitButton onSubmit={this.handleSubmit}/></div>
            </div>




        )
    }
}