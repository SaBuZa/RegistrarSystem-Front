import React, { Component } from 'react';
import axios from 'axios';

export default class SearchCourse extends Component{

    onSubmit = () => {
        /*axios.get('http://localhost:3000/studentinfo?userid=0').then((res) => {
            console.log(res);
        })
        */
       axios.get('http://localhost:3000/studentinfo?userid=0').then((res) => {
        console.log(res);
        })
    }

    render(){
        return (
            <div>
                <div> ค้นหารายวิชา </div>
                <div> <input type="text" placeholder="Search . . ." /> </div>
                <button className="btn btn-default" onClick={this.onSubmit()} >Search</button>
            </div>
        )

    }


}