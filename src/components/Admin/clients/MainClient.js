import React,{Component} from 'react';
import {useHistory} from "react-router-dom";
import {  Redirect, Route, Link } from 'react-router-dom';

import Clients from './Clients'
import AddClient from './AddClient'


class MainClient extends Component {
   
    constructor(props){
        super(props)
        let islogged= false;
        this.state = {
            credentials :{email:'',password:''}
        }
    }

    
    render()
    {
     
       
        return (
     <div>

<div class="row">
            <div class="col-md-12 grid-margin">
              <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                  <h3 class="font-weight-bold">Clients</h3>
                  <h6 class="font-weight-normal mb-0">All systems are running smoothly! You have <span class="text-primary">3 unread alerts!</span></h6>
                </div>
            
              </div>
            </div>
          </div>
        <Clients />
        <AddClient />
        {/* <AddMachine /> */}


      
          </div>
          );
    }
 
}

export default MainClient;





