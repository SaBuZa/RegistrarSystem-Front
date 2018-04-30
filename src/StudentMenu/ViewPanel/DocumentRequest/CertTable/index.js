import React, { Component } from 'react';

export default class CourseInfoTable extends Component {

    render() {
        
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
                                        <div>Certificate : {row.Cname}</div>
                                        <div>Issued Date : {row.issuedDate}</div>
                                        <div>Faculty : {row.Fcode}</div>
                                        <div>Student ID : {row.StudentID}</div>
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