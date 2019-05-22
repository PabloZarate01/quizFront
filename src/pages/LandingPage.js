import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <p>LandingPage</p>
                    <Link to="survey">Surveys</Link>
                </div>
            </React.Fragment>
        );
    }
}

export default LandingPage;