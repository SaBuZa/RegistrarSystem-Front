import React, { Component } from 'react';
import axios from 'axios';

import CommentInformation from './CommentInformation';
import CommentManager from './CommentManager';

export default class CourseComment extends Component {

    render() {
        return (
            <div>
            <div>ประเมินรายวิชา</div>
            <CommentInformation />
            <CommentManager />
            </div>




        )
    }
}