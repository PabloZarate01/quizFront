import React, { Component } from 'react'
import axios from 'axios'
import CardEx from './SurveyCard'
import { Row, Button, Spinner } from 'reactstrap'
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
            return <Spinner color="secondary"/>
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
                    option={survey.option.map(opt => <Button>{opt.text}</Button>)}
                />
            ))}
            </Row>            
        </div>
        );
    }
}
}

export default SurveysList;