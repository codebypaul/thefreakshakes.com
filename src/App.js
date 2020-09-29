import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Link } from 'react-router-dom'
import About from './components/About'
import Navbar from './components/Navbar'
import Staff from './components/Staff/Staff'
import Home from './components/Home'



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Link exact path='/' component={Home}/>
          <Link path='/about' component={About}/>
          <Link path='/staff' component={Staff}/>
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
