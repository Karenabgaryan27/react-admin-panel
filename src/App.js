import React, { useState, useEffect } from "react";
import { Home, Profile, Error } from "./pages";
import { Header, Sidebar } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function App() {
    const location = useLocation();

    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            // top: 500,
            behavior: "smooth",
            // behavior: "auto",
        });
    }, [location.pathname]);

    return (
        <>
            {showNav && <Sidebar />}

            <div className="main-content">
                {showNav && <Header />}

                <AnimatePresence exitBeforeEnter>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />

                        <Route path="*" element={<Error setShowNav={setShowNav} />} />
                    </Routes>
                </AnimatePresence>
            </div>
        </>
    );
}
