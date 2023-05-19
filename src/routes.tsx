import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './app';
import Blog from './Blog';
import SnackbarApp from './components/Snackbar';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
            <SnackbarApp />
        </BrowserRouter>
    )
}