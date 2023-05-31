import Navbar from "../../app/Navbar";
import AppBox from "../../components/MuiCustomComponents/AppBox";
import { useFirebaseFind } from "../../services/firebase/hooks/useFirebaseFind";
import { useState } from "react";
import { IPosts } from "../../services/firebase/models/IPosts";
import BlogComponent from "../../components/BlogComponents/BlogComponent";
import useThereIsScrollInPage from "../../hooks/useThereIsScrollInPage";

export default function Blog() {
    useThereIsScrollInPage();

    const [posts, setPosts] = useState<IPosts[]>([]);
    const obj = {} as { [key: number]: IPosts[] };

    useFirebaseFind({ path: 'posts', setState: setPosts });

    posts.every(post => obj[new Date(post.data.createdAt).getFullYear()] = []);

    posts.forEach(post => {
        obj[new Date(post.data.createdAt).getFullYear()].push(post);
    });

    return (
        <AppBox>
            <Navbar />
            <BlogComponent postsObj={obj} />
        </AppBox>
    )
}