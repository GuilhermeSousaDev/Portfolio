import { configureStore } from '@reduxjs/toolkit';
import ThemeSlice from './ThemeSlice';
import SnackbarSlice from './SnackbarSlice';
import AnimateSlice from './AnimateSlice';

export const store = configureStore({
    reducer: {
        theme: ThemeSlice,
        snackbar: SnackbarSlice,
        animate: AnimateSlice,
    },
});