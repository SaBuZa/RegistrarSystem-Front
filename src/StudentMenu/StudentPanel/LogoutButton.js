import React, { Component } from 'react';
import { BrowserRouter,Redirect } from 'react-router-dom';

import axios from 'axios';

class LogoutButton extends Component {

    state = {
        redirect : false
    };

    handleLogout = () => {
        
        axios.post('/logout',{
            logout : true
        })
        .then((res) => {
            if (res.data['logoutSuccess'] ===  true){
                this.props.changePage({page:'Login'});
                return ;
                //this.setState({redirect : true});
            }else{
                console.log("Logout Failed !");
                return ;
            }
        })
        .catch((err) => {
            console.log(err);
        });
        
            
    }

    render() {
        /*if (this.state.redirect){
            this.props.changePage({page:'Login'});
            //console.log("Logout Success ! Redirect to Login Page !");
        } */
        return (
            <button className="btn btn-danger" onClick={this.handleLogout}>
            Logout
            </button>
        );
        
    }


}

export default LogoutButton;