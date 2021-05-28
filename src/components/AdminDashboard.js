import React, {Component} from 'react';
import Navbar from './Shared/Navbar';
import Sidebar from './Shared/Sidebar';

import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import  Dashboard from './Admin/dashboard/Dashboard';
import  Clients from './Admin/clients/Clients';
import  MemberDetail from './Admin/clients/MemberDetail';
import MachineList from './Admin/machines/MachineList'
import MainClient from './Admin/clients/MainClient';

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

     
           
      
      if (this.state.islogout) {
        return <Redirect to="/login" />;
      }

        return(
          <BrowserRouter>
                {this.state.isLoading ?   <Loading/>  : 
            <div className="container-scroller">
           <Navbar/>
       
            <div className="container-fluid page-body-wrapper">
            <Sidebar/>
              <div className="main-panel">
             
                <div className="content-wrapper">
                <button onClick={this.signOut} href="#"  type="button" class="btn btn-black logout-btn">
              Logout
            </button>
                <Switch>
                    <Route exact path='/dashboard' component={ Dashboard } />
                    <Route path='/clients' component={ MainClient } />
                    <Route path='/machines' component={ MachineList } />
                    <Route path = '/clients/:clientId' component={ MemberDetail }/>
                   <Redirect to='/dashboard' />
                 </Switch>
                </div>
            
              </div>
            </div>
          </div>}
          </BrowserRouter>
        )
    }
}

export default AdminDashboard;