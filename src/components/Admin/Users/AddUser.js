import React,{Component} from 'react';
import {useHistory} from "react-router-dom";
import {  Redirect, Route, Link } from 'react-router-dom';
import {FaSpinner} from  "react-icons/fa";
import Pop from './Popup'
import { Table, Button, Alert } from 'react-bootstrap';

class AddUser extends Component {
   
    constructor(props){
        super(props)
      
        let isLoading=true;
        this.state = {
            credentials :{email:'',user_name:'',company:'',password:''},
            token: localStorage.getItem('token'),
            IsUserAdded: false
         }
      
    }
    addUser = event => {
        console.log(this.state.credentials);
        this.setState({isLoading:true })
         fetch('http://127.0.0.1:8000/api/register/', {
           method: 'POST',
           headers: {'Content-Type': 'application/json',
           Authorization: "Bearer " + this.state.token},
           body: JSON.stringify(this.state.credentials)
         })
         .then( data => data.json())
         .then(
           data => {
             console.log(data.data);
             if(data.data == 'ok_message')
             this.setState({
                IsUserAdded: true,
                isLoading: false
              });
           }
         )
         .catch( error => console.error(error))
       }
     inputChanged = event=> {
         const cred = this.state.credentials;
         cred[event.target.name] = event.target.value;
         this.setState({credentials:cred});
     }
 
    
    render()
    {
       
   
        return (
       <div className = "AddClientBox">
             {this.state.IsUserAdded && <div className="alertBox"><br /><Alert variant="success">Added Successfully </Alert></div>}
       
          <div className="row">
         <div className="col-md-12 col-sm-12">

         <h3 className="font-weight-bold">Add New Client</h3>
                 
            <div className="machine-form">
               {/* <form> */}
               <div className="form-group">
                     <label>Email </label>
                     <input type="text"  name= "email" className="form-control" placeholder="User Name" value = {this.state.credentials.email} onChange = {this.inputChanged}/>
                  </div>
                  <div className="form-group">
                     <label>full name </label>
                     <input type="text"  name= "user_name" className="form-control" placeholder="User Name" value = {this.state.credentials.user_name} onChange = {this.inputChanged}/>
                  </div>
                  <div className="form-group">
                     <label>Company</label>
                     <input type="text"  name= "company" className="form-control" placeholder="User Name" value = {this.state.credentials.company} onChange = {this.inputChanged}/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" name= "password"  className="form-control" placeholder="Password" value = {this.state.credentials.password} onChange = {this.inputChanged}/>
                  </div>
            
                  <button type="submit" className="btn btn-black" onClick = {this.addUser} >
                    {this.state.isLoading &&  <FaSpinner></FaSpinner> }
                    &nbsp;
                    Add User</button>
                 
                    {/* <Pop new={this.state.IsUserAdded} /> */}
                  {/* <button onClick={this.addMachine} href="#"  type="button" className="btn btn-black">
                                        Add Machine
                                      </button> */}

                  {/* <Link to = "/login" className="login-btn">Login </Link> */}
               {/* </form> */}
            </div>
         </div>
      </div>


      
          </div>
          );
    }
 
}

export default AddUser;





