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
                                <th>Section</th>
                                <th>Instructor ID</th>
                                <th>Title</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myData.map(row => (
                                    <tr>
                                        <td>{row.CourseID}</td>
                                        <td>{row.CourseName}</td>
                                        <td>{row.SecNo}</td>
                                        <td>{row.InstID}</td>
                                        <td>{row.Title}</td>
                                        <td>{row.FirstName}</td>
                                        <td>{row.LastName}</td>
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