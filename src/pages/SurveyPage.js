import React, { Component } from 'react'
class SurveyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            surveys:[],
            isLoaded:false
        };
    }
    componentDidMount() {
        fetch('/survey')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded:true,
                    surveys:json
                })
            });
    }
    
    render() {
        var { isLoaded, surveys } = this.state;
        if(!isLoaded){
            return <div>Loading...</div>
        }else{
            console.log(surveys);
            return (
                <div className="container">
                    <ul>
                        {surveys.map(survey =>(
                            <li key={survey._id}>
                                {survey.text} {JSON.stringify(survey.option.map((opt) => opt.text))}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default SurveyPage;