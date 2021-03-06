import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default class SignInComponent extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
            login: "",
            password: ""
        }
        this.userExist = false;
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    static get contextTypes () {
        return {
            router: PropTypes.object.isRequired
        };
    }

    changeLogin (event) {
        this.setState({login: event.target.value});
    }

    changePassword (event) {
        this.setState({password: event.target.value});
    }

    handleSignIn (event) {
        event.preventDefault();
        const users = JSON.parse(localStorage.getItem("users"));

        // noinspection JSAnnotator
        if (this.state.login == "" || this.state.password == "") {
            alert("Your login or password is undefined!");

        } else {
            users.forEach((item) => {
                if(item.login == this.state.login && item.password == this.state.password) {
                    localStorage.setItem("authorized", true);
                    localStorage.setItem("currentUser", item.name);
                    this.userExist = true;
                    this.context.router.history.push('/');
                }
            });
        }

        // console.error("userExist", this.userExist);
        if(!this.userExist) {
            alert("There is no such user, please sign up");
            this.setState({login: ""});
            this.setState({password: ""});
        }
    }

    render () {
        return (
            <div>
                <div className="navigation">
                    <Link to="/">Home</Link>
                </div>
                <div className="signInForm">
                    <h4>Please enter your information</h4>
                    <form onSubmit={this.handleSignIn}>
                        <input type="text" value={this.state.login} onChange={this.changeLogin.bind(this)} placeholder="Login" />
                        <input type="password" value={this.state.password} onChange={this.changePassword.bind(this)} placeholder="Password" />
                        <input type="submit" value="Submit"/>
                        <Link to="/signupform">Sign Up</Link>
                    </form>
                </div>
            </div>
        );
    }
}

