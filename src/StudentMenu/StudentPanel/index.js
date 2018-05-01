import React, { Component } from 'react';

import LogoutButton from './LogoutButton';

import "./StudentPanel.css"

export default class StudentPanel extends Component {
    
    //<div><button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'TranscriptRequest'})}}>ขอ Transcript</button></div>
    //<button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'GradeInformation'})}}>ดูเกรดรายวิชา</button>
    render(){
        return (
            <div className="panel-background">
            <div className="btn-group-vertical btn-group-sm">
            <div> Menu Page (Student) </div>
                <button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'StudentInformation'})}}>ข้อมูลนักศึกษา</button>
                <button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'RegisterCourse'})}}>ลงทะเบียนรายวิชา</button>
                <button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'ManageCourse'})}}>ลด ถอน รายวิชา</button>
                <button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'ClassInformation'})}}>ดูตารางเรียน</button>
                <button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'ExamInformation'})}}>ดูตารางสอบ</button>
                <button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'DocumentRequest'})}}>ขอใบรับรอง</button>
                <button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'RegistrationInformation'})}}>ตรวจสอบผลการลงทะเบียน</button>
                <button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'CourseComment'})}}>ประเมินรายวิชา</button>
                <button className="btn btn-default" onClick={ () => this.props.changeState({page:'SearchCourse'})}>ค้นหารายวิชา</button>
                <LogoutButton changePage={this.props.changePage} />
            </div>
            </div>
        );
    }



}