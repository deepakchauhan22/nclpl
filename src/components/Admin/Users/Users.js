
import React, { Component } from 'react';
import {  Redirect, Route} from 'react-router-dom';
import AddUser from './AddUser';
import {Link,BrowserRouter } from 'react-router-dom';
import {MdDelete,MdEdit} from  "react-icons/md";
import EditUser from './EditUser'
import Pop from './Popup'
import { Table, Button, Alert } from 'react-bootstrap';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      token: localStorage.getItem('token'),
      error: false,
      filter: "",
      currentPage: 1,
      userPerPage: 8,
      isDeleted:false,
      response: {}
    }; 
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  componentDidMount() {

    const url = 'http://127.0.0.1:8000/api/list/';
    
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
          users: data,
    
        })
      } 
      )
      .catch((error) => {
        this.setState({
            error:true
        })
    });
  }

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  deleteProduct(itemId) {

    const { users } = this.state; 
    console.log(itemId)
    const urll = `http://127.0.0.1:8000/api/${itemId}/`;
   
    fetch(urll,{
          method: "DELETE",
          headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.state.token
        }
    })
    .then(
      response => {
         console.log("Respose is"+ response);
         if(response.ok)
         this.setState({
          isDeleted: true,
            isLoading: false
          });
       }
     )
      .catch((error) => {
        this.setState({
            error:true
        })
    });

  }

  render() {
    console.log(this.state.response)

   const { filter, users ,currentPage,userPerPage} = this.state;

   const indexOfLastPost = currentPage * userPerPage;
   const indexOfFirstPost = indexOfLastPost - userPerPage;
   const currentUsers= users.slice(indexOfFirstPost, indexOfLastPost)


   console.log(users)
   const filteredUsers = users.filter(user => {
    return user.user_name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  });
  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / userPerPage); i++) {
    pageNumbers.push(i);
  }
    
  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li
        key={number}
        id={number}
        onClick={this.handleClick}
       className='page-item' >
        {number}
      </li>
      
       );
  });
 
     if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }
  
    if(users.code == "token_not_valid") {
      return <h1> No machines</h1>
    }
  
    
    else    
    {

      return (
        <BrowserRouter> 
        <div >
          {/* {this.renderItems()} */}

 
          {/* <p>data {JSON.stringify(machines)}</p> */}

         <Link to = "/user/addUser" > <span className="btn btn-black logout-btn">  Add User</span> </Link>                                  
         {this.state.isDeleted && <div className="alertBox"><br /><Alert variant="success">Deleted Successfully </Alert></div>}
       

          <div class="row">
            <div class="col-md-12 grid-margin">
              <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                  <h3 class="font-weight-bold">Users</h3>
                  <h6 class="font-weight-normal mb-0">All systems are running smoothly! You have <span class="text-primary">3 unread alerts!</span></h6>
                </div>
          
              </div>
            </div>
          </div>

          <Route path = "/user/addUser" component = {AddUser}/>

          <Route path = "/user/editUser" component = {EditUser}/> 
         

       <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title mb-2">All Users</p>
                  
                  <input value={filter} onChange={this.handleChange}  type="search" id="form1" class="form-control" placeholder="Search query" aria-label="Search" />
                
                   <div class="table-responsive users-list">
                    <table class="table table-striped table-borderless">
                      <thead>
                        <tr>
                          <th>Name</th>
                    
                          <th>Email</th>
                          <th>Client</th>
                          <th>Actions</th>
                        </tr>  
                      </thead>
                      <tbody>
                
                        {filteredUsers.map(item => (
                                               
                              <tr key={item.id}>          
                                  <td class="font-weight-bold">{item.user_name}</td>
                                  <td >{item.email}</td>
                                  <td class="font-weight-medium"><div class="badge badge-success">{item.company}</div>
                                  </td>
                                  <td >  
                                    
                              {/* <Link to = "/user/editUser" >  <MdEdit size={25} style={{ cursor: 'pointer' }} /> </Link>            
                               &nbsp;&nbsp; |&nbsp; &nbsp; 
                               <Link to = "/user/deleteUser" > <MdDelete size={25} style={{ cursor: 'pointer' }}/></Link>   
                                */} 
                               
                                
                         <Link to ={{
                          pathname :"/user/editUser",
                           item : item,
                           key : item.id,
                            data:this.props.location.data 
                         }} >  <MdEdit size={25} style={{ cursor: 'pointer' }} /> </Link>       
                 {/* <Button variant="info" onClick={() => this.props.editProduct(item.id)}>  <MdEdit size={20} style={{ cursor: 'pointer' }} /> </Button>
                             */}
                               &nbsp;&nbsp; |&nbsp; &nbsp; 
                  <Button variant="danger" onClick={() => this.deleteProduct(item.id)}>  <MdDelete size={20} style={{ cursor: 'pointer' }}/></Button>
                 
                                </td>   
                                                        
                                </tr>    
                                                                        

                           ))} 

                                                                   
                      </tbody>
                    </table>
                    <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
            <Pop new={this.state.IsUserAdded} />
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        
        </div>
        </BrowserRouter>
      );
     
    }
  
  }
}

export default Users;
