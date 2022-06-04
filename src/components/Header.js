import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
            <img src={require('../assets/logo.png')} className="ui small image" />
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
            </div>
        </div>
    );
}
