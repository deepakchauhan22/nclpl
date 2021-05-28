
// import React from "react"
// import {useParams} from "react-router-dom"
// import { useState, useEffect } from "react"
// import Clients from "./Clients"
// // import productsData from "./productsData"

// function MemberDetail(props) {

   
//     const clientId = props.client;
//     console.log("Deepak inside member")
// //    const clientId = props.client
//   console.log(clientId)
//     const [Member, setMember] = useState([])
//     const url = `http://127.0.0.1:8000/api/${clientId}/client/`;
//     useEffect(() => {
//         fetch(url,{
    
//             method: "GET",
//               headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//                 Authorization: "Bearer " + props.token
//               }
             
//           }).then(
//             res => setMember(res.data),
           
//         )
//     })


//      console.log(Member)
//     return (
//         <div>
//             {/* <h1>{thisProduct.user_name}</h1>
//             <p>Price: ${thisProduct.email}</p>
//             <p>{thisProduct.company}</p> */}
//             <h1>Deepak</h1>
//         </div>
//     )
// }

// export default MemberDetail;



import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class MemberDetail extends Component{

    constructor(props) {
        super(props);
        this.state = {
          members: [],
          token: localStorage.getItem('token'),
          error: false,
        };
      }
    
      componentDidMount() {
    
        console.log("inside members");
        // const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=2f5b88c782444575a24e7499ee1bd726`;
        const url = `http://127.0.0.1:8000/api/${this.props.client}/client/`
       
        fetch(url,{
        
          method: "GET",
        
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.state.token
            }
           
        })
        
        .then((res) => res.json())
        
          .then((data) => {
            console.log("deepak"+ data);
            this.setState({
              members: data,
        
            })
          } 
          )
          .catch((error) => {
            this.setState({
                error:true
            })
        });
      }
    
    render(){

        const { members } = this.state;
        console.log(members);
        console.log('members');
    
        return(
            
            <div class="row"> 
                   
              {members.map(item => (
                    <Link to ={`/clients/${item.id}`} >
                            <div key={item.id} class="card card-dark-blue client-box">
                    <div class="card-body">
                      <h4 class="mb-4">{item.user_name}</h4>
                      <p class="fs-25 mb-2">47033</p>
                      <p>Machines</p>
                    </div>
                  </div> 
                  </Link>
                   ))}   
                  
                  
                  </div>
        
        )
    }
}

export default MemberDetail;
