import React from "react";
import PropTypes from "prop-types";


export default class SignUpComponent extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state= {
            fullName: "",
            login: "",
            password: ""
        }
        this.submitOk = true;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static get contextTypes () {
        return {
            router: PropTypes.object.isRequired
        };
    }

    changeName (event) {
        this.setState({fullName: event.target.value});
    }

    changeLogin (event) {
        this.setState({login: event.target.value});
    }

    changePassword (event) {
        this.setState({password: event.target.value});
    }

    handleSubmit (event) {
        event.preventDefault();
        const users = JSON.parse(localStorage.getItem("users"));

        if(this.state.fullName === "" || this.state.login === "" || this.state.password === "") {
            alert("Full fill all fields");
            this.submitOk = false;
            this.setState({fullName: ""});
            this.setState({login: ""});
            this.setState({password: ""});
        } else {
            this.submitOk = true;
        }
        users.forEach((item) => {
            if (item.login == this.state.login) {
                alert("User with this login already exist!");
                this.submitOk = false;
                this.setState({fullName: this.state.fullName});
                this.setState({login: ""});
                this.setState({password: this.state.password});
            } else {
                this.submitOk = true;
            }
        });

        if(this.submitOk) {
            users.push({name: this.state.fullName, login: this.state.login, password: this.state.password});
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("currentUser", this.state.fullName);
            localStorage.setItem("authorized", true);
            this.context.router.history.push('/');
        }
        // console.error("users-after", users);

    }

    render () {
        return (
            <div className="signUpForm">
                <h4>Please enter your information</h4>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.fullName} onChange={this.changeName.bind(this)} placeholder="Full name" />
                    <input type="text" value={this.state.login} onChange={this.changeLogin.bind(this)} placeholder="Login" />
                    <input type="password" value={this.state.password} onChange={this.changePassword.bind(this)} placeholder="Password" />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}