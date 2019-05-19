import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//STYLES
import 'materialize-css/dist/css/materialize.min.css';
//ROUTES
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//COMPONENTS
//PAGES
import LandingPage from "./pages/LandingPage";
import SurveyPage from "./pages/SurveyPage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Router>
            <Route path="/" exact component = {LandingPage}/>
            <Route path="/survey" component = {SurveyPage}/>
          </Router>
      </React.Fragment>
    );
  }
}

export default App;
