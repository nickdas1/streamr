import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

export default function Header() {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                <img
                    src={require("../assets/logo.png")}
                    className="ui small image"
                    alt="logo"
                />
            </Link>
            <div className="right menu">
                <div style={{ margin: "auto" }}>
                    <Link to="/" className="ui primary basic button">
                        All Streams
                    </Link>
                </div>
                <GoogleAuth />
            </div>
        </div>
    );
}
