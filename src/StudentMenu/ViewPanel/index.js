import React, { Component } from 'react';
import RegisterCourse from './RegisterCourse';
import SearchCourse from './SearchCourse';

export default class ViewPanel extends Component {
    state = { page : ''};

    changeState = (props) => {
        this.setState({
          'page' : props.page
        });
    }

    render(){
        console.log (this.state.page);
        if (this.state.page === 'RegisterCourse'){
            return (
                <RegisterCourse />
            )
        }else if (this.state.page === 'SearchCourse'){
            return (
                <SearchCourse />
            )
        }else{
            return (
                <div>
                "DA HELL"
                </div>
            );
        }
    }


}