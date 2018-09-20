import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <LoginForm />
    </BrowserRouter>,
    document.getElementById("root")
);