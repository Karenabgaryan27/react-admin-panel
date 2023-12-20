import React from "react";
// import { Header, Sidebar, AppBar } from "../../components";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";

export default function Home() {
    const { fade } = useGlobalContext().animations;

    return (
        <motion.main {...fade} className="main">
            <div className="main-inner">dashboard</div>
        </motion.main>
    );
}
