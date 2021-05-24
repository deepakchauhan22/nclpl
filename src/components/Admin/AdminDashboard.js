import React, {Component} from 'react';
import Navbar from '../Shared/Navbar';
import Sidebar from '../Admin/Sidebar';
import AdminRoutes from './AdminRoutes';
import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import  Dashboard from './dashboard/Dashboard';
import  Clients from './clients/Clients';

class AdminDashboard extends Component{

  state = {
    machines:[]
  }

  loadMachines = event=> {
    console.log(this.state.credentials);
    fetch('http://127.0.0.1:8000/machines/list',{
        method: 'GET',
        headers: {'Content-Type': 'application/JSON'},
        body: JSON.stringify(this.state.credentials)
    })
    .then(data => data.json())
    .then(
        data =>{
           this.setState({machines:data})
        }
    ).catch(error => console.error(error)) 
}

    render(){
        return(
          <BrowserRouter>
            <div className="container-scroller">
           <Navbar/>
            <div className="container-fluid page-body-wrapper">
            <Sidebar/>
              <div className="main-panel">
                <div className="content-wrapper">

                <Switch>
                    <Route exact path='/dashboard' component={ Dashboard } />
                    <Route path='/clients' component={ Clients } />
                    <Route path='/clients' component={ Clients } />
                   <Redirect to="/dashboard" />
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