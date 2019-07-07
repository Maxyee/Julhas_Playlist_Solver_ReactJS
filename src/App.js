import React from 'react';
import Home from './components/Home';
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account';
import Error from './components/Error';
import './App.css';


import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/Register" component={Register}/>
            <Route path="/Home" component={Home}/>
            <Route path="/Account" component={Account}/>
            <Route component={Error}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;


//<div className="App">
   //     <Register></Register>
   // </div> 