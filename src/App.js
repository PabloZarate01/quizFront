import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//STYLES
import 'materialize-css/dist/css/materialize.min.css';
//ROUTES
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
//COMPONENTS
import Navbar from './components/Navbar';
//PAGES
import LandingPage from "./pages/LandingPage";
import QuizPage from './pages/QuizPage';
import NewSurvey from './pages/NewSurvey';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
      <div className="container z-depth-2">
        <Router>
         <Route path="/" exact component={LandingPage}/>
         <Route path="/surveys" component={QuizPage}/>
         <Route path="/create-survey" component={NewSurvey}/>
        </Router>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
