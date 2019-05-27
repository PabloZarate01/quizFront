import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

import { Container } from 'reactstrap' 
class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <Container>
                    <p>LandingPage</p>
                    <Link to="survey">Surveys</Link>
                    <Link to="createsurvey">Create surveys</Link>
                    <Link to="survlist">List Survey</Link>
                </Container>
            </React.Fragment>
        );
    }
}

export default LandingPage;