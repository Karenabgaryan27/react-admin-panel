import React from "react";
import { Drawer } from "../";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../";
import { useGlobalContext } from "../../context.js";
import localData from "../../localData";

// const menu = [
//     { title: "home", to: "/" },
//     { title: "about", to: "/about" },
//     { title: "products", to: "/products" },
// ];

export default function Navbar() {
    // const location = useLocation();
    const { showSidebar, setShowSidebar } = useGlobalContext();

    const { settings, bar } = localData.svgs;

    return (
        <nav className="navbar navbar-expand-lg">
            <div
                // className={`navbar-toggler  ${showSidebar ? "active" : ""}`}
                className={`navbar-toggler`}
                onClick={() => setShowSidebar(!showSidebar)}
                style={{width: '30px', cursor: 'pointer'}}
            >
                {bar}
            </div>
            <Link className="navbar-brand" to="/" style={{ marginLeft: "30px" }}>
                brand
            </Link>

            {/* <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        {menu.map(({ title, to }, index) => (
                            <li className="nav-item" key={index}>
                                <Link to={to} className={`nav-link ${to === location.pathname ? "active" : ""}`}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                       
                    </ul>
                </div> */}
        </nav>
    );
}
