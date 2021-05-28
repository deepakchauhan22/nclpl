import React,{Component} from 'react';
import {useHistory} from "react-router-dom";
import {  Redirect, Route, Link } from 'react-router-dom';
import {FaSpinner} from  "react-icons/fa";

class AddMachine extends Component {
   
    constructor(props){
        super(props)
        let IsAdded= false;
        let  isLoading=true;
        this.state = {
            credentials :{id:'',user:'',nomenclature:'',certificate_number:'',calibrated_date:'',certificate_date:'',expiry_date:''}
            ,token: localStorage.getItem('token'),
        }
    }
    addMachine = event => {
        console.log(this.state.credentials);
        this.setState({isLoading:true })
         fetch('http://127.0.0.1:8000/machines/create', {
           method: 'POST',
           headers: {'Content-Type': 'application/json',
           Authorization: "Bearer " + this.state.token},
           body: JSON.stringify(this.state.credentials)
         })
         .then( data => data.json())
         .then(
           data => {
             console.log(data);
             if(data.status_code == 201)
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
        if (this.state.IsAdded == true) {
            return <Redirect to="/machines" />;
          }
          
       
        return (
     <div>
          <div class="row">
         <div class="col-md-12 col-sm-12">

         <h3 class="font-weight-bold">Add New Machines</h3>
                 


            <div class="machine-form">
               {/* <form> */}
                  <div class="form-group">
                     <label>Company </label>
                     <input type="text"  name= "id" class="form-control" placeholder="User Name" value = {this.state.credentials.id} onChange = {this.inputChanged}/>
                  </div>
                  <div class="form-group">
                     <label>UserD </label>
                     <input type="text"  name= "user" class="form-control" placeholder="User Name" value = {this.state.credentials.user} onChange = {this.inputChanged}/>
                  </div>
                  <div class="form-group">
                     <label>Nomenclature</label>
                     <input type="text"  name= "nomenclature" class="form-control" placeholder="User Name" value = {this.state.credentials.nomenclature} onChange = {this.inputChanged}/>
                  </div>
                  <div class="form-group">
                     <label>certificate_number</label>
                     <input type="text"  name= "certificate_number" class="form-control" placeholder="User Name" value = {this.state.credentials.certificate_number} onChange = {this.inputChanged}/>
                  </div>
                  <div class="form-group">
                  <label for="example-date-input">calibrated_date</label>
                    <input class="form-control" type="date" name= "calibrated_date" value="2011-08-19" id="example-date-input" value = {this.state.credentials.calibrated_date} onChange = {this.inputChanged}/>
                 </div>
                 <div class="form-group">
                  <label for="example-date-input">Date of Birth</label>
                    <input class="form-control" type="date" name= "certificate_date" value="2011-08-19" id="example-date-input" value = {this.state.credentials.certificate_date} onChange = {this.inputChanged}/>
                 </div>
                 <div class="form-group">
                  <label for="example-date-input">Date of Birth</label>
                    <input class="form-control" type="date" name= "expiry_date" value="2011-08-19" id="example-date-input" value = {this.state.credentials.expiry_date} onChange = {this.inputChanged}/>
                 </div>
                 
                 
            
                  <button type="submit" class="btn btn-black"onClick = {this.addMachine}>
                     {this.state.isLoading &&  <FaSpinner></FaSpinner> }
                    &nbsp;
                    Add Machine
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

export default AddMachine;





