import React, { Component } from 'react';

export default class CourseInfoTable extends Component {

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
                                <th>Year</th>
                                <th>SemesterNo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myData.map(row => (
                                    <tr>
                                        <td>{row.CourseID}</td>
                                        <td>{row.CourseName}</td>
                                        <td>{row.SecNo}</td>
                                        <td>{row.Year}</td>
                                        <td>{row.SemesterNo}</td>
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