import { motion } from "framer-motion";
import type { ReactNode } from "react";

function FadeContainer(props: { children: ReactNode }) {
    return (
        <motion.div style={{
            height: "100%",
            display: "flex",
            flexDirection: "column"
        }}
            initial={{ opacity: 0, transform: "translate(0, 16px)" }}
            animate={{ opacity: 1, transform: "none" }}
            transition={{ duration: 0.5 }}>
            {props.children}
        </motion.div>
    )
}

export default FadeContainer;