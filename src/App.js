import React, { Component } from 'react';
import './App.css';
//STYLES
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
