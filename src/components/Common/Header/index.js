import React from "react";
import Image from "../../../assets/images/todo.png";
import "./Header.scss";

function Header() {
    return (
        <header>
            <nav className="nav-navbar">
                <a href="/">
                    <img src={Image} alt="Home" className="img-logo"/>
                </a>
            </nav>
        </header>
    );
}

export default Header;
