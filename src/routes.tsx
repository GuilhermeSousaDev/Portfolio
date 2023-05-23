import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Portfolio';
import Blog from './pages/Blog';
import Post from './pages/Post';
import SnackbarApp from './components/Snackbar';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/post/:id" element={<Post />} />
            </Routes>
            <SnackbarApp />
        </BrowserRouter>
    )
}