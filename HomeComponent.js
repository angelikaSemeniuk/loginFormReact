import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import PropTypes from "prop-types";
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";

export default class HomeComponent extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    static get contextTypes () {
        return {
            router: PropTypes.object.isRequired
        };
    }


    handleSignOut () {
        localStorage.setItem("authorized", false);
        this.context.router.history.push('/');
    }

    render () {
        console.error("action-render in Home")
        const authorized = JSON.parse(localStorage.getItem("authorized"));
        return (
            <div className="navigation">
                { authorized ? (
                    <div className="form-navigation">
                        <Link to="/">Home</Link>
                        <p dangerouslySetInnerHTML={{__html: "Welcome, " + localStorage.getItem("currentUser")}}></p>
                        <button onClick={this.handleSignOut.bind(this)}>Sign out</button>
                    </div>
                ) : (
                    <div className="form-navigation">
                        <Link to="/">Home</Link>
                        <Link to="/signinform">Sign In</Link>
                        <Link to="/signupform">Sign Up</Link>
                        <p>You need authorization! Please, sign in or register!</p>
                    </div>
                )
                }
            </div>
        );
    }
}