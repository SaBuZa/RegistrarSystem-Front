import React, {Component} from 'react';

class SectionInput extends Component {
    
    render(){
        return (
            <input value={this.props.value} onChange={this.props.onSectionChange} />
        );
    }

}

export default SectionInput;
