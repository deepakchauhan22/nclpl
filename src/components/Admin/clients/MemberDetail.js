
import React from "react"
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import Clients from "./Clients"
import { Link } from 'react-router-dom';
import ClientList from  './ClientList'
import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';

function MemberDetail(props) {

    console.log("Deepak inside member:" )
    let { companyName } = useParams();
    console.log("before " + companyName)
    const [member, setMember] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = `http://127.0.0.1:8000/api/${companyName}/client/`;

    useEffect(() => {
        fetch(url,{
            method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + props.token
              }
             
          })
          .then(res=> res.json())
        .then(res => {
          setMember(res);
          setLoading(false);
          console.log(res);
          console.log(member)
      })
       
    },[companyName]);
 
     console.log(member);
    
    if (member === undefined)
    {
      return <h1>Loading</h1>
    }
    return (
      <BrowserRouter> 
      
  
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title mb-2">{companyName} Agents</p>
{/*                   
                  <input type="search" id="form1" class="form-control" placeholder="Search query" aria-label="Search" />
                 */}
                   <div class="table-responsive">
                    <table class="table table-striped table-borderless">
                      <thead>
                        <tr>
                          <th>Name</th>
                    
                          <th>Email</th>
                          <th>Client</th>
                          <th>No. of Machines</th>
                        </tr>  
                      </thead>
                      <tbody className="userBox">
                
                        {member.map(item => (
                                               
                             <Link to ={`/clients/${item.id}`} > 
                               <tr key={item.id}>          
                                        <td class="font-weight-bold">{item.user_name}</td>
                                        <td >{item.email}</td>
                                      
                                        <td class="font-weight-medium"><div class="badge badge-success">{item.company}</div>
                                        </td>
                                        <td > 25 </td>                                        
                                </tr>   
                             </Link>                                         

                           ))} 
                                                                  
                      </tbody>
                    </table>
                   </div>
               
                </div>
              </div>
            </div>
       
        
           <Route path = "/clients/:Id" >
            <ClientList   token = {props.token}/>
                     </Route> 
           </BrowserRouter> 
      
       
    )

}

export default MemberDetail;



// import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
// import {useParams} from "react-router-dom"

// class MemberDetail extends Component{

//     constructor(props) {
//         super(props);
//         this.state = {
//           members: [],
//           token: localStorage.getItem('token'),
//           error: false,
//         };
//       }
    
//       componentDidMount() {
    
        
//         console.log("inside members");
//         console.log(this.props.companyName)
//         // const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=2f5b88c782444575a24e7499ee1bd726`;
//         const url = `http://127.0.0.1:8000/api/${this.props.companyName}/client/`
       
//         fetch(url,{
        
//           method: "GET",
        
//             headers: {
//               Accept: "application/json",
//               "Content-Type": "application/json",
//               Authorization: "Bearer " + this.state.token
//             }
           
//         })
        
//         .then((res) => res.json())
        
//           .then((data) => {
//             console.log("deepak"+ data);
//             this.setState({
//               members: data,
        
//             })
//           } 
//           )
//           .catch((error) => {
//             this.setState({
//                 error:true
//             })
//         });
//       }
    
//     render(){

//         const { members } = this.state;
//         console.log(members);
//         console.log('Testing members');

    
//         return(
            
//             <div class="row"> 
                   
//               {members.map(item => (
//                     <Link to ={`/clients/${item.id}`} >
//                             <div key={item.id} class="card card-dark-blue client-box">
//                     <div class="card-body">
//                       <h4 class="mb-4">{item.user_name}</h4>
//                       <h5>Deepak test</h5>
//                       {/* <p class="fs-25 mb-2">47033</p>
//                       <p>Machines</p> */}
//                     </div>
//                   </div> 
//                   </Link>
//                    ))}   
                  
                  
//                   </div>
        
//         )

//         // else{
//         //   return(
//         //     <h1> Hello deepaak</h1>
//         //   )
         
//         // }
//     }
// }

// export default MemberDetail;
