import React from "react";
import Login from "./Login";
import Register from "./Register";
import Policy from "../Policy/Policy";
import "./Auth.css"

const Auth = () => {
    return (
        <React.Fragment>
            <section id="account">
                <div className="container">
                    <div className="account-wrapper">
                        <Login />
                        <Register />
                    </div>
                </div>
            </section>
            <Policy />
        </React.Fragment>
    )
}

export default Auth;