import React, { Component } from 'react';
import logo from '../../assets/images/logo.jpg';
import logomini from '../../assets/images/logo-mini.svg';
import {NavLink,Redirect,BrowserRouter } from 'react-router-dom';
import {  Switch, Route, Link } from 'react-router-dom';
import { FiGrid,FiLayout,FiColumns,FiBarChart,FiFileText,FiUser,FiX} from "react-icons/fi";
class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };


    render () {
      if (this.state.islogout) {
        return <Redirect to="/login" />;
      }
        return(
            <>
<div> 
               <div class="theme-setting-wrapper">
            <div id="settings-trigger"><i class="ti-settings"></i></div>
            <div id="theme-settings" class="settings-panel">
              <i class="settings-close ti-close"></i>
              <p class="settings-heading">SIDEBAR SKINS</p>
              <div class="sidebar-bg-options selected" id="sidebar-light-theme"><div class="img-ss rounded-circle bg-light border mr-3"></div>Light</div>
              <div class="sidebar-bg-options" id="sidebar-dark-theme"><div class="img-ss rounded-circle bg-dark border mr-3"></div>Dark</div>
              <p class="settings-heading mt-2">HEADER SKINS</p>
              <div class="color-tiles mx-0 px-4">
                <div class="tiles success"></div>
                <div class="tiles warning"></div>
                <div class="tiles danger"></div>
                <div class="tiles info"></div>
                <div class="tiles dark"></div>
                <div class="tiles default"></div>
              </div>
            </div>
          </div>

            <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <ul class="nav">
              <li class="nav-item">
                <NavLink class="nav-link active" to= "/dashboard">
                <i class="icon-layout menu-icon"></i>
                <FiGrid></FiGrid> &nbsp;
                  <span class="menu-title">Dashboard</span>
                </NavLink>
              </li>

              {/* <li class="nav-item">
                  <a class="nav-link" data-toggle="collapse" aria-expanded="false" aria-controls="ui-basic">
              <i class="icon-layout menu-icon"></i>
              <FiLayout></FiLayout>
              <span class="menu-title"><Link to='/admin/clients' className="nav-link"> Reports </Link></span>
            </a>               
              </li> */}


             <li class="nav-item">
                <NavLink class="nav-link" to= "/clients">
                <i class="icon-layout menu-icon"></i>
                <FiGrid></FiGrid> &nbsp;
                  <span class="menu-title">Clients</span>
                </NavLink>
              </li>



              <li class="nav-item">
              <NavLink class="nav-link" to= "/machines">
                <i class="icon-layout menu-icon"></i>
                <FiColumns></FiColumns> &nbsp;
                  <span class="menu-title">Machines</span>
                </NavLink>

            
              
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                  <i class="icon-bar-graph menu-icon"></i>
                  <FiBarChart></FiBarChart>&nbsp;
                  <span class="menu-title">Sales</span>
     
                </a>
                <div class="collapse" id="charts">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item"> <a class="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                  <i class="icon-head menu-icon"></i>
                  <FiUser></FiUser> &nbsp;
                  <span class="menu-title">Reports</span>
                 
                </a>
                <div class="collapse" id="auth">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item"> <a class="nav-link" href="pages/samples/login.html"> Login </a></li>
                    <li class="nav-item"> <a class="nav-link" href="pages/samples/register.html"> Register </a></li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
                  <i class="icon-ban menu-icon"></i>
                  <FiX></FiX>&nbsp;
                  <span class="menu-title">Deadlines</span>
                 
                </a>
                <div class="collapse" id="error">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item"> <a class="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                    <li class="nav-item"> <a class="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/documentation/documentation.html">
                  <i class="icon-paper menu-icon"></i>
                  <FiFileText></FiFileText> &nbsp;
                  <span class="menu-title">Reports</span>
                </a>
              </li>
                  {/* <li class="nav-item">
                    
            <button onClick={this.signOut} href="#">
                  Logout
                </button>
                    
                    
                  </li> */}
            </ul>
          </nav>
</div>
</>
        )

    }
}

export default Sidebar;