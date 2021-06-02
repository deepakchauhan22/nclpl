import React, { Component } from 'react';
import logo from '../../assets/images/logo.jpg';
import logomini from '../../assets/images/logo-mini.svg';
import {NavLink,Redirect,BrowserRouter } from 'react-router-dom';
import {  Switch, Route, Link } from 'react-router-dom';
import { FiGrid,FiColumns,FiBarChart,FiFileText,FiUser,FiX} from "react-icons/fi";
import { FaAddressBook} from "react-icons/fa";
import {AiOutlineSafetyCertificate} from "react-icons/ai";
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
              <li class="nav-item" >
                <NavLink class="nav-link " to= "/dashboard">
                <i class="icon-layout menu-icon"></i>
                <FiGrid></FiGrid> &nbsp;
                  <span class="menu-title">Dashboard</span>
                </NavLink>
              </li>




             <li class="nav-item">
                <NavLink class="nav-link" to= "/clients">
                <i class="icon-layout menu-icon"></i>
                <FaAddressBook/> &nbsp;
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
            
                <li  class="nav-item">
                    <NavLink class="nav-link" to= "/users">  
                 <i class="icon-bar-graph menu-icon"></i>
               <FiUser></FiUser>&nbsp;
                  <span class="menu-title">Users</span>
     
                  </NavLink> 
               
              </li>

              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                  <i class="icon-head menu-icon"></i>
                  <AiOutlineSafetyCertificate/>  &nbsp;
                  <span class="menu-title">Certificate</span>
                 
                </a>
               </li>
          
              <li class="nav-item ">
           
             
                  <p className="logout-list">
                  <button onClick={this.signOut} href="#"  type="button" class="btn btn-black">
                                              Logout
                                           </button>
                  </p>
                                    

               
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