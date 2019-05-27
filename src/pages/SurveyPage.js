import React, { Component } from 'react'
import axios from 'axios'
import CardEx from '../components/SurveyCard'
import { Row, Col } from 'reactstrap'
class SurveyPage extends Component {
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
            <Row>
            {surveys.map(survey =>(
                <CardEx
                    key={survey._id}
                    title={survey.title}
                    text={survey.text}
                    date={survey.createdAt}
                    option={survey.option.map(opt => opt.text)}
                />
            ))}
            </Row>
        </div>
        );
    }
}
}

export default SurveyPage;