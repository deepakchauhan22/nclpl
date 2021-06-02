import React, {Component} from 'react';
import Navbar from './Shared/Navbar'
import Sidebar from './Shared/Sidebar'

import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import Login from './Login/login'
import Register from './Register/register'
import ProtectedRoute from "../ProtectedRoute";
import  Dashboard from './Admin/dashboard/MainDashboard';
import  Clients from './Admin/clients/Clients';
import  MemberDetail from './Admin/clients/MemberDetail';
import MachineList from './Admin/machines/MachineList'
import MainClient from './Admin/clients/MainClient';
import Users from './Admin/Users/Users'
import {FaSpinner} from  "react-icons/fa";
import { Loading } from './Shared/Loading';

class AdminDashboard extends Component{

  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem('token'),
      islogout: false,
      isLoading:true,
    };
  }
  signOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };

  getData(){
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1000)
  }

  componentDidMount() {
    this.getData();
}

    render(){

      if(this.state.isLoading){
        return <Loading />
         
      } 
           
      
      if (this.state.islogout) {
        return <Redirect to="/login" />;
      }

        return(

        
          <BrowserRouter>
              
              <div className="container-scroller">
                        <Navbar/>
                    
                        <div className="container-fluid page-body-wrapper">
                            <Sidebar/>
                            <div className="main-panel">
                            
                                <div className="content-wrapper">
                                
                <Switch>
                    <Route exact path='/login' component={ Login } />
                    <Route  path='/register' component={ Register } />
                    <Route exact path='/dashboard' component={ Dashboard } />
                    <ProtectedRoute path="/dashboard"> 
                    </ProtectedRoute>
                    
                    <Route path='/clients' component={ MainClient } />
                    <Route path='/machines' component={ MachineList } />
                    <Route path='/users' component={ Users } />
                    <Route path = '/clients/:clientCompany_name' component={ MemberDetail }/>
                    <Route path="*">
                    <Redirect from="/" to="dashboard" />
                  </Route>
                  <Route exact path="/">
                     <Redirect exact from="/" to="dashboard" />
                   </Route>

                   <Redirect to='/dashboard' />
                 </Switch>
              </div>
              </div>
              </div>
              </div>
          
          </BrowserRouter>
        )
    }
}

export default AdminDashboard;