import React, { Component } from 'react';

export default class CourseTable extends Component {

    render() {
        
        if (this.props.data === null){
            return null;
        }else{
            let myData = this.props.data.data;
            
            return (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>CourseID</th>
                                <th>CourseName</th>
                                <th>Section</th>
                                <th>Time</th>
                                <th>Building</th>
                                <th>Floor</th>
                                <th>Room</th>
                                <th>Student</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myData.map(row => (
                                    <tr>
                                        <td>{row.CourseID}</td>
                                        <td>{row.CourseName}</td>
                                        <td>{row.SecNo}</td>
                                        <td>{row.startTime} - {row.endTime}</td>
                                        <td>{row.Bcode}</td>
                                        <td>{row.Floor}</td>
                                        <td>{row.RoomNo}</td>
                                        <td>{row.registeredStudent}/{row.MaxStudent}</td>
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