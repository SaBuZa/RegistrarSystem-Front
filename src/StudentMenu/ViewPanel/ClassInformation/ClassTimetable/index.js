import React, { Component } from 'react';

export default class ClassTimetable extends Component {

    dayMap = ['','SUN','MON','TUE','WED','THU','FRI','SAT'];

    render() {
        
        if (this.props.data === null){
            return null;
        }else{
            let myData = this.props.data.data;
            /*
            return (
                <div className=".table-bordered">
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            {
                                myData.map(row => (
                                    <tr>
                                        <div>Course ID : {row.CourseID}</div>
                                        <div>Section : {row.SecNo}</div>
                                        <div>Day : {row.day}</div>
                                        <div>Time : {row.startTime} - {row.endTime}</div>
                                        <div>Building : {row.Bcode} </div>
                                        <div>Floor : {row.Floor} </div>
                                        <div>Room : {row.RoomNo} </div>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            );*/
            return (
                <div className="container">
                    <table className="table table-bordered">
                        <thead>
                        </thead>
                        <tbody>
                            {

                                myData.map(row => (
                                    <tr>
                                        <td>
                                        <div>Course ID : {row.CourseID}</div>
                                        <div>Section : {row.SecNo}</div>
                                        <div>Day : {this.dayMap[row.day]}</div>
                                        <div>Time : {row.startTime} - {row.endTime}</div>
                                        <div>Building : {row.Bcode} </div>
                                        <div>Floor : {row.Floor} </div>
                                        <div>Room : {row.RoomNo} </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            );

        }
    }
}