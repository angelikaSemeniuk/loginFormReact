import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";
import HomeComponent from "./HomeComponent";
import AuthorizedComponent from "./AuthorizedComponent";

export default class LoginForm extends React.Component {
    render () {
        const initialUsers = [];
        if (!localStorage.getItem("users")) {
            localStorage.setItem("users", JSON.stringify(initialUsers));
        }
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
                    <Route exact path="/authorized" component={AuthorizedComponent}/>
                </div>
            </Router>

        );
    }

}