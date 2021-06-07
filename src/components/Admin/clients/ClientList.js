
import React from "react"
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import Clients from "./Clients"
import { Link } from 'react-router-dom';

import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';

function ClientList(props) {

    console.log("Deepak inside client list:" )
    let { Id } = useParams();
    console.log("after click " + Id)
    const [userList, setuserList] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = `http://127.0.0.1:8000/api/${Id}/machines/`;
   
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
          setuserList(res);
          setLoading(false);
          console.log(res);
          console.log(userList)
      })
       
    },[Id]);
 
     console.log(userList);

    const  allUsers = userList.users;
     console.log(allUsers)
    
    if (allUsers === undefined)
    {
      return <h1>Loading</h1>
    }
    return (
  
       
     
          <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body machine-header">
                <p class="card-title machine-title">Recent Calibrations</p>
                <p class="card-title machine-searchbox mb-0">
                  
               
                  
                  </p>
              
                <div class="row mt-3">
                  <div class="col-12">
                    <div class="table-responsive">
                      <table  id="example" class="display expandable-table machine-table" style={{width: "100%"}}>
                        <thead>
                          <tr>
                            <th>Client</th>
                            <th>User</th>
                            <th>Nomenclature</th>
                            <th>Certificate No.</th>
                            <th>Calibrated On</th>
                            <th>Certificate Date</th>
                            <th>Expiry Date</th>
                           
                          </tr>
                        </thead>
                        <tbody>
                         {allUsers.map(item => (
                        // <li key={item.id}>
                        //   <h3>{item.user}</h3>
                        //   <p>{item.nomenclature}</p>
                        // </li>

                      <tr key={item.id}>
                      <td>{item.company} </td>
                      <td>{item.user}</td>
                      <td>{item.nomenclature}</td>
                      <td>{item.certificate_number}</td>
                      <td>{item.calibrated_date}</td>
                      <td>{item.certificate_date}</td>
        
                      <td class="font-weight-medium"><div class="badge badge-warning">{item.expiry_date}</div></td>
                      </tr>

                      ))} 
                        
                        </tbody>
                    </table>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>

    )

}

export default ClientList;

