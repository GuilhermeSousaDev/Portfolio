import style from './markdown-styles.module.css';
import AppBox from "../../components/MuiCustomComponents/AppBox";
import Navbar from "../../app/Navbar";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppSelector } from '../../hooks/useAppSelector';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useFirebaseFindByKey } from '../../services/firebase/hooks/useFirebaseFindByKey';
import { IPost } from '../../services/firebase/models/IPost';
import useThereIsScrollInPage from '../../hooks/useThereIsScrollInPage';

export default function Post() {
    useThereIsScrollInPage();
    const { postKey } = useParams();
    const isThemeDark = useAppSelector(state => state.theme.default) === 'dark';

    const [post, setPost] = useState<IPost | null>(null);

    if (postKey) {
        useFirebaseFindByKey({ path: `posts/${postKey}`, setState: setPost });
    }

    return (
        <AppBox>
            <Navbar />
            <Box display="flex" justifyContent="space-evenly" sx={{ mt: 10 }}>
                <Box sx={{ mr: 10, mt: 5 }}>
                    <FavoriteIcon />
                </Box>
                {post && 
                    <div
                        className={
                            isThemeDark ? 
                            style.reactMarkDownDark 
                            : style.reactMarkDownLight
                        }
                        dangerouslySetInnerHTML={{ __html: post.contentMarkdown }}
                    />
                }
                <Box>
                    <Box sx={{ bgcolor: '#5135F0', height: 200, width: 50 }}>

                    </Box>
                </Box>
            </Box>
        </AppBox>
    )
}