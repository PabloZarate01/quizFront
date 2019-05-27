import React, { Component } from 'react';
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
import SurvList from './components/SurveysList'
import CardEx from './components/SurveyCard'

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Router>
            <Route path="/" exact component = {LandingPage}/>
            <Route path="/survey" component = {SurveyPage}/>
            <Route path="/survlist" component = {SurvList}/>
          </Router>
      </React.Fragment>
    );
  }
}

export default App;
