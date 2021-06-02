
import React, { Component } from 'react';


class Machine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      machines: [],
      token: localStorage.getItem('token'),
      error: false,
      filter: "",
    };
  }

  componentDidMount() {

    // const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=2f5b88c782444575a24e7499ee1bd726`;
    const url = 'http://127.0.0.1:8000/machines/list/';
    // var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIyMDY2ODgwLCJqdGkiOiIwNTMxMWEzMGM1Y2Y0NGM1YjU4ZjNiNDQxZjU5NTI1YSIsInVzZXJfaWQiOjZ9.P_fwCxUEEoHlTPYYHpUvXt6xeRpIgVOkjtCnj0MZhaU'
 
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
          machines: data,
    
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

  render() {

    
    const { filter, machines } = this.state;
   
    const filteredMachines = machines.filter(machine => {
     return machine.nomenclature.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
   });
  
    if(machines.code == "token_not_valid") {
      return <h1> No machines</h1>
    }
    
    
    else    
    {

      return (
        <div >
          {/* {this.renderItems()} */}

 
          {/* <p>data {JSON.stringify(machines)}</p> */}


       

          <div class="row" >
                                  <div class="col-md-12 grid-margin stretch-card">
                                    <div class="card">
                                      <div class="card-body machine-header">
                                        <p class="card-title machine-title">Recent Calibrations</p>
                                        <p class="card-title machine-searchbox mb-0">
                                          
                                        <input value={filter} onChange={this.handleChange}  type="search" id="form1" class="form-control" placeholder="Search Nomenclature" aria-label="Search" />
                
                                          
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
                                                 {filteredMachines.map(item => (
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
                          </div>
        
        </div>
      );
    }
  
  }
}

export default Machine;
