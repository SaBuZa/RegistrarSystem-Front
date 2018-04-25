import React, { Component } from 'react';
import axios from 'axios';

import InfoTable from './InfoTable';

export default class SearchCourse extends Component{
    state = {
        data : null
    }

    componentDidMount = () => {
        this.onSubmit();

    }

    onQueried = (res) => {
        this.setState({data:res});
    }

    onSubmit = () => {
       var qstring = '/studentinfo';
        
       axios.get(qstring).then((res) => {
            this.onQueried(res);
        })
    }
   
    /*
    <div> <input id="courseIDsearchBox" type="text" onChange={(event) => {this.setState({courseID : event.target.value})}} placeholder="Search . . ." /> </div>
    <button className="btn btn-success" onClick={this.onSubmit}>Search</button>
    */

    render(){
        return (
            <div>
                <InfoTable data={this.state.data}/>
            </div>
        )
    }


}