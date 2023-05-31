import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Posts from "./Posts";
import { motion } from 'framer-motion';
import { IPosts } from "../../services/firebase/models/IPosts";

interface IProps {
    postsObj: { [key: number]: IPosts[] };
}

export default function BlogComponent({ postsObj }: IProps) {
    return (
        <Box display="flex" alignItems="flex-start" flexDirection="column" sx={{ mt: 10, mb: '10%' }}>
            <Typography sx={{ mb: 5 }} color="text.primary" variant="h3">Posts</Typography>

            {Object.entries(postsObj).length ?
                Object.entries(postsObj).map(([year, yearPosts], index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Posts year={year} yearPosts={yearPosts} />
                    </motion.div>
                )) :
                <CircularProgress color="primary" />
            }
        </Box>
    )
}