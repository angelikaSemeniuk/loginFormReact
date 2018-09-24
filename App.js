import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";
import HomeComponent from "./HomeComponent";

export default class App extends React.Component {

    render () {
        const initialUsers = [];
        if (!localStorage.getItem("users")) {
            localStorage.setItem("users", JSON.stringify(initialUsers));
        }
        return (
            <Router>
                <Route exact path="/" component={HomeComponent}/>
                <Route exact path="/signinform" component={SignInComponent}/>
                <Route exact path="/signupform" component={SignUpComponent}/>
            </Router>
        );
    }
}