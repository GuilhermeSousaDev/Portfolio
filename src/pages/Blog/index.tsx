import { Box, Typography } from "@mui/material";
import Navbar from "../../app/Navbar";
import AppBox from "../../components/MuiCustomComponents/AppBox";
import { Link } from "react-router-dom";

const posts = [
    {
        id: 1,
        title: 'Using WebSockets in a Redux Application',
        file: '',
        createdAt: new Date(),
    },
    {
        id: 2,
        title: 'Using Fireabase in a React Application',
        createdAt: new Date(new Date().setFullYear(2022)),
    },
    {
        id: 3,
        title: 'Using WebSockets in a Vuex Application',
        createdAt: new Date(new Date().setFullYear(2022)),
    },
    {
        id: 4,
        title: 'Using WebSockets in a Vuex Application',
        createdAt: new Date(new Date().setFullYear(2022)),
    },
    {
        id: 5,
        title: 'Using WebSockets in a Vuex Application',
        createdAt: new Date(new Date().setFullYear(2021)),
    },
    {
        id: 6,
        title: 'Using WebSockets in a Vuex Application',
        createdAt: new Date(new Date().setFullYear(2021)),
    },
    {
        id: 7,
        title: 'Using WebSockets in a Vuex Application',
        createdAt: new Date(new Date().setFullYear(2020)),
    },
];

const obj = {} as { [key: number]: any }

posts.every(post => obj[post.createdAt.getFullYear()] = []);

posts.forEach(post => {
    obj[post.createdAt.getFullYear()].push(post);
});

const sortFn = (a: any, b: any) => {
    return Number(b[0]) - Number(a[0]);
}

export default function Blog() {
    return (
        <AppBox>
            <Navbar />
            <Box display="flex" alignItems="flex-start" flexDirection="column" sx={{ mt: 10 }}>
                <Typography sx={{ mb: 5 }} color="text.primary" variant="h3">Posts</Typography>

                {Object.entries(obj).sort(sortFn).map(([year, yearPosts], index) => (
                    <Box key={index} sx={{ p: 1 }}>
                        <Typography sx={{ mb: 1 }} variant="h4" color="text.primary">{year}</Typography>
                        {yearPosts.map((post: any) => (
                            <Box key={post.id} display="flex" justifyContent="space-between">
                                <Link to={`post/${post.id}`}>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                    >
                                        {post.title}
                                    </Typography>
                                </Link>
                                <Typography
                                    variant="body1"
                                    color="text.disabled"
                                    sx={{ ml: 5, mr: 1 }}
                                >
                                    {post.createdAt.toLocaleDateString('en', { day: '2-digit' })}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.disabled"
                                >
                                    {post.createdAt.toLocaleDateString('en', { month: 'short' })}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                ))}
            </Box>
        </AppBox>
    )
}