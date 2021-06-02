
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Display extends Component{

  
    render(){
        return(
            
            <div class="row"> 
           <h1> Inside {this.props.match.params.companyName}</h1>
                  
                  
                  </div>
        
        )
    }
}

export default Display;