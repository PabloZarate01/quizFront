import React, { Component } from 'react';
class Navbar extends Component {
    render() {
        return (

            <nav>
                <div className="nav-wrapper blue lighten-2 ">
                <a href="/" className="brand-logo">Logo</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/">Home</a></li> 
                    <li><a href="/surveys">Surveys</a></li>
                    <li><a href="/create-survey">Create survey</a></li>
                    <li><a href="/login">Log In</a></li>
                </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;