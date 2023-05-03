import { configureStore } from '@reduxjs/toolkit';
import ThemeSlice from './ThemeSlice';
import SnackbarSlice from './SnackbarSlice';
import SkillsSlice from './SkillsSlice';

export const store = configureStore({
    reducer: {
        theme: ThemeSlice,
        snackbar: SnackbarSlice,
        skills: SkillsSlice,
    },
});