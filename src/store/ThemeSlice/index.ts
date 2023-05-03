import { createSlice } from '@reduxjs/toolkit';

interface IThemeState {
    default: 'light' | 'dark';
}

const initialState: IThemeState = {
    default: 'dark',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeDefaultTheme: (state) => {
            state.default = state.default === 'dark' ? 'light' : 'dark';
        }
    },
});

export const { changeDefaultTheme } = themeSlice.actions;
export default themeSlice.reducer;