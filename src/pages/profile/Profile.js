import React from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";

export default function Profile() {
    const { fade } = useGlobalContext().animations;

    return (
        <motion.main {...fade} className="main">
            <div className="main-inner">profile</div>
        </motion.main>
    );
}
