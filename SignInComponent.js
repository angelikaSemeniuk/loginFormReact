import React from "react";
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import PropTypes from "prop-types";


export default class SignInComponent extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.submit = false;
    }

    static get contextTypes () {
        return {
            router: PropTypes.object.isRequired
        };
    }

    handleSignIn () {
        this.context.router.history.push('/');
    }
    render () {
        return (
            <div className="signInForm">
                <h4>Please enter your information</h4>
                <form onSubmit={this.handleSignIn}>
                    <input type="text" placeholder="Login" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

