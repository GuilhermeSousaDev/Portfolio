import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BlogLink() {
    const [isLinkHover, setIsLinkHover] = useState(false);
    const pathname = window.location.pathname;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: pathname == '/blog' ? 1 : 4.5 }}
            onHoverStart={() => setIsLinkHover(true)}
            onHoverEnd={() => setIsLinkHover(false)}
        >
            <Typography
                component="a"
                href={ pathname === '/blog' ? '/' : '/blog' }
                sx={{ textDecoration: 'none', cursor: 'pointer' }}
                color="text.primary"
                variant="h6"
            >
                { pathname === '/blog' ? 'Porfolio' : 'Blog' }
                <motion.div
                    style={{ height: '2px', background: 'purple' }}
                    animate={{ width: isLinkHover ? '100%' : '0%' }}
                ></motion.div>
            </Typography>
        </motion.div>
    )
}