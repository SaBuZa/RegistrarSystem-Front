import React, { Component } from 'react';

import LogoutButton from './LogoutButton';

export default class StudentPanel extends Component {

    render(){
        return (
            <div>
            <div> Menu Page (Student) </div>
            <div><button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'StudentInformation'})}}>ข้อมูลนักศึกษา</button></div>
            <div><button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'RegisterCourse'})}}>ลงทะเบียนรายวิชา</button></div>
            <div><button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'ManageCourse'})}}>เพิ่ม ลด ถอน รายวิชา</button></div>
            <div><button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'ClassInformation'})}}>ดูตารางเรียน</button></div>
            <div><button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'ExamInformation'})}}>ดูตารางสอบ</button></div>
            <div><button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'GradeInformation'})}}>ดูเกรดรายวิชา</button></div>
            <div><button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'TranscriptRequest'})}}>ขอ Transcript</button></div>
            <div><button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'DocumentRequest'})}}>ขอใบรับรองต่างๆ</button></div>
            <div><button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'RegistrationInformation'})}}>ตรวจสอบผลการลงทะเบียน</button></div>
            <div><button className="btn btn-default" onClick={ () => this.props.changeState({page:'SearchCourse'})}>ค้นหารายวิชา</button></div>
            <LogoutButton changePage={this.props.changePage} />
            </div>
        );
    }



}