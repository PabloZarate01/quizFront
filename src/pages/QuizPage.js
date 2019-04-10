import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuizPage extends Component {
    constructor(){
        super();
        this.state = {
            quiz:[]
        }
    }

    componentDidMount(){
        fetch("/quiz")
            .then(res => res.json())
            .then(quiz => this.setState({quiz}, () => console.log('Quizs fetch...', quiz)));
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="card">
                    <div className="card-content">
                        <h2>surveys</h2>
                    </div>
                    <div>
                        <ul>
                        {this.state.quiz.map(quiz =>
                            <li key={quiz.id}>
                                <div className="row">
                                    <div className="col s12 m6">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                        <span className="card-title">{quiz.title}</span>
                                        <p>{quiz.cuestion}</p>
                                        </div>
                                        <div className="card-action">
                                        <a href="/surveys">This is a link</a>
                                        <a href="/surveys">This is a link</a>
                                        <span className="new badge" data-badge-caption="Votes">{quiz.votes}</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </li>
                            )}
                        </ul>
                    </div>
                </div>
                
            
            </React.Fragment>
         );
    }
}
export default QuizPage;