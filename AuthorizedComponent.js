import React from "react";
import {Route, Link} from "react-router-dom";
import HomeComponent from "./HomeComponent";

export default class AuthorizedComponent extends React.Component {
    render () {
        return (
            <div className="navigation">
                <div className="form-navigation">
                    <p dangerouslySetInnerHTML={{__html: "Welcome, " + localStorage.getItem("currentUser")}}></p>
                    <Link to="/"> Sign Out </Link>
                </div>
                <Route exact path="/" component={HomeComponent}/>
            </div>
        );
    }
}