
// import React, {Component} from 'react';
// import { Link } from 'react-router-dom';

// class ClientList extends Component{

  
//     render(){
//         return(
            
//             <div class="row"> 
                   
//               {this.props.Clients.map(item => (
//                     <Link to ={`/clients/${item.id}`} >
//                             <div key={item.id} class="card card-light-danger client-box">
//                     <div class="card-body">
//                       <h4 class="mb-4">{item.company_name}</h4>
//                       <p class="fs-25 mb-2">47033</p>
//                       <p>Machines</p>
//                     </div>
//                   </div> 
//                   </Link>
//                    ))}   
                  
                  
//                   </div>
        
//         )
//     }
// }

// export default ClientList;

import React from "react";
import MemberDetail from './MemberDetail'
import { Link } from "react-router-dom";


var token = ''

const ClientList = (props) => {

  const clientList = props.Clients.map(client => {
      token = props.token
      console.log(props.token + "dEEapk tpker here")
    return (
    //   <div key={client.id}>
    //     <h3>
    //       <Link to={`/clients/${client.id}`}>{client.name}</Link>
    //     </h3>
    //     <p>Price: ${product.price}</p>
    //     <hr />
    //   </div>
    
            <div class="row"> 
                   
             
                    <Link to ={`/clients/${client.id}`} >
                            <div key={client.id} class="card card-light-danger client-box">
                    <div class="card-body">
                      <h4 class="mb-4">{client.company_name}</h4>
                      <p class="fs-25 mb-2">47033</p>
                      <p>Machinessss</p>
                    </div>
                  </div> 
                  </Link>
                
                  
                  
                  </div>
    );
  });

  return (
    <>
  
      {clientList}
    </>
  );
};

export default ClientList;
