import './App.css';
import React, {userState, useState} from 'react';
import AdminDashboard from './components/AdminDashboard';
import { Switch, Route, Redirect,BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login/login'
import Register from './components/Register/register'
import ProtectedRoute from "./ProtectedRoute";

function App() {
  
  // const userLogin = (tok) =>{
  //   setToken(tok);
  //   console.log(tok)
  // }
  return (
    <Router>
        <switch>
            <Route exact path='/login' component={ Login } />
            <ProtectedRoute path="/dashboard"> 
            </ProtectedRoute>
            <Route exact path="/">
          <Redirect exact from="/" to="dashboard" />
        </Route>
            <Route   path='/register' component={ Register } />
            <Route  path='/dashboard' component={ AdminDashboard } />
            <Route path="*">
          <Redirect from="/" to="dashboard" />
        </Route>
            {/* <Redirect to="/login" /> */}
        </switch>
    <div className="App">
    {/* <AdminDashboard/>  */}
    {/* <Login userLogin = {userLogin}/> */}
    {/* <AdminDashboard token={token}/> */}
    </div>
    </Router>
  );
}

export default App;

// import './App.css';
// import React, {userState, useState} from 'react';
// import AdminDashboard from './components/Admin/AdminDashboard';
// import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
// import Login from './components/Login/login'
// import Register from './components/Register/register'

// function App() {
  
//   const [token,setToken] = useState('');

//   const userLogin = (tok) =>{
//     setToken(tok);
//     console.log(tok)
//   }
//   return (
//     <div className="App">
//     {/* <AdminDashboard/>  */}
//     <Login userLogin = {userLogin}/>
//     {/* <AdminDashboard token={token}/> */}
//     </div>
//   );
// }

// export default App;

