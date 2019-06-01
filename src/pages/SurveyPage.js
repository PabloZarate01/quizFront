import React, { Component } from 'react'
import NavBar from '../components/NavBar'

import { Row } from 'reactstrap'
import SurveysList from '../components/SurveysList';
class SurveyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            
            <React.Fragment>
            <NavBar/>
            <div className="container">
            <Row>
                <SurveysList/>
            </Row>  
            </div>
            </React.Fragment>
        );
    
}
}

export default SurveyPage;