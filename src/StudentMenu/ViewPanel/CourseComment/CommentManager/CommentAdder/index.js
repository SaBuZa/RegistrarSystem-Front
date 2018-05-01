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
       var qstring = '/commentadd';
       axios.post(qstring,{
        CourseID : this.state.courseID,
        SecNo : this.state.secNo,
        commentText : this.state.commentText,
        cRate : this.state.courseRating,
        iRate : this.state.instructorRating
      }).then((res) => {
        //console.log(res);
            this.onQueried(res);
            window.alert("Comment Success !");
        })
    }

    render() {
        return (
            <div>
                <div> <input id="courseIDInputBox" type="text" onChange={(event) => {this.setState({courseID : event.target.value})}} placeholder="Couse ID . . ." /> </div>
                <div> <input id="secNoInputBox" type="text" onChange={(event) => {this.setState({secNo:event.target.value})}} placeholder="Sec No . . ."/></div>
                <div> <input id="commentInputBox" type="text" className="form-control" onChange={(event) => {this.setState({commentText:event.target.value})}} placeholder="Comment . . ."/> </div>
                <div> <input id="courseRatingBox" type="text" onChange={(event) => {this.setState({courseRating:event.target.value})}} placeholder="Course Rating . . ."/> </div>
                <div> <input id="instructorRatingBox" type="text" onChange={(event) => {this.setState({instructorRating:event.target.value})}} placeholder="Instructor Rating . . ."/> </div>
                <button className="btn btn-success" onClick={this.onSubmit}>บันทึกการประเมิน</button>
            </div>




        )
    }
}