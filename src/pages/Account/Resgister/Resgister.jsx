import "./Resgister.css";
import React from "react";
import Footer from "../../../components/Footer/Footer";

const Resgister = ({ title }) => {
    return (
        <>
            <div className="container">
                <h1 className="resgister">{title}</h1>
            </div>
            <Footer />
        </>
    );
};

export default Resgister;
