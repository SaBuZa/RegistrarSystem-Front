import React, { Component } from 'react';
import ViewPanel from '../ViewPanel';

export default class StudentPanel extends Component {

    render(){
        return (
            <div>
            <div> Menu Page (Student) </div>
            <div><button onClick={() =>{ ViewPanel.changeState({page:'RegisterCourse'})}}>ลงทะเบียนรายวิชา</button></div>
            <div><button>เพิ่ม ลด ถอน รายวิชา</button></div>
            <div><button>ดูเกรดรายวิชา</button></div>
            <div><button>ขอ Transcript</button></div>
            <div><button>ขอใบรับรองต่างๆ</button></div>
            <div><button>ขอจบการศึกษา</button></div>
            <div><button>ตรวจสอบผลการลงทะเบียน</button></div>
            <div><button onClick={() => ViewPanel.changeState({page:'SearchCourse'})}>ค้นหารายวิชา</button></div>
            </div>
        );
    }



}