import React,{Component} from 'react';
import {useHistory} from "react-router-dom";
import {  Redirect, Route, Link } from 'react-router-dom';
import {FaSpinner} from  "react-icons/fa";
import Pop from './Popup'
import { Table, Button, Alert } from 'react-bootstrap';

class EditUser extends Component {
   
    constructor(props){
        super(props)
        let isLoading=true;
        console.log("deepak: " + this.props.location.item.email)
        this.state = {
            credentials :{email:this.props.location.item.email,
            user_name:this.props.location.item.user_name,
            company:this.props.location.item.company},
           
            token: localStorage.getItem('token'),
            IsUserAdded: false
         }
      
    }
 
    addUser = event => {
        console.log(this.state.token);
        this.setState({isLoading:true })
        const url = `http://127.0.0.1:8000/api/${this.props.location.item.id}/`
         fetch(url, {
           method: 'PUT',
           headers: {'Content-Type': 'application/json',
           Authorization: "Bearer " + this.state.token},
           body: JSON.stringify(this.state.credentials)
         })
         .then(
          response => {
             console.log("Respose is"+ response);
             if(response.ok)
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
       
      console.log(this.props.item);
       
        return (
     <div class>
        {this.state.IsUserAdded && <div className="alertBox"><br /><Alert variant="success">Edited Successfully </Alert></div>}
       
          <div class="row">
         <div class="col-md-12 col-sm-12">

         <h3 class="font-weight-bold">Edit User Details</h3>
                 
            <div class="machine-form">
               {/* <form> */}
               <div class="form-group">
                     <label>Email </label>
                     <input type="text"  name= "email" class="form-control" placeholder="User Name" value = {this.state.credentials.email} onChange = {this.inputChanged}/>
                  </div>
                  <div class="form-group">
                     <label>full name </label>
                     <input type="text"  name= "user_name" class="form-control" placeholder="User Name" value = {this.state.credentials.user_name} onChange = {this.inputChanged}/>
                  </div>
                  <div class="form-group">
                     <label>Company</label>
                     <input type="text"  name= "company" class="form-control" placeholder="User Name" value = {this.state.credentials.company} onChange = {this.inputChanged}/>
                  </div>           
                  <button type="submit" class="btn btn-black" onClick = {this.addUser} >
                    {this.state.isLoading &&  <FaSpinner></FaSpinner> }
                    &nbsp;
                    Edit User</button>
                 
                    {/* <Pop new={this.state.IsUserAdded} /> */}
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

export default EditUser;





// import React from 'react';
// import axios from 'axios';

// export default class EditUser extends React.Component {
//   state = {
//     id: '',
//   }

//   handleChange = event => {
//     this.setState({ id: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person ID:
//             <input type="text" name="id" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Delete</button>
//         </form>
//       </div>
//     )
//   }
// }