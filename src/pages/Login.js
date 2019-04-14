import React, { Component } from 'react';
class LoginScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title center">LOGIN</span>
                            <div class="divider"></div>
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
                                <a href="/"><input type="submit" value="LOGING" className="waves-effect waves-light btn-large"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default LoginScreen;