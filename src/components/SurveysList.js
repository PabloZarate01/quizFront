import React, { Component } from 'react'
import axios from 'axios'
import CardEx from './SurveyCard'
import { Row, Col } from 'reactstrap'
class SurveysList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            surveys:[],
            isLoaded:false
         };
    }
    componentDidMount(){
        axios.get('/survey')
            .then(res => {
                console.log(res.data);
                this.setState({surveys : res.data, isLoaded:true})
            })
    }
    render() {
        var { isLoaded, surveys } = this.state;
        if(!isLoaded){
            return <p>Loading...</p>
        }else{
        return (
            <div className="container">
            <ul>
                {surveys.map(survey =>(
                    <li key={survey._id}>
                        {survey.text}
                        {survey.option.map(opt => opt.text)}
                    </li>
                ))}
            </ul>
            <Row>
                <CardEx/>
                <CardEx/>
            </Row>
            
        </div>
        );
    }
}
}

export default SurveysList;