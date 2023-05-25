import { Box, Typography } from "@mui/material";
import Navbar from "../../app/Navbar";
import AppBox from "../../components/MuiCustomComponents/AppBox";
import { Link } from "react-router-dom";
import { useFirebaseFind } from "../../services/firebase/hooks/useFirebaseFind";
import { useState } from "react";

interface IData {
    title: string;
    contentMarkdown: string;
    createdAt: Date;
    updatedAt: Date;
}

interface IPost {
    key: string;
    data: IData;
}

export default function Blog() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const obj = {} as { [key: number]: any };

    useFirebaseFind({ path: 'posts', setState: setPosts });

    posts.every(post => obj[new Date(post.data.createdAt).getFullYear()] = []);

    posts.forEach(post => {
        obj[new Date(post.data.createdAt).getFullYear()].push(post);
    });

    return (
        <AppBox>
            <Navbar />
            <Box display="flex" alignItems="flex-start" flexDirection="column" sx={{ mt: 10 }}>
                <Typography sx={{ mb: 5 }} color="text.primary" variant="h3">Posts</Typography>

                {Object.entries(obj).map(([year, yearPosts], index) => (
                    <Box key={index} sx={{ p: 1 }}>
                        <Typography sx={{ mb: 1 }} variant="h4" color="text.primary">{year}</Typography>
                        {yearPosts.map((post: { key: string, data: IData }) => (
                            <Box key={post.key} display="flex" justifyContent="space-between">
                                <Link to={`post/${post.key}`}>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                    >
                                        {post.data.title}
                                    </Typography>
                                </Link>
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
                        ))}
                    </Box>
                ))}
            </Box>
        </AppBox>
    )
}