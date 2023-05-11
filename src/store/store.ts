import { configureStore } from '@reduxjs/toolkit';
import ThemeSlice from './ThemeSlice';
import SnackbarSlice from './SnackbarSlice';

export const store = configureStore({
    reducer: {
        theme: ThemeSlice,
        snackbar: SnackbarSlice,
    },
});