import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import QuizPage from './pages/QuizPage';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Router>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/quiz" component={QuizPage}/>
          </Router>
        </React.Fragment>
      
    );
  }
}

export default App;
