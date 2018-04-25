import React, { Component } from 'react';

export default class CourseTable extends Component {

    render() {
        
        if (this.props.data === null){
            return null;
        }else{
            let myData = this.props.data.data;
            console.log(myData);
            let row = myData[0];
            
            return (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ข้อมูลนักศึกษา</th>
                            </tr>
                        </thead>
                        <tbody>
                                        <tr>
                                            <th>StudentID : </th>
                                            <td>{row.StudentID}</td>
                                        </tr>
                                        <tr>
                                            <th>Title : </th>
                                            <td>{row.Title}</td>
                                        </tr>
                                        <tr>
                                            <th>FirstName : </th>
                                            <td>{row.FirstName}</td>
                                        </tr>
                                        <tr>
                                            <th>LastName : </th>
                                            <td>{row.LastName}</td>
                                        </tr>
                                        <tr>
                                            <th>Sex : </th>
                                            <td>{row.Sex}</td>
                                        </tr>
                                        <tr>
                                            <th>Birthday : </th>
                                            <td>{row.Bdate}</td>
                                        </tr>
                                        <tr>
                                            <th>E-mail : </th>
                                            <td>{row.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Faculty : </th>
                                            <td>{row.Fname}</td>
                                        </tr>
                                        <tr>
                                            <th>Department : </th>
                                            <td>{row.Dname}</td>
                                        </tr>
                                        <tr>
                                            <th>Tel : </th>
                                            <td>{row.Number}</td>
                                        </tr>
                                        <tr>
                                            <th>Address : </th>
                                            <td>{row.Street}</td>
                                        </tr>
                                        <tr>
                                            <th>District : </th>
                                            <td>{row.SubDistrict}</td>
                                        </tr>
                                        <tr>
                                            <th>Province : </th>
                                            <td>{row.Province}</td>
                                        </tr>
                                        <tr>
                                            <th>Postal Code : </th>
                                            <td>{row.PostalCode}</td>
                                        </tr>       
                        </tbody>
                    </table>
                </div>



            );
        }
    }
}