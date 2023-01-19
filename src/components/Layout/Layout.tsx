import { motion } from "framer-motion";
import { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode
}

const Layout: FC<Props> = ({ children }) => (
    <motion.div
        layoutScroll
        initial={{ x: 500, opacity: 0, overflow: 'auto' }}
        animate={{ x: 0, opacity: 1, overflow: 'hidden' }}
        exit={{ x: 500, opacity: 0, overflow: 'auto' }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
        }}
    >
        {children}
    </motion.div>
);
export default Layout;