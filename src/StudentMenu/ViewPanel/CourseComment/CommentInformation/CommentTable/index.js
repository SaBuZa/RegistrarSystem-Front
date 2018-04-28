import React, { Component } from 'react';

export default class CommentTable extends Component {

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
                                <th>Credit</th>
                                <th>Year</th>
                                <th>SemesterNo</th>
                                <th>ProgramCode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myData.map(row => (
                                    <tr>
                                        <td>{row.CourseID}</td>
                                        <td>{row.CourseName}</td>
                                        <td>{row.Credit}</td>
                                        <td>{row.Year}</td>
                                        <td>{row.SemesterNo}</td>
                                        <td>{row.ProgramCode}</td>
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