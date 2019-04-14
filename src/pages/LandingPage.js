import React, { Component } from 'react';
import Navbar from '../components/Navbar';
class LandingPage extends Component {
    render() { 
        return (
            <React.Fragment>
                <Navbar/>
                <div class="row">
                <div class="col s3">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Title Of this card</span>
                            <div class="divider"></div>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>

                <div class="col s9">
                    <div className="card">
                            <div className="card-content">
                                <span className="card-title">Title Of this card</span>
                                <div class="divider"></div>
                                <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                            </div>
                    </div>
                </div>
            
                </div>
            </React.Fragment>
        );
    }
}
 
export default LandingPage;
