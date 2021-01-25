import React from "react";
import { ImageList } from "../../Common/Image/Main";
import "./Header.scss";

function Header() {
    return (
        <header>
            <nav className="nav-navbar">
                <div className="img-logo">
                    <a href="/">
                        <img src={ImageList.logo} alt="Home" className="img-logo" />
                    </a>
                </div>
                <div className="title-app">
                    <h1>Todo list</h1>
                </div>
            </nav>
        </header>
    );
}

export default Header;
