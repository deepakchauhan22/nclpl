import React,{Component} from 'react';
import {useHistory} from "react-router-dom";
import {  Redirect, Route, Link } from 'react-router-dom';


class Login extends Component {
   
    constructor(props){
        super(props)
        let islogged= false;
        this.state = {
            credentials :{email:'',password:''}
        }
    }
  
    login = e => {
        e.preventDefault();
      //   console.log(this.state.credentials);
        fetch('http://127.0.0.1:8000/api/token/',{
            method: 'POST',
            headers: {'Content-Type': 'application/JSON'},
            body: JSON.stringify(this.state.credentials)
        })
        .then(data => data.json())
        .then(
            data =>{
            //    this.props.userLogin(data.access)
            // console.log(data.access)
            if(data.access)
            localStorage.setItem("token",data.access)
            this.setState({
               islogged: true
             });

            }
        ).catch(error => console.error(error)) 
        
    }
    inputChanged = event=> {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials:cred});
    }

    
    render()
    {
      if (localStorage.getItem("token")) {
         return <Redirect to="/dashboard" />;
       }
       if (this.state.islogged == true) {
         return <Redirect to="/dashboard" />;
       }
       
        return (
     <div>

      <div class="sidenav">
         <div class="login-main-text">
            <h2>NCL<br/> Login Page</h2>
            <p>Login here to access.</p>
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
               {/* <form> */}
                  <div class="form-group">
                     <label>Email </label>
                     <input type="text"  name= "email" class="form-control" placeholder="User Name" value = {this.state.credentials.email} onChange = {this.inputChanged}/>
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" name= "password"  class="form-control" placeholder="Password" value = {this.state.credentials.password} onChange = {this.inputChanged}/>
                  </div>
                  <button type="submit" class="btn btn-black" onClick = {this.login}>Login</button>
                  <Link to = "/register" class= "register-btn">Register </Link>
                  {/* <button type="submit" class="btn btn-secondary"onClick = {this.register}>Register</button> */}
               {/* </form> */}
            </div>
         </div>
      </div>

      
          </div>
          );
    }
 
}

export default Login;





