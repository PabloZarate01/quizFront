import React, { Component } from 'react';
class LoginScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className=""> <h3>Login</h3> </div>
                        <div className="card">
                            <div className="card-content">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="username" type="text" className="validate"/>
                                        <label for="username">Username</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="password" type="password" className="validate"/>
                                        <label for="password">Password</label>
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default LoginScreen;