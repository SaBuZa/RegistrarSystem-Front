import React, {Component} from 'react';

export default class SubmitButton extends Component{



    render(){
        return (
            <button className='btn btn-primary' onClick={this.props.onSubmit}>
                Submit
            </button>
        );

    }

}