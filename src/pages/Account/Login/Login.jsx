import "./Login.css";

import React from "react";
import Footer from "../../../components/Footer/Footer";

const Login = ({ title }) => {
    return (
        <>
            <div className="container">
                <h1 className="login">{title}</h1>
            </div>
            <Footer />
        </>
    );
};

export default Login;
