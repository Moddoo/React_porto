import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav/index';
import Project from './components/Projects'

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path='/projects' component={Project} />
    </Router>
  )
}

export default  App;