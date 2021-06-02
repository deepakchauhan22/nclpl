import React,{Component} from 'react';
import {useHistory} from "react-router-dom";
import {  Redirect, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Navbar from '../.././Shared/Navbar';
import Sidebar from '../.././Shared/Sidebar';
import { Loading } from '../.././Shared/Loading';

class MainDashboard extends Component {
   
    constructor(props){
        super(props)
        
        this.state = {
            islogout: false,
            userDetails: [],
            isLoading:true,
            token: localStorage.getItem('token'),
           
                  }
              }

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
    
    render()
    {
     
        if(this.state.isLoading){
            return <Loading />
             
          } 
        if (!localStorage.getItem("token")) {
            return <Redirect to="/login" />;
          }
       
        return (
     <div>
           <Dashboard />
                {/* <div className="container-scroller">
                        <Navbar/>
                    
                        <div className="container-fluid page-body-wrapper">
                            <Sidebar/>
                            <div className="main-panel">
                            
                                <div className="content-wrapper">
                                                <button onClick={this.signOut} href="#"  type="button" class="btn btn-black logout-btn">
                                                Logout
                                                </button>
                                <Dashboard />
                                </div>
                           </div>
                        </div>
                </div> */}
        </div>
          );
    }
 
}

export default MainDashboard;





