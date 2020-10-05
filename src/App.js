import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import Home from './components/Home'
import Staff from './components/Staff'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route path="/details" component={Details}/>
          <Route path='/staff' component={Staff}/>
          <Route path='/about' component={About}/>
          <Route path="/cart" component={Cart}/>
          <Route exact path="/" component={Home}/>
          <Route component={Default}/>
        </Switch>
      </React.Fragment>
    );
  } 
}

export default App;