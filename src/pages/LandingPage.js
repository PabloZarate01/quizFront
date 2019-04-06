import React, { Component } from 'react';
import {Link} from "react-router-dom";
class LandingPage extends Component {
    render() { 
        return (
            <React.Fragment>
                <h1>LandingPage</h1>
                <Link to="/quiz">Show quizs</Link>
            </React.Fragment>
        );
    }
}
 
export default LandingPage;
