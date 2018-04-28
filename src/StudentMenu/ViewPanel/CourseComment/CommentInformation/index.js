import React, { Component } from 'react';
import axios from 'axios';

import CommentTable from './CommentTable';

export default class CommentInformation extends Component {

    state = {
        data : null
    }

    componentDidMount = () =>{
        this.queryInfo();
    }


    onQueried = (res) => {
        this.setState({data:res});
    }
    
    queryInfo = () => {
        var qstring = '/commentlist';
        axios.get(qstring)
        .then((res) => {
            this.onQueried(res);
        });
    }

    render() {
        return (
            <div>
            <div>รายวิชาที่ต้องประเมิน</div>
            <CommentTable data={this.state.data}/>
            </div>




        )
    }
}