import React, {Component} from 'react';


export default class ExamTimetable extends Component{
    render(){

        if (this.props.data === null){
            return null;
        }else{
            let myData = this.props.data.data;
          
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
                                        <div>Course Name : {row.CourseName}</div>
                                        <div>Date : {row.date}</div>
                                        <div>Time : {row.startTime} - {row.endTime}</div>
                                        <div>Building : {row.Bcode} </div>
                                        <div>Floor : {row.Floor} </div>
                                        <div>Room : {row.RoomNo} </div>
                                        <div>Exam Type : {row.Type} </div>
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