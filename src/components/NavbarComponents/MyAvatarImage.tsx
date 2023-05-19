import { motion } from "framer-motion";
import Avatar from "@mui/material/Avatar";
import img from '../../assets/img.jpeg';

export default function MyAvatarImage() {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Avatar src={img} color="#F0354A" />
      </motion.div>
    )
}