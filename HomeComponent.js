import React from "react";

export default class HomeComponent extends React.Component {
    render () {
        return (
            <div className="navigation">
                <div className="form-navigation">
                    <p>You need authorization! Please, sign in or register!</p>
                </div>
            </div>
        );
    }
}