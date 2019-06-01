import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import {} from 'reactstrap'
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
                    <ul>
                        <li><Link to="survey">Surveys</Link></li>
                        <li><Link to="createsurvey">Create surveys</Link></li>
                        <li><Link to="survlist">List Survey</Link></li>
                        <li><Link to="signup">Sig Up</Link></li>
                    </ul>  
                </Container>
            </React.Fragment>
        );
    }
}

export default LandingPage;