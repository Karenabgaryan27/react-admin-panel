import React from "react";
import {Navbar} from '../'

export default function Header({ title, children }) {
    return (
        <header className="hero">
            <Navbar/>
        </header>
    );
}
