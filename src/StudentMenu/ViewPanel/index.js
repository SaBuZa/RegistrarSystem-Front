import React, { Component } from 'react';
import RegisterCourse from './RegisterCourse';
import ManageCourse from './ManageCourse';
import GradeInformation from './GradeInformation';
import TranscriptRequest from './TranscriptRequest';
import DocumentRequest from './DocumentRequest';
import GraduationRequest from './GraduationRequest';
import RegistrationInformation from './RegistrationInformation';
import SearchCourse from './SearchCourse';

export default class ViewPanel extends Component {

    render(){
        console.log (this.props.currentPage);
        if (this.props.currentPage === 'RegisterCourse'){
            return (
                <RegisterCourse />
            )
        }else if (this.props.currentPage === 'ManageCourse'){
            return (
                <ManageCourse />
            )
        }else if (this.props.currentPage === 'GradeInformation'){
            return (
                <GradeInformation />
            )
        }else if (this.props.currentPage === 'TranscriptRequest'){
            return (
                <TranscriptRequest />
            )
        }else if (this.props.currentPage === 'DocumentRequest'){
            return (
                <DocumentRequest />
            )
        }else if (this.props.currentPage === 'GraduationRequest'){
            return (
                <GraduationRequest />
            )
        }else if (this.props.currentPage === 'RegistrationInformation'){
            return (
                <RegistrationInformation />
            )
        }else if (this.props.currentPage === 'SearchCourse'){
            return (
                <SearchCourse />
            )
        }else{
            return (
                <div>
                "NANI ?"
                </div>
            );
        }
    }


}