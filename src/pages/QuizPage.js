import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuizPage extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <h1>Quizes</h1>
                <Link to="/">Landing page</Link>
            </React.Fragment>
         );
    }
}
export default QuizPage;