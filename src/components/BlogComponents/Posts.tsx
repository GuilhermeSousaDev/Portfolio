import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { IData, IPosts } from "../../services/firebase/models/IPosts";

interface IProps {
    yearPosts: IPosts[];
    year: string;
}

export default function Posts({ yearPosts, year }: IProps) {
    return (
        <Box sx={{ p: 1 }}>
            <Typography sx={{ mb: 1 }} variant="h4" color="text.primary">{year}</Typography>
            {yearPosts.map((post: { key: string, data: IData }) => (
                <Box key={post.key} display="flex" justifyContent="space-between" alignItems="center">
                    <Link to={`post/${post.key}`}>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                        >
                            {post.data.title}
                        </Typography>
                    </Link>
                    <Box display="flex">
                        <Typography
                            variant="body1"
                            color="text.disabled"
                            sx={{ ml: 5, mr: 1 }}
                        >
                            {new Date(post.data.createdAt).toLocaleDateString('en', { day: '2-digit' })}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.disabled"
                        >
                            {new Date(post.data.createdAt).toLocaleDateString('en', { month: 'short' })}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}