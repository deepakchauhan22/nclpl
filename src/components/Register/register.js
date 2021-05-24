
import React,{Component} from 'react';
import { Redirect, Switch, Route, Link } from 'react-router-dom';


class Register extends Component {

   constructor(props){
      super(props)
      let IsRegistered= false;
      this.state = {
         credentials :{email:'',user_name:'',date_of_birth:'',password:''}
      }
  }
   //  state = {
   //      credentials :{email:'',user_name:'',date_of_birth:'',password:''}
   //  }

    register = event => {
       console.log(this.state.credentials);
        fetch('http://127.0.0.1:8000/api/register/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(this.state.credentials)
        })
        .then( data => data.json())
        .then(
          data => {
            console.log(data.data);
            if(data.data == 'ok_message')
            this.setState({
               IsRegistered: true
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
      if (this.state.IsRegistered == true) {
         return <Redirect to="/login" />;
       }
       

        return (
     <div>

      <div class="sidenav">
         <div class="login-main-text">
            <h2>NCL<br/> Register Page</h2>
            <p>Register from here to access.</p>
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="register-form">
               {/* <form> */}
                  <div class="form-group">
                     <label>Email </label>
                     <input type="text"  name= "email" class="form-control" placeholder="User Name" value = {this.state.credentials.email} onChange = {this.inputChanged}/>
                  </div>
                  <div class="form-group">
                     <label>Username </label>
                     <input type="text"  name= "user_name" class="form-control" placeholder="User Name" value = {this.state.credentials.user_name} onChange = {this.inputChanged}/>
                  </div>
                  <div class="form-group">
                  <label for="example-date-input">Date of Birth</label>
                    <input class="form-control" type="date" name= "date_of_birth" value="2011-08-19" id="example-date-input" value = {this.state.credentials.date_of_birth} onChange = {this.inputChanged}/>
                 </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" name= "password"  class="form-control" placeholder="Password" value = {this.state.credentials.password} onChange = {this.inputChanged}/>
                  </div>
            
                  <button type="submit" class="btn btn-black"onClick = {this.register}>Register</button>

                  <Link to = "/login" class="login-btn">Login </Link>
               {/* </form> */}
            </div>
         </div>
      </div>

      
          </div>
          );
    }
 
}

export default Register;





