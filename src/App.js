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
import LoginScreen from './pages/Login';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <div class="row">   
          <div class="col s12 m4 l3"> 
            {/* <!-- Note that "m4 l3" was added -->
            <!-- Grey navigation panel
    
                  This content will be:
              3-columns-wide on large screens,
              4-columns-wide on medium screens,
              12-columns-wide on small screens  --> */}
              <div className="3-column-wide">
                <div className="card">
                  <div className="card-content">
                    <div className="card-title">content</div>
                  </div>
                </div>
              </div>
              
          </div>

          <div class="col s12 m8 l9">
            {/* <!-- Note that "m8 l9" was added -->
            <!-- Teal page content
    
                  This content will be:
              9-columns-wide on large screens,
              8-columns-wide on medium screens,
              12-columns-wide on small screens  --> */}
              <div className="9-column-wide">
                <div className="card">
                  <Router>
                    <Route path="/" exact component={LandingPage}/>
                    <Route path="/surveys" component={QuizPage}/>
                    <Route path="/create-survey" component={NewSurvey}/>
                    <Route path="/login" component={LoginScreen}/>
                  </Router>
                </div>
              </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
