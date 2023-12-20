import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import localData from "../../localData";
import {useGlobalContext} from '../../context.js'

export default function Sidebar() {
    const { brand, home, profile, error } = localData.svgs;
    const location = useLocation();
    const {showSidebar,setShowSidebar} = useGlobalContext()
 
    return (
        <>
            <aside className={`sidebar ${showSidebar ? "show" : ""}`} id="sidebar">
                <div className="sidebar-inner">
                    <h2 className="sidebar-brand">
                        {brand}
                        <span> brand </span>
                    </h2>
                    <ul className="sidebar-list">
                        <Link to="/" className={`sidebar-link ${location.pathname == "/" ? "active" : ""}`}>
                            {home}
                            <span> home </span>
                        </Link>
                        <Link
                            to="/profile"
                            className={`sidebar-link ${location.pathname == "/profile" ? "active" : ""}`}
                        >
                            {profile}
                            <span> profile </span>
                        </Link>
                        <Link to="/error" className={`sidebar-link`}>
                            {error}
                            <span> error </span>
                        </Link>
                    </ul>
                </div>
            </aside>

            <div className={`sidebar-backdrop ${showSidebar ? "show" : ""}`} onClick={()=>setShowSidebar(false)}></div>
        </>
    );
}
