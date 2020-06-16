import React from 'react';
import{ Jumbotron, Container } from 'reactstrap'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
       <Jumbotron>
        <h1 className="display-3">User Database</h1>
        <p className="lead">This is the first step to building out your database.</p>
        <hr className="my-2" />
        
        
      </Jumbotron>
    </div>
      </Router>
  );
}

export default App;
