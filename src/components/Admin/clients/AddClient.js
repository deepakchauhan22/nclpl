import React,{Component} from 'react';
import {useHistory} from "react-router-dom";
import {  Redirect, Route, Link } from 'react-router-dom';
import { Container, Button, Alert } from 'react-bootstrap';

import {FaSpinner} from  "react-icons/fa";

class AddClient extends Component {
   
    constructor(props){
        super(props)
        let IsAdded= false;
        let  isLoading=true;
        this.state = {
            credentials :{company_name:''}
            ,token: localStorage.getItem('token'),
        }
    }
    addClient = event => {
        console.log(this.state.credentials);
        this.setState({isLoading:true })
         fetch('http://127.0.0.1:8000/api/company/create/', {
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
                IsAdded: true,
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
       console.log("dee check"+ this.state.IsAdded)
       
    
         
       
        return (
     <div class>
          <div class="row">
         <div class="col-md-12 col-sm-12">

         <h3 class="font-weight-bold">Add New Client</h3>
         {this.state.IsAdded && <div><br /><Alert variant="success">Added Successfully </Alert></div>}
                 
            <div class="machine-form">
               {/* <form> */}
                  <div class="form-group">
                     <label>Company </label>
                     <input type="text"  name= "company_name" class="form-control" placeholder="User Name" value = {this.state.credentials.company_name} onChange = {this.inputChanged}/>
                  </div>               
                 
            
                  <button type="submit" class="btn btn-black" onClick = {this.addClient} >
                    {this.state.isLoading &&  <FaSpinner></FaSpinner> }
                    &nbsp;  {this.state.isLoading && <span> Adding Client </span> }
                    {!this.state.isLoading && <span> Add Client </span> }
                   </button>
                 
                 
                  {/* <button onClick={this.addMachine} href="#"  type="button" class="btn btn-black">
                                        Add Machine
                                      </button> */}

                  {/* <Link to = "/login" class="login-btn">Login </Link> */}
               {/* </form> */}
            </div>
         </div>
      </div>


      
          </div>
          );
    }
 
}

export default AddClient;





