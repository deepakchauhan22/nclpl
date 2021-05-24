import React, {Component} from 'react';
import Navbar from './Shared/Navbar';
import Sidebar from './Shared/Sidebar';

import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import  Dashboard from './Admin/dashboard/Dashboard';
import  Clients from './Admin/clients/Clients';

class AdminDashboard extends Component{

  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };

//   state = {
//     machines:[]
//   }

//   loadMachines = event=> {
//     console.log(this.state.credentials);
//     fetch('http://127.0.0.1:8000/machines/list',{
//         method: 'GET',
//         headers: {'Content-Type': 'application/JSON'},
//         body: JSON.stringify(this.state.credentials)
//     })
//     .then(data => data.json())
//     .then(
//         data =>{
//            this.setState({machines:data})
//         }
//     ).catch(error => console.error(error)) 
// }

    render(){

      
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
                <button onClick={this.signOut} href="#"  type="button" class="btn btn-black logout-btn">
              Logout
            </button>
                <Switch>
                    <Route exact path='/dashboard' component={ Dashboard } />
                    <Route path='/clients' component={ Clients } />
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