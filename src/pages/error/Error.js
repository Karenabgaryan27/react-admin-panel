import React from "react";
import { useGlobalContext } from "../../context";
import { motion } from "framer-motion";

export default function Error() {
    const { fade } = useGlobalContext().animations;

    return (
        <motion.main className="error-page" {...fade}>
            <section className="error">
                <div className="container">
                    Error
                </div>
            </section>
        </motion.main>
    );
}
