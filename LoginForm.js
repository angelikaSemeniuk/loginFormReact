import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";
import HomeComponent from "./HomeComponent";

export default class LoginForm extends React.Component {
    render () {
        return (
            <Router>
                <div>
                    <div className="navigation">
                        <Link to="/">Home</Link>
                        <div className="forms-navigation">
                            <Link to="/signinform">Sign In</Link>
                            <Link to="/signupform">Sign Up</Link>
                        </div>
                    </div>
                    <hr/>
                    <Route exact path="/" component={HomeComponent}/>
                    <Route exact path="/signinform" component={SignInComponent}/>
                    <Route exact path="/signupform" component={SignUpComponent}/>
                </div>
            </Router>

        );
    }

}