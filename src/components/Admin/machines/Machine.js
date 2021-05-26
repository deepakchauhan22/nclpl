
import React, { Component } from 'react';


class Machine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      machines: [],
      token: localStorage.getItem('token'),
      error: false,
    };
  }

  componentDidMount() {

    // const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=2f5b88c782444575a24e7499ee1bd726`;
    const url = 'http://127.0.0.1:8000/machines/list';
    // var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIyMDY2ODgwLCJqdGkiOiIwNTMxMWEzMGM1Y2Y0NGM1YjU4ZjNiNDQxZjU5NTI1YSIsInVzZXJfaWQiOjZ9.P_fwCxUEEoHlTPYYHpUvXt6xeRpIgVOkjtCnj0MZhaU'
        
    // console.log("old token  " + token)
    // localStorage.getItem('token')


    //      console.log("dee token " +this.state.author)
 
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

  // renderItems() {
  //   if(!this.state.error){
  //   return this.state.news.map((item) => (
  //     <NewSingle key={item.url} item={item} />
  //   ));
  //   }
  //   else{
  //       return <Error />
  //   }
  // }

  render() {

    const { machines } = this.state;
    console.log(machines);
    console.log('output');

    if(this.state.machines != null) {

      return (
        <div className="row">
          {/* {this.renderItems()} */}

          <ul>
          {/* <p>data {JSON.stringify(machines)}</p> */}


          <div class="row" >
<div class="col-md-12 grid-margin stretch-card">
  <div class="card">
    <div class="card-body">
      <p class="card-title">Recent Calibrations</p>
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table  id="example" class="display expandable-table" style={{width: "100%"}}>
              <thead>
                <tr>
                  <th>Client#</th>
                  <th>Machine</th>
                  <th>Cert no.</th>
                  <th>Request Date</th>
                  <th>Calibrated On</th>
                  <th>Cert Issue Date</th>
                  <th>Next Due Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {machines.map(item => (
              // <li key={item.id}>
              //   <h3>{item.user}</h3>
              //   <p>{item.nomenclature}</p>
              // </li>

<tr key={item.id}>
<td>{item.id}</td>
<td>{item.user}</td>
<td>{item.nomenclature}</td>
<td>{item.company}</td>
<td>{item.certificate_number}</td>
<td>{item.calibrated_date}</td>
<td>{item.certificate_date}</td>
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
          
          </ul>
        </div>
      );
    }
  
  }
}

export default Machine;
