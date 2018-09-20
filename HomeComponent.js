import React from "react";

export default class HomeComponent extends React.Component {
    render () {
        return (
            <div className="navigation">
                <div className="form-navigation">
                    <p dangerouslySetInnerHTML={{__html: "Welcome, " + localStorage.getItem("currentUser")}}></p>
                </div>

            </div>
        );
    }
}