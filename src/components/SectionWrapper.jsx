import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const SectionWrapper = ({ children, className, id, delay = 0 }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={cn("py-8 md:py-12 relative", className)}
        >
            {children}
        </motion.section>
    );
};

export default SectionWrapper;
