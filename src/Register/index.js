import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    
    state = {
        pageNum : 1,
        mode: 'Student',
        username: 'Username',
        password: 'Password',
        name: 'Name',
        surname: 'Surname',
        birthday: 'Birthday',
        sex: 'Sex',
        national_id: 'National ID',
        email: 'E-mail',
        phone_no: "Phone No.",
        street: "Street ",
        sub_district: "Sub District ",
        district: "District ",
        province: "Province ",
        postal_code: "Postal Code "
    };
    onSubmit = () => {
        /*axios.get('http://localhost:3000/studentinfo?userid=0').then((res) => {
            console.log(res);
        })
        */

        /*
        axios.post('http://localhost:3000/main',{
            id : this.state.username,
            password : this.state.password,
            usertype : this.state.mode
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
        */
    }

    onClick = () => {
       let input =  this.state;
       if (this.state.pageNum === 3){
            console.log("Finish !");    
            this.onSubmit();
        }else{
            this.setState({pageNum : this.state.pageNum + 1});
        }
    }

    onChangeInput = (event, inputType) => {
        let input = this.state;
        input[inputType] = event.target.value;
        this.setState(input); 
    }



  render() {
    if (this.state.pageNum === 1){
        return (
            <div>
            <div>Username <input  value={this.state.username} onChange={(event) => this.onChangeInput(event, 'username')}/></div>
            <div>Password <input type="password" value={this.state.password} onChange={(event) => this.onChangeInput(event, 'password')}/></div>
            <div>Name <input  value={this.state.name} onChange={(event) => this.onChangeInput(event, "name")}/></div>
            <div>Surname <input  value={this.state.surname} onChange={(event) => this.onChangeInput(event, "surname")}/></div>
            <div>Birthday <input  value={this.state.birthday} onChange={(event) => this.onChangeInput(event, "birthday")}/></div>
            <div>Sex <input  value={this.state.sex} onChange={(event) => this.onChangeInput(event, "sex")}/></div>
            <div>National ID <input  value={this.state.national_id} onChange={(event) => this.onChangeInput(event, "national_id")}/></div>
            <div>Email <input  value={this.state.email} onChange={(event) => this.onChangeInput(event, "email")}/></div>
            <div><button className="btn btn-default" onClick={() => this.onClick()}>Next</button></div>
            </div>
        );
    }else if (this.state.pageNum === 2){
        return (
            <div>
            <div>Number <input  value={this.state.phone_no} onChange={(event) => this.onChangeInput(event, "phone_no")}/></div>
            <div>Street <input value={this.state.street} onChange={(event) => this.onChangeInput(event, "street")}/></div>
            <div>SubDistrict <input  value={this.state.sub_district} onChange={(event) => this.onChangeInput(event, "sub_district")}/></div>
            <div>District <input  value={this.state.district} onChange={(event) => this.onChangeInput(event, "district")}/></div>
            <div>Province <input  value={this.state.province} onChange={(event) => this.onChangeInput(event, "province")}/></div>
            <div>Postal Code <input  value={this.state.postal_code} onChange={(event) => this.onChangeInput(event, "postal_code")}/></div>
            <div><button className="btn btn-default" onClick={() => this.onClick()}>Next</button></div>
            </div>
        );
    }else if (this.state.pageNum === 3){
        return (
            <div>
            <div>Username <input  value={this.state.username} onChange={(event) => this.onChangeInput(event, 'username')}/></div>
            <div>Password <input type="password" value={this.state.password} onChange={(event) => this.onChangeInput(event, 'password')}/></div>
            <div>Name <input  value={this.state.name} onChange={(event) => this.onChangeInput(event, "name")}/></div>
            <div>Surname <input  value={this.state.surname} onChange={(event) => this.onChangeInput(event, "surname")}/></div>
            <div>Birthday <input  value={this.state.birthday} onChange={(event) => this.onChangeInput(event, "birthday")}/></div>
            <div>Sex <input  value={this.state.sex} onChange={(event) => this.onChangeInput(event, "sex")}/></div>
            <div>National ID <input  value={this.state.national_id} onChange={(event) => this.onChangeInput(event, "national_id")}/></div>
            <div>Email <input  value={this.state.email} onChange={(event) => this.onChangeInput(event, "email")}/></div>
            <div>Number <input  value={this.state.phone_no} onChange={(event) => this.onChangeInput(event, "phone_no")}/></div>
            <div>Street <input value={this.state.street} onChange={(event) => this.onChangeInput(event, "street")}/></div>
            <div>SubDistrict <input  value={this.state.sub_district} onChange={(event) => this.onChangeInput(event, "sub_district")}/></div>
            <div>District <input  value={this.state.district} onChange={(event) => this.onChangeInput(event, "district")}/></div>
            <div>Province <input  value={this.state.province} onChange={(event) => this.onChangeInput(event, "province")}/></div>
            <div>Postal Code <input  value={this.state.postal_code} onChange={(event) => this.onChangeInput(event, "postal_code")}/></div>
            <div><button className="btn btn-warning" onClick={() => this.onSubmit()}>Confirm</button></div>
            </div>
        );
    }
  }
}

export default Register