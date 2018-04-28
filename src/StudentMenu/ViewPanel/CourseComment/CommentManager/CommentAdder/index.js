import React, { Component } from 'react';
import axios from 'axios';

export default class CommentAdder extends Component {

    state = {
        courseID : '',
        secNo : '',
        commentText : '',
        courseRating : '',
        instructorRating : '',
        data : null
    }

    onQueried = (res) => {
        this.setState({data:res});
    }

    onSubmit = () => {
       var qstring = '/commentadd?';

        console.log(qstring);
       axios.get(qstring).then((res) => {
        //console.log(res);
            this.onQueried(res);
        })
    }

    render() {
        return (
            <div>
                <div> <input id="courseIDInputBox" type="text" onChange={(event) => {this.setState({courseID : event.target.value})}} placeholder="Couse ID . . ." /> </div>
                <div> <input id="courseNameInputBox" type="text" onChange={(event) => {this.setState({CourseName : event.target.value})}} placeholder="Course Name . . ." /> </div>
                <div> <input id="secNoInputBox" type="text" onChange={(event) => {this.setState({secNo:event.target.value})}} placeholder="Sec No . . ."/></div>
                <div> <input id="commentInputBox" type="text" className="form-control" onChange={(event) => {this.setState({commentText:event.target.value})}} placeholder="Comment . . ."/> </div>
                <button className="btn btn-success" onClick={this.onSubmit}>บันทึกการประเมิน</button>
            </div>




        )
    }
}