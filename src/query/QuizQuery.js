import React, { Component } from 'react';
import Navbar from '../components/Navbar';
const Quiz = (props) =>(
    <li>{props.title}--{props.cuestion}--{props.votes}</li>
)
class QuizList extends Component {
    constructor(props){
        super(props)
        this.state = {
            quizs:[]
        }
    }
    componentWillMount(){
        fetch('/quiz')
            .then(response => response.json())
            .then(quizs =>{
                quizs.results.forEach(quiz => {
                    let data = {
                        title:quiz.title,
                        cuestion:quiz.cuestion,
                        votes:quiz.votes
                    }
                    console.log(data)
                    this.setState({quizs:this.state.quizs.concat([data])})
                });
            })
    }
    
    render() { 
       
        console.log(this.state.quizs.length)
        if(this.state.quizs.length > 0){
            return(
                <div>
                {this.state.quizs.map(quiz => <Quiz key={quiz.title} title={quiz.title} cuestion={quiz.cuestion} votes={quiz.votes}/>)}
                </div>
            )
        }

    }
}
 
export default QuizList;